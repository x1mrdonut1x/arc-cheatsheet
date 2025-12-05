import { useMemo } from 'react'
import { quests } from '../../../data/quests'
import { traders } from '../../../data/traders'
import { QuestItem } from '../QuestItem'
import styles from './QuestsList.module.scss'

interface QuestsListProps {
  traderId: number
  completedQuests: Array<number>
  onToggleQuest: (questId: number) => void
}

export function QuestsList({
  traderId,
  completedQuests,
  onToggleQuest,
}: QuestsListProps) {
  const trader = traders.find((t) => t.id === traderId)
  const traderQuests = useMemo(
    () => quests.filter((quest) => quest.trader === traderId),
    [traderId],
  )

  if (traderQuests.length === 0) {
    return (
      <div className={styles.container}>
        <h3 className={styles.traderName}>{trader?.name}</h3>
        <div className={styles.empty}>
          <p>No quests available for this trader.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.traderName}>{trader?.name}</h3>
      <div className={styles.list}>
        {traderQuests.map((quest) => (
          <QuestItem
            key={quest.id}
            id={quest.id}
            name={quest.name}
            description={quest.description}
            isCompleted={completedQuests.includes(quest.id)}
            onToggleComplete={onToggleQuest}
          />
        ))}
      </div>
    </div>
  )
}
