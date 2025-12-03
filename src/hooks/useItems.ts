import { useQuery } from '@tanstack/react-query'
import { items } from '../data/data'
import type { Item } from '../data/types'

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

export function useSearchItems(query: string) {
  return useQuery({
    queryKey: ['items', 'search', query],
    queryFn: (): Array<Item> => {
      if (!query.trim()) return []
      const normalizedQuery = query.toLowerCase().trim()
      return items.filter((item) =>
        item.name.toLowerCase().includes(normalizedQuery),
      )
    },
    enabled: query.trim().length > 0,
  })
}
