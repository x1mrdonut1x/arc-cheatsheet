import { useMemo } from 'react'
import type { Item } from '../../../data/types'
import { ItemList } from '../ItemList/ItemList'
import styles from '../ItemList/ItemList.module.scss'

interface RecyclesToProps {
  item: Item
  allItems: Item[]
  onItemSelect?: (itemName: string) => void
}

export function RecyclesTo({ item, allItems, onItemSelect }: RecyclesToProps) {
  const recycledItems = useMemo(() => {
    return item.recyclesTo
      .map((recycle) => {
        const foundItem = allItems.find((i) => i.id === recycle.id)
        return foundItem ? { item: foundItem, amount: recycle.amount } : null
      })
      .filter((x) => x !== null)
  }, [item.recyclesTo, allItems])

  const priceComparison = useMemo(() => {
    if (recycledItems.length === 0) return null

    const totalRecycleValue = recycledItems.reduce(
      (sum, { item: recycledItem, amount }) => sum + recycledItem.sellPrice * amount,
      0
    )
    const originalPrice = item.sellPrice
    const difference = totalRecycleValue - originalPrice
    const percentageChange = originalPrice > 0 
      ? ((difference / originalPrice) * 100).toFixed(0)
      : 0

    return {
      total: totalRecycleValue,
      difference,
      percentage: Number(percentageChange),
    }
  }, [recycledItems, item.sellPrice])

  const footer = priceComparison ? (
    <div className={styles.footer}>
      <span className={styles.footerTotal}>
        {priceComparison.total.toLocaleString()} ₳{' '}
        <span
          className={
            priceComparison.percentage >= 0
              ? styles.footerPercentagePositive
              : styles.footerPercentageNegative
          }
        >
          ({priceComparison.percentage >= 0 ? '+' : ''}
          {priceComparison.percentage}%)
        </span>
      </span>
    </div>
  ) : null

  return (
    <ItemList
      items={recycledItems}
      title="Recycles To"
      icon="♻️"
      variant="primary"
      footer={footer}
      onItemSelect={onItemSelect}
    />
  )
}
