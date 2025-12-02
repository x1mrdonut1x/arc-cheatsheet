import classNames from 'classnames'
import type { Item } from '../../data/types'
import { items as allItems } from '../../data/data'
import { Card } from '../Card/Card'
import { AnimatedList } from '../AnimatedList'
import { ItemDetails } from './ItemDetails/ItemDetails'
import { RecyclesTo } from './RecyclesTo/RecyclesTo'
import { UsedIn } from './UsedIn/UsedIn'
import styles from './SearchResults.module.scss'

interface SearchResultsProps {
  items: Item[]
  searchQuery: string
  onItemSelect?: (itemName: string) => void
}

export function SearchResults({
  items,
  searchQuery,
  onItemSelect,
}: SearchResultsProps) {
  if (!searchQuery.trim()) {
    return null
  }

  if (items.length === 0) {
    return (
      <div className={styles.container} role="status" aria-live="polite">
        <p className={styles.noResults}>No items found for "{searchQuery}"</p>
      </div>
    )
  }

  const itemCount = items.length
  const isSingleItem = itemCount === 1

  return (
    <section
      className={styles.container}
      aria-label={`Search results: ${itemCount} item${itemCount !== 1 ? 's' : ''} found`}
      role="region"
    >
      <h2 className={styles.srOnly}>
        {itemCount} result{itemCount !== 1 ? 's' : ''} for "{searchQuery}"
      </h2>
      <AnimatedList as="ul" className={styles.resultsList}>
        {items.map((item) => (
          <li
            key={item.id}
            className={classNames(styles.item, {
              [styles.itemClickable]: !isSingleItem && onItemSelect,
            })}
            onClick={
              !isSingleItem && onItemSelect
                ? () => onItemSelect(item.name)
                : undefined
            }
            role={!isSingleItem && onItemSelect ? 'button' : undefined}
            tabIndex={!isSingleItem && onItemSelect ? 0 : undefined}
            onKeyDown={
              !isSingleItem && onItemSelect
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      onItemSelect(item.name)
                    }
                  }
                : undefined
            }
          >
            {isSingleItem ? (
              <Card variant="primary" className={styles.itemCard}>
                <article aria-labelledby={`item-name-${item.id}`}>
                  <img
                    src={item.imageUrl}
                    alt=""
                    aria-hidden="true"
                    className={styles.itemImageLarge}
                    referrerPolicy="no-referrer"
                  />
                  <span className={styles.srOnly}>{item.name}</span>
                  <ItemDetails item={item} />
                </article>
              </Card>
            ) : (
              <article aria-labelledby={`item-name-${item.id}`}>
                <img
                  src={item.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className={styles.itemImage}
                  referrerPolicy="no-referrer"
                />
                <span className={styles.srOnly}>{item.name}</span>
              </article>
            )}
          </li>
        ))}
      </AnimatedList>

      {/* Relationship sections - outside the item card */}
      {isSingleItem && items[0] && (
        <div className={styles.relationshipsContainer}>
          <RecyclesTo
            item={items[0]}
            allItems={allItems}
            onItemSelect={onItemSelect}
          />
          <UsedIn
            item={items[0]}
            allItems={allItems}
            onItemSelect={onItemSelect}
          />
        </div>
      )}
    </section>
  )
}
