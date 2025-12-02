import { useId, type ReactNode } from 'react'
import classNames from 'classnames'
import type { Item } from '../../../data/types'
import { Card } from '../../Card/Card'
import { AnimatedList } from '../../AnimatedList'
import styles from './ItemList.module.scss'

export interface ItemWithAmount {
  item: Item
  amount: number
}

export type ItemListVariant = 'primary' | 'secondary'

interface ItemListProps {
  items: ItemWithAmount[]
  title: string
  icon: string
  variant?: ItemListVariant
  footer?: ReactNode
  onItemSelect?: (itemName: string) => void
}

export function ItemList({
  items,
  title,
  icon,
  variant = 'primary',
  footer,
  onItemSelect,
}: ItemListProps) {
  const titleId = useId()

  if (items.length === 0) {
    return null
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    itemName: string
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onItemSelect?.(itemName)
    }
  }

  const itemCount = items.length

  return (
    <Card variant={variant} className={styles.section}>
      <section aria-labelledby={titleId}>
        <h4 id={titleId} className={styles.title}>
          <span
            className={classNames(styles.icon, {
              [styles.iconSpin]: variant === 'primary',
            })}
            aria-hidden="true"
          >
            {icon}
          </span>
          {title}
        </h4>
        <AnimatedList
          as="ul"
          className={styles.container}
          aria-label={`${title}: ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
        >
          {items.map(({ item, amount }) => (
            <li key={item.id} className={styles.listItem}>
              <button
                className={classNames(styles.item, {
                  [styles.itemClickable]: !!onItemSelect,
                  [styles.itemPrimary]: variant === 'primary',
                  [styles.itemSecondary]: variant === 'secondary',
                })}
                onClick={() => onItemSelect?.(item.name)}
                onKeyDown={(e) => handleKeyDown(e, item.name)}
                type="button"
                aria-label={`${item.name}, quantity ${amount}. ${onItemSelect ? 'Press Enter to select' : ''}`}
                disabled={!onItemSelect}
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
            </li>
          ))}
        </AnimatedList>
        {footer}
      </section>
    </Card>
  )
}
