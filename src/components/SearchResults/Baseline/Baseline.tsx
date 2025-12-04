import { AlertCircle, Coins, Package, Recycle } from 'lucide-react'
import { Card } from '../../Card/Card'
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
  allQuestsCompleted: boolean
  allUpgradesCompleted: boolean
  hasQuests: boolean
  hasUpgrades: boolean
}

export function Baseline({
  recommendation,
  totalNeeded,
  questsNeeded,
  upgradesNeeded,
  allQuestsCompleted,
  allUpgradesCompleted,
  hasQuests,
  hasUpgrades,
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
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Quests</h4>
                <ul className={styles.breakdown}>
                  {questsNeeded.map((quest) => (
                    <li key={quest.id}>
                      <span className={styles.label}>
                        {quest.name}
                        {quest.traderName && (
                          <span className={styles.trader}>
                            {' '}
                            {quest.traderName}
                          </span>
                        )}
                      </span>
                      <span className={styles.value}>×{quest.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hasUpgrades && !allUpgradesCompleted && (
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Workshop Upgrades</h4>
                <ul className={styles.breakdown}>
                  {upgradesNeeded.map((upgrade) => (
                    <li
                      key={`${upgrade.id}-${upgrade.level}`}
                      className={styles.label}
                    >
                      <span>{upgrade.name}</span>
                      <span className={styles.level}>Lv. {upgrade.level}</span>
                      <span className={styles.value}>x{upgrade.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {recommendation !== 'keep' && (
          <p className={styles.completedMessage}>
            {hasQuests || hasUpgrades ? (
              <>All quests and upgrades completed!</>
            ) : (
              <>No quests or upgrades require this item.</>
            )}
          </p>
        )}
      </div>
    </Card>
  )
}
