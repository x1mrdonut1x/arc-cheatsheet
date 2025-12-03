import type { Item } from '../../../data/types'
import { AnimatedList } from '../../AnimatedList'
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
  if (items.length === 0) {
    return null
  }

  return (
    <AnimatedList as="ul" className={styles.container} aria-label={ariaLabel}>
      {items.map(({ item, amount }) => (
        <li key={item.id} className={styles.listItem}>
          <ItemTile
            item={item}
            amount={amount}
            variant={variant}
            highlighted={item.id === highlightedItemId}
            onClick={onItemSelect}
          />
        </li>
      ))}
    </AnimatedList>
  )
}
