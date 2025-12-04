import { items as allItems } from '../../data/items'
import type { Item } from '../../data/types'
import { AnimatedList } from '../AnimatedList'
import { Card } from '../Card/Card'
import { ItemDetails } from './ItemDetails/ItemDetails'
import { ItemTile } from './ItemTile/ItemTile'
import { QuestList } from './QuestList/QuestList'
import { RecyclesTo } from './RecyclesTo/RecyclesTo'
import styles from './SearchResults.module.scss'
import { UsedIn } from './UsedIn/UsedIn'

interface SearchResultsProps {
  items: Array<Item>
  searchQuery: string
  onItemSelect?: (id: number) => void
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
        <p className={styles.noResults}>
          No items found for &quot;{searchQuery}&quot;
        </p>
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
        {itemCount} result{itemCount !== 1 ? 's' : ''} for &quot;{searchQuery}
        &quot;
      </h2>
      <AnimatedList as="ul" className={styles.resultsList}>
        {items.map((item) => (
          <li key={item.id}>
            {isSingleItem ? (
              <Card variant="primary" className={styles.itemCard} noPadding>
                <article
                  className={styles.singleItem}
                  aria-labelledby={`item-name-${item.id}`}
                  data-rarity={item.rarity.toLowerCase()}
                >
                  <div className={styles.imageBackground}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={item.imageUrl}
                        alt=""
                        className={styles.image}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <ItemDetails item={item} />
                </article>
              </Card>
            ) : (
              <ItemTile item={item} onClick={onItemSelect} />
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
          <QuestList
            item={items[0]}
            allItems={allItems}
            onItemSelect={onItemSelect}
          />
        </div>
      )}
    </section>
  )
}
