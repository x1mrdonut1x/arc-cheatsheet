import { Check, Flag } from 'lucide-react'
import { useMemo } from 'react'
import { quests } from '../../../data/quests'
import { traders } from '../../../data/traders'
import type { Item } from '../../../data/types'
import { useCompletedQuests } from '../../../hooks/useCompletedQuests'
import { AnimatedList } from '../../AnimatedList'
import { Card } from '../../Card/Card'
import { ItemTile } from '../ItemTile/ItemTile'
import styles from './QuestList.module.scss'

interface QuestListProps {
  item: Item
  allItems: Array<Item>
  onItemSelect?: (id: number) => void
}

export function QuestList({ item, allItems, onItemSelect }: QuestListProps) {
  const { isCompleted } = useCompletedQuests()

  const relatedQuests = useMemo(() => {
    return quests
      .filter((quest) =>
        quest.items_needed.some((neededItem) => neededItem.id === item.id),
      )
      .map((quest) => {
        const questItems = quest.items_needed
          .map((neededItem) => {
            const foundItem = allItems.find((i) => i.id === neededItem.id)
            return foundItem
              ? { item: foundItem, amount: neededItem.amount }
              : null
          })
          .filter((x) => x !== null)

        return {
          ...quest,
          questItems,
          isCompleted: isCompleted(quest.id),
          trader: traders.find((t) => t.id === quest.trader),
        }
      })
  }, [item.id, allItems, isCompleted])

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
