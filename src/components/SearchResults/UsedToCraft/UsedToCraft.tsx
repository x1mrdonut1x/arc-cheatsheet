import { useSearch } from '@tanstack/react-router'
import { Hammer } from 'lucide-react'
import { useMemo } from 'react'
import type { Item } from '../../../data/types'
import { Card } from '../../Card/Card'
import { ItemGrid } from '../../ItemGrid/ItemGrid'

interface UsedToCraftProps {
  item: Item
  allItems: Array<Item>
  onItemSelect?: (id: number) => void
}

export function UsedToCraft({
  item,
  allItems,
  onItemSelect,
}: UsedToCraftProps) {
  const { id } = useSearch({ from: '/' })

  const craftableItems = useMemo(() => {
    // Find all items that use this item as a crafting ingredient
    const seen = new Set<number>()
    const results: Array<{ item: Item; amount: number }> = []

    for (const targetItem of allItems) {
      if (!targetItem.crafting || targetItem.crafting.length === 0) continue
      if (seen.has(targetItem.id)) continue

      for (const recipe of targetItem.crafting) {
        if (recipe.items.some((i) => i.id === item.id)) {
          seen.add(targetItem.id)
          results.push({ item: targetItem, amount: 1 })
          break
        }
      }
    }

    return results
  }, [item.id, allItems])
  console.log('🚀 ~ craftableItems:', craftableItems)

  if (craftableItems.length === 0) {
    return null
  }

  return (
    <Card variant="primary" title="Used to craft" icon={<Hammer size={18} />}>
      <ItemGrid
        items={craftableItems}
        variant="primary"
        onItemSelect={onItemSelect}
        highlightedItemId={id}
        ariaLabel={`Items that can be crafted using ${item.name}`}
      />
    </Card>
  )
}
