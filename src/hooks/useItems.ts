import { useQuery } from '@tanstack/react-query'
import { items } from '../data/items'
import type { Item } from '../data/types'

export type SortOption = 'name' | 'price'

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
  sortBy: SortOption = 'name',
  showAll = false,
) {
  return useQuery({
    queryKey: ['items', { query, sortBy, showAll }],
    queryFn: (): Array<Item> => {
      if (showAll && !query.trim()) {
        return sortItems(items, sortBy)
      }

      const normalizedQuery = query.toLowerCase().trim()
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(normalizedQuery),
      )
      return sortItems(filtered, sortBy)
    },
    enabled: showAll || query.trim().length > 0,
  })
}

function sortItems(itemsList: Array<Item>, sortBy: SortOption): Array<Item> {
  return itemsList.toSorted((a, b) => {
    if (sortBy === 'price') {
      return b.sellPrice - a.sellPrice
    }
    return a.name.localeCompare(b.name)
  })
}
