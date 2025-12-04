import classNames from 'classnames'
import { Box, Coins, Weight } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Item } from '../../../data/types'
import styles from './ItemDetails.module.scss'

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
  const metaEntries = item.meta ? Object.entries(item.meta) : []
  const stats = [
    item.maxStackSize !== undefined && {
      icon: <Box size={16} />,
      value: item.maxStackSize,
      label: 'Stack Size',
    },
    item.weight !== undefined && {
      icon: <Weight size={16} />,
      value: item.weight,
      label: 'Weight',
    },
    {
      icon: <Coins size={16} />,
      value: item.sellPrice.toLocaleString(),
      label: 'Sell Price',
    },
  ].filter(Boolean) as Array<{
    icon: ReactNode
    value: string | number
    label: string
  }>

  return (
    <div className={styles.detailContent}>
      <div className={styles.tags} role="group" aria-label="Item categories">
        <span className={styles.categoryTag}>{item.category}</span>
        <span
          className={classNames(styles.rarityTag, getRarityClass(item.rarity))}
        >
          {item.rarity}
        </span>
      </div>
      <h3 className={styles.detailName}>{item.name}</h3>
      {item.description && (
        <p className={styles.detailDescription}>{item.description}</p>
      )}

      {(item.canBeFoundIn || metaEntries.length > 0) && (
        <table className={styles.table}>
          <tbody>
            {item.canBeFoundIn && (
              <tr>
                <th>Can be found in</th>
                <td>{item.canBeFoundIn.split(',').join(', ')}</td>
              </tr>
            )}
            {metaEntries.map(([key, value]) => (
              <tr key={key}>
                <th>{key}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className={styles.statsRow}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statItem} title={stat.label}>
            <span aria-hidden="true">{stat.icon}</span> {stat.value}
          </div>
        ))}
      </div>
    </div>
  )
}
