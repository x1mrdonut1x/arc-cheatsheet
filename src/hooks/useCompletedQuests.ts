import { useCallback } from 'react'
import { quests } from '../data/quests'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'arc-cheatsheet-completed-quests'

export function useCompletedQuests() {
  const [completedQuests, setCompletedQuests] = useLocalStorage<Array<number>>(
    STORAGE_KEY,
    [],
  )

  const toggleQuest = useCallback(
    (questId: number) => {
      const quest = quests.find((q) => q.id === questId)
      if (!quest) return

      const traderId = quest.trader
      const traderQuests = quests.filter((q) => q.trader === traderId)
      const questIndex = traderQuests.findIndex((q) => q.id === questId)

      setCompletedQuests((prev) => {
        const isCurrentlyCompleted = prev.includes(questId)

        if (isCurrentlyCompleted) {
          // Unchecking: remove this quest and all subsequent quests of this trader
          const questsToRemove = new Set(
            traderQuests.slice(questIndex).map((q) => q.id),
          )
          return prev.filter((id) => !questsToRemove.has(id))
        } else {
          // Checking: add this quest and all previous quests of this trader
          const questsToAdd = traderQuests.slice(0, questIndex + 1).map((q) => q.id)
          const newSet = new Set([...prev, ...questsToAdd])
          return Array.from(newSet)
        }
      })
    },
    [setCompletedQuests],
  )

  const isCompleted = useCallback(
    (questId: number) => completedQuests.includes(questId),
    [completedQuests],
  )

  return {
    completedQuests,
    toggleQuest,
    isCompleted,
  }
}
