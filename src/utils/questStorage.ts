const STORAGE_KEY = 'arc-cheatsheet-completed-quests'

export function loadCompletedQuests(): Set<number> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return new Set(JSON.parse(stored))
    }
  } catch (error) {
    console.error('Failed to load completed quests:', error)
  }
  return new Set()
}

export function saveCompletedQuests(quests: Set<number>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...quests]))
  } catch (error) {
    console.error('Failed to save completed quests:', error)
  }
}

export function isQuestCompleted(questId: number): boolean {
  const completedQuests = loadCompletedQuests()
  return completedQuests.has(questId)
}

export function toggleQuestCompletion(questId: number): boolean {
  const completedQuests = loadCompletedQuests()
  const isNowCompleted = !completedQuests.has(questId)

  if (isNowCompleted) {
    completedQuests.add(questId)
  } else {
    completedQuests.delete(questId)
  }

  saveCompletedQuests(completedQuests)
  return isNowCompleted
}
