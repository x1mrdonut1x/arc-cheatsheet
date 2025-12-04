import { Check, Wrench } from 'lucide-react'
import type { Item } from '../../../data/types'
import type { UpgradeInfo } from '../../../hooks/useItemAnalysis'
import { Card } from '../../Card/Card'
import { ItemGrid } from '../ItemGrid/ItemGrid'
import styles from './WorkshopUpgrades.module.scss'

interface WorkshopUpgradesProps {
  item: Item
  upgrades: Array<UpgradeInfo>
  onItemSelect?: (id: number) => void
}

export function WorkshopUpgrades({
  item,
  upgrades,
  onItemSelect,
}: WorkshopUpgradesProps) {
  if (upgrades.length === 0) {
    return null
  }

  return (
    <Card
      variant="secondary"
      title="Workshop Upgrades"
      icon={<Wrench size={18} />}
    >
      <div className={styles.upgrades}>
        {upgrades.map((upgrade) => (
          <div
            key={`${upgrade.workshopName}-${upgrade.level}`}
            className={styles.upgrade}
          >
            <div className={styles.header}>
              {upgrade.isCompleted && (
                <Check size={16} className={styles.completedIcon} />
              )}
              <span
                className={styles.workshopName}
                data-completed={upgrade.isCompleted || undefined}
              >
                {upgrade.workshopName}
              </span>
              <span className={styles.level}>Lv. {upgrade.level}</span>
            </div>
            <ItemGrid
              items={upgrade.ingredients}
              variant="secondary"
              highlightedItemId={item.id}
              onItemSelect={onItemSelect}
              ariaLabel={`Items needed for ${upgrade.workshopName} level ${upgrade.level}`}
            />
          </div>
        ))}
      </div>
    </Card>
  )
}
