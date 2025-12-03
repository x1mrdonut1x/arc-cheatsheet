import classNames from 'classnames'
import styles from './ItemDetails.module.scss'
import type { Item } from '../../../data/types'

interface ItemDetailsProps {
  item: Item
}

const getRarityClass = (rarity: string) => {
  switch (rarity) {
    case 'Common':
      return styles.rarityCommon
    case 'Uncommon':
      return styles.rarityUncommon
    case 'Rare':
      return styles.rarityRare
    case 'Epic':
      return styles.rarityEpic
    case 'Legendary':
      return styles.rarityLegendary
    default:
      return styles.rarityCommon
  }
}

export function ItemDetails({ item }: ItemDetailsProps) {
  return (
    <div className={styles.detailContent}>
      <div className={styles.tags} role="group" aria-label="Item categories">
        <span className={styles.categoryTag}>{item.category}</span>
        <span className={classNames(styles.rarityTag, getRarityClass(item.rarity))}>
          {item.rarity}
        </span>
      </div>
      <h3 id={`item-name-${item.id}`} className={styles.detailName}>
        {item.name}
      </h3>
      {item.description && (
        <p className={styles.detailDescription}>{item.description}</p>
      )}
      <dl className={styles.detailStats}>
        <div className={styles.statItem}>
          <dt className={styles.statLabel}>Stack Size</dt>
          <dd className={styles.statValue}>{item.maxStackSize}</dd>
        </div>
        <div className={styles.statItem}>
          <dt className={styles.statLabel}>Sell Price</dt>
          <dd className={styles.statValue}>
            <span aria-label={`${item.sellPrice.toLocaleString()} credits`}>
              {item.sellPrice.toLocaleString()} ₳
            </span>
          </dd>
        </div>
      </dl>
    </div>
  )
}
