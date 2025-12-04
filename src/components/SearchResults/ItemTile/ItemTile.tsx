import type { Item } from '../../../data/types'
import styles from './ItemTile.module.scss'

export type ItemTileVariant = 'primary' | 'secondary'

interface ItemTileProps {
  item: Item
  amount?: number
  variant?: ItemTileVariant
  highlighted?: boolean
  onClick?: (id: number) => void
}

export function ItemTile({
  item,
  amount,
  variant = 'primary',
  highlighted = false,
  onClick,
}: ItemTileProps) {
  return (
    <button
      className={styles.item}
      onClick={() => onClick?.(item.id)}
      type="button"
      aria-label={`${item.name}, quantity ${amount}. ${onClick ? 'Press Enter to select' : ''}`}
      disabled={!onClick}
      data-variant={variant}
      data-rarity={item.rarity.toLowerCase()}
      data-highlighted={highlighted || undefined}
    >
      <div className={styles.imageBackground}>
        <div className={styles.imageWrapper}>
          <img
            src={item.imageUrl}
            alt=""
            className={styles.image}
            referrerPolicy="no-referrer"
          />
          {amount && <span className={styles.badge}>×{amount}</span>}
        </div>
      </div>
      <span className={styles.name}>{item.name}</span>
    </button>
  )
}
