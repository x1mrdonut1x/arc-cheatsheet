import { AlertCircle, Coins, Package, Recycle } from 'lucide-react'
import { Card } from '../../Card/Card'
import { BreakdownSection } from './BreakdownSection'
import styles from './Baseline.module.scss'

interface BaselineProps {
  recommendation: 'keep' | 'sell' | 'recycle'
  totalNeeded: number
  questsNeeded: Array<{
    id: number
    name: string
    traderName?: string
    amount: number
  }>
  upgradesNeeded: Array<{
    id: number
    name: string
    level: number
    amount: number
  }>
  projectStagesNeeded: Array<{
    level: number
    name: string
    amount: number
  }>
  allQuestsCompleted: boolean
  allUpgradesCompleted: boolean
  allProjectsCompleted: boolean
  hasQuests: boolean
  hasUpgrades: boolean
  hasProjects: boolean
}

export function Baseline({
  recommendation,
  totalNeeded,
  questsNeeded,
  upgradesNeeded,
  projectStagesNeeded,
  allQuestsCompleted,
  allUpgradesCompleted,
  allProjectsCompleted,
  hasQuests,
  hasUpgrades,
  hasProjects,
}: BaselineProps) {
  const getIcon = () => {
    switch (recommendation) {
      case 'keep':
        return <Package size={18} />
      case 'sell':
        return <Coins size={18} />
      case 'recycle':
        return <Recycle size={18} />
    }
  }

  const getRecommendationText = () => {
    switch (recommendation) {
      case 'keep':
        return 'Keep Item'
      case 'sell':
        return 'Sell'
      case 'recycle':
        return 'Recycle'
    }
  }

  return (
    <Card
      variant="primary"
      title="Recommendation"
      icon={<AlertCircle size={18} />}
    >
      <div className={styles.baseline} data-recommendation={recommendation}>
        <div className={styles.recommendation}>
          {getIcon()}
          <span className={styles.recommendationText}>
            {getRecommendationText()}
          </span>
        </div>

        {recommendation === 'keep' && (
          <div className={styles.details}>
            <p className={styles.needed}>
              You need <strong>{totalNeeded}</strong> to complete:
            </p>

            {hasQuests && !allQuestsCompleted && (
              <BreakdownSection
                title="Quests"
                items={questsNeeded.map((quest) => ({
                  id: quest.id,
                  label: quest.name,
                  sublabel: quest.traderName,
                  amount: quest.amount,
                }))}
              />
            )}

            {hasUpgrades && !allUpgradesCompleted && (
              <BreakdownSection
                title="Workshop Upgrades"
                items={upgradesNeeded.map((upgrade) => ({
                  id: `${upgrade.id}-${upgrade.level}`,
                  label: upgrade.name,
                  sublabel: `Lv. ${upgrade.level}`,
                  amount: upgrade.amount,
                }))}
              />
            )}

            {hasProjects && !allProjectsCompleted && (
              <BreakdownSection
                title="Project"
                items={projectStagesNeeded.map((stage) => ({
                  id: stage.level,
                  label: stage.name,
                  sublabel: `Stage ${stage.level}`,
                  amount: stage.amount,
                }))}
              />
            )}
          </div>
        )}

        {recommendation !== 'keep' && (
          <p className={styles.completedMessage}>
            {hasQuests || hasUpgrades || hasProjects ? (
              <>All quests, upgrades, and project stages completed!</>
            ) : (
              <>No quests, upgrades, or project stages require this item.</>
            )}
          </p>
        )}
      </div>
    </Card>
  )
}
