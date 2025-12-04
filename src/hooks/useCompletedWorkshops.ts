import { useCallback } from 'react'
import { workshops } from '../data/workshops'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'arc-cheatsheet-completed-workshops'

// Store as "workshopId:level" strings
type WorkshopLevel = `${number}:${number}`

export function useCompletedWorkshops() {
  const [completedLevels, setCompletedLevels] = useLocalStorage<
    Array<WorkshopLevel>
  >(STORAGE_KEY, [])

  const toggleLevel = useCallback(
    (workshopId: number, level: number) => {
      const workshop = workshops.find((w) => w.id === workshopId)
      if (!workshop) return

      const key: WorkshopLevel = `${workshopId}:${level}`

      setCompletedLevels((prev) => {
        const isCurrentlyCompleted = prev.includes(key)

        if (isCurrentlyCompleted) {
          // Unchecking: remove this level and all higher levels of this workshop
          return prev.filter((k) => {
            const [wId, lvl] = k.split(':').map(Number)
            return wId !== workshopId || lvl < level
          })
        } else {
          // Checking: add this level and all previous levels of this workshop
          const levelsToAdd = workshop.levels
            .filter((l) => l.value <= level)
            .map((l): WorkshopLevel => `${workshopId}:${l.value}`)
          const newSet = new Set([...prev, ...levelsToAdd])
          return Array.from(newSet)
        }
      })
    },
    [setCompletedLevels],
  )

  const isCompleted = useCallback(
    (workshopId: number, level: number) =>
      completedLevels.includes(`${workshopId}:${level}`),
    [completedLevels],
  )

  const getCompletedLevel = useCallback(
    (workshopId: number) => {
      const workshopLevels = completedLevels
        .filter((k) => k.startsWith(`${workshopId}:`))
        .map((k) => Number(k.split(':')[1]))
      return workshopLevels.length > 0 ? Math.max(...workshopLevels) : 0
    },
    [completedLevels],
  )

  return {
    completedLevels,
    toggleLevel,
    isCompleted,
    getCompletedLevel,
  }
}
