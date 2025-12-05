import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'arc-cheatsheet-completed-quests'

export function useCompletedQuests() {
  const [completedQuests, setCompletedQuests] = useLocalStorage<Array<number>>(
    STORAGE_KEY,
    [],
  )

  const toggleQuest = useCallback(
    (questId: number) => {
      setCompletedQuests((prev) => {
        if (prev.includes(questId)) {
          return prev.filter((id) => id !== questId)
        } else {
          return [...prev, questId]
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
