import { useSearch } from '@tanstack/react-router'
import type { Item } from '../../data/types'
import { sortItems } from '../../hooks/useItems'
import { AnimatedList } from '../AnimatedList'
import type { ItemTileVariant } from '../ItemTile/ItemTile'
import { ItemTile } from '../ItemTile/ItemTile'
import styles from './ItemGrid.module.scss'

export interface ItemWithAmount {
  item: Item
  amount: number
}

interface ItemGridProps {
  items: Array<ItemWithAmount>
  variant?: ItemTileVariant
  highlightedItemId?: number
  onItemSelect?: (id: number) => void
  ariaLabel?: string
}

export function ItemGrid({
  items,
  variant = 'primary',
  highlightedItemId,
  onItemSelect,
  ariaLabel,
}: ItemGridProps) {
  const { sortBy, sortDirection } = useSearch({ from: '/' })

  if (items.length === 0) {
    return null
  }

  const sortedItems = sortItems(
    items.map(({ item }) => item),
    sortBy ?? null,
    sortDirection ?? null,
  )

  // Create a map for quick amount lookup
  const amountMap = new Map(items.map(({ item, amount }) => [item.id, amount]))

  return (
    <AnimatedList as="ul" className={styles.container} aria-label={ariaLabel}>
      {sortedItems.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <ItemTile
            item={item}
            amount={amountMap.get(item.id) ?? 1}
            variant={variant}
            highlighted={item.id === highlightedItemId}
            onClick={onItemSelect}
          />
        </li>
      ))}
    </AnimatedList>
  )
}
