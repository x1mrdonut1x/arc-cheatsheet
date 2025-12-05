import { useQuery } from '@tanstack/react-query'
import { items } from '../data/items'
import type { Item } from '../data/types'

export type SortOption = 'name' | 'price' | 'rarity' | 'category'
export type SortDirection = 'asc' | 'desc' | null

const rarityOrder: Record<string, number> = {
  Common: 0,
  Uncommon: 1,
  Rare: 2,
  Epic: 3,
  Legendary: 4,
}

export function useGetItem(id: number | undefined) {
  return useQuery({
    queryKey: ['item', id],
    queryFn: (): Item | undefined => {
      if (id === undefined) return undefined
      return items.find((item) => item.id === id)
    },
    enabled: id !== undefined,
  })
}

export function useSearchItems(
  query: string,
  sortBy: SortOption | null = null,
  sortDirection: SortDirection = null,
  showAll = false,
) {
  return useQuery({
    queryKey: ['items', { query, sortBy, sortDirection, showAll }],
    queryFn: (): Array<Item> => {
      if (showAll && !query.trim()) {
        return sortItems(items, sortBy, sortDirection)
      }

      const normalizedQuery = query.toLowerCase().trim()
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(normalizedQuery),
      )
      return sortItems(filtered, sortBy, sortDirection)
    },
    enabled: showAll || query.trim().length > 0,
  })
}

export function sortItems(
  itemsList: Array<Item>,
  sortBy: SortOption | null,
  sortDirection: SortDirection,
): Array<Item> {
  if (!sortBy || !sortDirection) {
    // Default sort by name ascending when no sort is selected
    return itemsList.toSorted((a, b) => a.name.localeCompare(b.name))
  }

  const multiplier = sortDirection === 'asc' ? 1 : -1

  return itemsList.toSorted((a, b) => {
    if (sortBy === 'price') {
      return (a.sellPrice - b.sellPrice) * multiplier
    }
    if (sortBy === 'rarity') {
      const aRarity = rarityOrder[a.rarity]
      const bRarity = rarityOrder[b.rarity]
      return (aRarity - bRarity) * multiplier
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category) * multiplier
    }
    return a.name.localeCompare(b.name) * multiplier
  })
}
