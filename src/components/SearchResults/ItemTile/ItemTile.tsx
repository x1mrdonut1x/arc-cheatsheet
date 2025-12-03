import classNames from 'classnames'
import styles from './ItemTile.module.scss'
import type { Item } from '../../../data/types'

export type ItemTileVariant = 'primary' | 'secondary'

interface ItemTileProps {
  item: Item
  amount: number
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
  const handleClick = () => {
    onClick?.(item.id)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick?.(item.id)
    }
  }

  return (
    <button
      className={classNames(styles.item, {
        [styles.itemClickable]: !!onClick,
        [styles.itemPrimary]: variant === 'primary',
        [styles.itemSecondary]: variant === 'secondary',
        [styles.itemHighlighted]: highlighted,
      })}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      type="button"
      aria-label={`${item.name}, quantity ${amount}. ${onClick ? 'Press Enter to select' : ''}`}
      disabled={!onClick}
    >
      <div className={styles.imageWrapper}>
        <img
          src={item.imageUrl}
          alt=""
          aria-hidden="true"
          className={styles.image}
          referrerPolicy="no-referrer"
        />
        <span
          className={classNames(styles.amountBadge, {
            [styles.amountBadgePrimary]: variant === 'primary',
            [styles.amountBadgeSecondary]: variant === 'secondary',
          })}
          aria-hidden="true"
        >
          ×{amount}
        </span>
      </div>
      <span className={styles.name} aria-hidden="true">
        {item.name}
      </span>
    </button>
  )
}
