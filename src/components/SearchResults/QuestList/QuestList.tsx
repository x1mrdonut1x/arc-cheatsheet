import { useSearch } from '@tanstack/react-router'
import { Check, Flag } from 'lucide-react'
import type { Item } from '../../../data/types'
import type { QuestInfo } from '../../../hooks/useItemAnalysis'
import { AnimatedList } from '../../AnimatedList'
import { Card } from '../../Card/Card'
import { ItemTile } from '../../ItemTile/ItemTile'
import styles from './QuestList.module.scss'

interface QuestListProps {
  item: Item
  relatedQuests: Array<QuestInfo>
  onItemSelect?: (id: number) => void
}

export function QuestList({
  item,
  relatedQuests,
  onItemSelect,
}: QuestListProps) {
  const { id } = useSearch({ from: '/' })

  if (relatedQuests.length === 0) {
    return null
  }

  return (
    <Card variant="secondary" title="Quests" icon={<Flag size={18} />}>
      <ul
        className={styles.questList}
        aria-label={`Quests requiring ${item.name}`}
      >
        {relatedQuests.map((quest) => (
          <li key={quest.id} className={styles.questItem}>
            <div className={styles.questHeader}>
              {quest.isCompleted && (
                <Check size={16} className={styles.completedIcon} />
              )}
              <span
                className={styles.questName}
                data-completed={quest.isCompleted || undefined}
              >
                {quest.name}
              </span>
              <span className={styles.questTrader}>{quest.trader?.name}</span>
            </div>
            <AnimatedList className={styles.itemsList}>
              {quest.questItems.map(({ item: questItem, amount }) => (
                <ItemTile
                  key={questItem.id}
                  item={questItem}
                  amount={amount}
                  variant="secondary"
                  highlighted={id === questItem.id}
                  onClick={onItemSelect}
                />
              ))}
            </AnimatedList>
          </li>
        ))}
      </ul>
    </Card>
  )
}
