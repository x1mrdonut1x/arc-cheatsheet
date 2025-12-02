import { useMemo } from 'react'
import type { Item } from '../../../data/types'
import { ItemList } from '../ItemList/ItemList'

interface UsedInProps {
  item: Item
  allItems: Item[]
  onItemSelect?: (itemName: string) => void
}

export function UsedIn({ item, allItems, onItemSelect }: UsedInProps) {
  // Find all items that recycle INTO this item
  const usedInItems = useMemo(() => {
    return allItems
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
  }, [item.id, allItems])

  return (
    <ItemList
      items={usedInItems}
      title="Used In"
      icon="🔧"
      variant="secondary"
      onItemSelect={onItemSelect}
    />
  )
}
