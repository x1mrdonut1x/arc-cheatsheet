import { useCallback } from 'react'
import { projects } from '../data/project'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'arc-cheatsheet-completed-projects'
const TRACKING_KEY = 'arc-cheatsheet-project-tracking'

export function useCompletedProjects() {
  const [completedLevels, setCompletedLevels] = useLocalStorage<Array<number>>(
    STORAGE_KEY,
    [],
  )
  const [isTracking, setIsTracking] = useLocalStorage<boolean>(
    TRACKING_KEY,
    false,
  )

  const toggleLevel = useCallback(
    (level: number) => {
      const stage = projects.find((p) => p.level === level)
      if (!stage) return

      setCompletedLevels((prev) => {
        const isCurrentlyCompleted = prev.includes(level)

        if (isCurrentlyCompleted) {
          // Unchecking: remove this level and all higher levels
          return prev.filter((l) => l < level)
        } else {
          // Checking: add this level and all previous levels
          const levelsToAdd = projects
            .filter((p) => p.level <= level)
            .map((p) => p.level)
          const newSet = new Set([...prev, ...levelsToAdd])
          return Array.from(newSet)
        }
      })
    },
    [setCompletedLevels],
  )

  const isCompleted = useCallback(
    (level: number) => completedLevels.includes(level),
    [completedLevels],
  )

  const getCompletedLevel = useCallback(() => {
    if (completedLevels.length === 0) return 0
    return Math.max(...completedLevels)
  }, [completedLevels])

  const toggleTracking = useCallback(() => {
    setIsTracking((prev) => !prev)
  }, [setIsTracking])

  return {
    completedLevels,
    toggleLevel,
    isCompleted,
    getCompletedLevel,
    isTracking,
    toggleTracking,
  }
}
