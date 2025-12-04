import { Wrench } from 'lucide-react'
import { useMemo } from 'react'
import type { Item } from '../../../data/types'
import { Card } from '../../Card/Card'
import { ItemGrid } from '../ItemGrid/ItemGrid'

interface UsedInProps {
  item: Item
  allItems: Array<Item>
  onItemSelect?: (id: number) => void
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

  if (usedInItems.length === 0) {
    return null
  }

  return (
    <Card variant="secondary" title="Used In" icon={<Wrench size={18} />}>
      <ItemGrid
        items={usedInItems}
        variant="secondary"
        onItemSelect={onItemSelect}
        ariaLabel={`Used In: ${usedInItems.length} item${usedInItems.length !== 1 ? 's' : ''}`}
      />
    </Card>
  )
}
