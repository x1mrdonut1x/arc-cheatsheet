import { useMemo } from 'react'
import { quests } from '../../../data/quests'
import { traders } from '../../../data/traders'
import type { Item } from '../../../data/types'
import { useCompletedQuests } from '../../../hooks/useCompletedQuests'
import { AnimatedList } from '../../AnimatedList'
import { Card } from '../../Card/Card'
import type { ItemWithAmount } from '../ItemGrid/ItemGrid'
import { ItemGrid } from '../ItemGrid/ItemGrid'
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
        const questItems: Array<ItemWithAmount> = quest.items_needed
          .map((neededItem) => {
            const foundItem = allItems.find((i) => i.id === neededItem.id)
            return foundItem
              ? { item: foundItem, amount: neededItem.amount }
              : null
          })
          .filter((x): x is ItemWithAmount => x !== null)

        return { ...quest, questItems, isCompleted: isCompleted(quest.id) }
      })
  }, [item.id, allItems, isCompleted])

  if (relatedQuests.length === 0) {
    return null
  }

  return (
    <Card variant="secondary" title="Quests" icon="📜">
      <AnimatedList
        as="ul"
        className={styles.questList}
        aria-label={`Quests requiring ${item.name}: ${relatedQuests.length} quest${relatedQuests.length !== 1 ? 's' : ''}`}
      >
        {relatedQuests.map((quest) => (
          <li key={quest.id} className={styles.questItem}>
            <div className={styles.questHeader}>
              <span className={styles.questName}>{quest.name}</span>
              {quest.isCompleted && (
                <span className={styles.completedBadge}>✓ Completed</span>
              )}
              <span className={styles.questTrader}>
                {traders.find((trader) => trader.id === quest.trader)?.name}
              </span>
            </div>
            <div className={styles.itemsContainer}>
              <ItemGrid
                items={quest.questItems}
                variant="secondary"
                highlightedItemId={item.id}
                onItemSelect={onItemSelect}
              />
            </div>
          </li>
        ))}
      </AnimatedList>
    </Card>
  )
}
