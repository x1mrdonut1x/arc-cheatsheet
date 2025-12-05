import { useMemo } from 'react'
import { items as allItems } from '../data/items'
import { projects } from '../data/project'
import { quests } from '../data/quests'
import { traders } from '../data/traders'
import type { Item } from '../data/types'
import { workshops } from '../data/workshops'
import { useCompletedProjects } from './useCompletedProjects'
import { useCompletedQuests } from './useCompletedQuests'
import { useCompletedWorkshops } from './useCompletedWorkshops'

export interface QuestInfo {
  id: number
  name: string
  traderId: number
  trader?: { id: number; name: string }
  questItems: Array<{ item: Item; amount: number }>
  isCompleted: boolean
  amountNeeded: number
}

export interface UpgradeInfo {
  workshopId: number
  workshopName: string
  level: number
  ingredients: Array<{ item: Item; amount: number }>
  isCompleted: boolean
  amountNeeded: number
}

export interface ProjectStageInfo {
  level: number
  name: string
  ingredients: Array<{ item: Item; amount: number }>
  isCompleted: boolean
  amountNeeded: number
}

export interface UsedInInfo {
  item: Item
  amount: number
}

export interface RecycledItemInfo {
  item: Item
  amount: number
}

export interface ItemAnalysis {
  item: Item
  allItems: Array<Item>
  usedInItems: Array<UsedInInfo>
  recycledItems: Array<RecycledItemInfo>
  upgrades: Array<UpgradeInfo>
  projectStages: Array<ProjectStageInfo>
  relatedQuests: Array<QuestInfo>
  baseline: {
    recommendation: 'keep' | 'sell' | 'recycle'
    totalNeeded: number
    questsNeeded: Array<{
      id: number
      name: string
      traderName?: string
      amount: number
    }>
    upgradesNeeded: Array<{
      id: number
      name: string
      level: number
      amount: number
    }>
    projectStagesNeeded: Array<{
      level: number
      name: string
      amount: number
    }>
    allQuestsCompleted: boolean
    allUpgradesCompleted: boolean
    allProjectsCompleted: boolean
  }
}

export function useItemAnalysis(item: Item | undefined): ItemAnalysis | null {
  const { isCompleted: isQuestCompleted } = useCompletedQuests()
  const { isCompleted: isWorkshopCompleted } = useCompletedWorkshops()
  const { isCompleted: isProjectCompleted, isTracking: isProjectTracking } =
    useCompletedProjects()

  return useMemo(() => {
    if (!item) return null

    // Find items that recycle INTO this item
    const usedInItems: Array<UsedInInfo> = allItems
      .filter((otherItem) =>
        otherItem.recyclesTo.some((recycle) => recycle.id === item.id),
      )
      .map((parentItem) => {
        const recycleInfo = parentItem.recyclesTo.find((r) => r.id === item.id)
        return {
          item: parentItem,
          amount: recycleInfo?.amount ?? 1,
        }
      })

    // Get recycled items (what this item recycles to)
    const recycledItems: Array<{ item: Item; amount: number }> = item.recyclesTo
      .map((recycle) => {
        const foundItem = allItems.find((i) => i.id === recycle.id)
        return foundItem ? { item: foundItem, amount: recycle.amount } : null
      })
      .filter((x) => x !== null)

    // Get related quests
    const relatedQuests: Array<QuestInfo> = quests
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

        const amountNeeded =
          quest.items_needed.find((i) => i.id === item.id)?.amount ?? 0

        return {
          id: quest.id,
          name: quest.name,
          traderId: quest.trader,
          trader: traders.find((t) => t.id === quest.trader),
          questItems,
          isCompleted: isQuestCompleted(quest.id),
          amountNeeded,
        }
      })

    // Get workshop upgrades
    const upgrades: Array<UpgradeInfo> = []
    for (const workshop of workshops) {
      for (const level of workshop.levels) {
        const requirement = level.items.find((i) => i.id === item.id)
        if (requirement) {
          const ingredients = level.items
            .map((levelItem) => {
              const foundItem = allItems.find((i) => i.id === levelItem.id)
              return foundItem
                ? { item: foundItem, amount: levelItem.amount }
                : null
            })
            .filter((x) => x !== null)

          upgrades.push({
            workshopId: workshop.id,
            workshopName: workshop.name,
            level: level.value,
            ingredients,
            isCompleted: isWorkshopCompleted(workshop.id, level.value),
            amountNeeded: requirement.amount,
          })
        }
      }
    }

    // Get project stages (only if tracking is enabled)
    const projectStages: Array<ProjectStageInfo> = []
    if (isProjectTracking) {
      for (const project of projects) {
        const requirement = project.items.find((i) => i.id === item.id)
        if (requirement) {
          const ingredients = project.items
            .map((projectItem) => {
              const foundItem = allItems.find((i) => i.id === projectItem.id)
              return foundItem
                ? { item: foundItem, amount: projectItem.amount }
                : null
            })
            .filter((x) => x !== null)

          projectStages.push({
            level: project.level,
            name: project.name,
            ingredients,
            isCompleted: isProjectCompleted(project.level),
            amountNeeded: requirement.amount,
          })
        }
      }
    }

    // Calculate baseline recommendation
    const incompleteQuests = relatedQuests.filter((q) => !q.isCompleted)
    const incompleteUpgrades = upgrades.filter((u) => !u.isCompleted)
    const incompleteProjects = projectStages.filter((p) => !p.isCompleted)

    const questsNeeded = incompleteQuests.map((q) => ({
      id: q.id,
      name: q.name,
      traderName: q.trader?.name,
      amount: q.amountNeeded,
    }))
    const upgradesNeeded = incompleteUpgrades.map((u) => ({
      id: u.workshopId,
      name: u.workshopName,
      level: u.level,
      amount: u.amountNeeded,
    }))
    const projectStagesNeeded = incompleteProjects.map((p) => ({
      level: p.level,
      name: p.name,
      amount: p.amountNeeded,
    }))
    const totalNeeded =
      questsNeeded.reduce((sum, q) => sum + q.amount, 0) +
      upgradesNeeded.reduce((sum, u) => sum + u.amount, 0) +
      projectStagesNeeded.reduce((sum, p) => sum + p.amount, 0)

    const allQuestsCompleted =
      relatedQuests.length === 0 || incompleteQuests.length === 0
    const allUpgradesCompleted =
      upgrades.length === 0 || incompleteUpgrades.length === 0
    const allProjectsCompleted =
      projectStages.length === 0 || incompleteProjects.length === 0

    let recommendation: 'keep' | 'sell' | 'recycle'
    if (!allQuestsCompleted || !allUpgradesCompleted || !allProjectsCompleted) {
      recommendation = 'keep'
    } else if (recycledItems.length === 0) {
      recommendation = 'sell'
    } else if (item.sellPrice > 0) {
      // Compare sell value vs recycle value
      const recycleValue = recycledItems.reduce((sum, r) => {
        return sum + r.item.sellPrice * r.amount
      }, 0)

      recommendation = recycleValue * 0.7 > item.sellPrice ? 'sell' : 'recycle'
    } else {
      recommendation = recycledItems.length > 0 ? 'recycle' : 'sell'
    }

    return {
      item,
      allItems,
      usedInItems,
      recycledItems,
      upgrades,
      projectStages,
      relatedQuests,
      baseline: {
        recommendation,
        totalNeeded,
        questsNeeded,
        upgradesNeeded,
        projectStagesNeeded,
        allQuestsCompleted,
        allUpgradesCompleted,
        allProjectsCompleted,
      },
    }
  }, [
    item,
    isQuestCompleted,
    isWorkshopCompleted,
    isProjectCompleted,
    isProjectTracking,
  ])
}
