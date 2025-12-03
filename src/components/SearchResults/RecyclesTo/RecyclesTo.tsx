import { useMemo } from 'react'
import type { Item } from '../../../data/types'
import { Card } from '../../Card/Card'
import { ItemGrid } from '../ItemGrid/ItemGrid'
import styles from './RecyclesTo.module.scss'

interface RecyclesToProps {
  item: Item
  allItems: Array<Item>
  onItemSelect?: (id: number) => void
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
      (sum, { item: recycledItem, amount }) =>
        sum + recycledItem.sellPrice * amount,
      0,
    )
    const originalPrice = item.sellPrice
    const difference = totalRecycleValue - originalPrice
    const percentageChange =
      originalPrice > 0 ? ((difference / originalPrice) * 100).toFixed(0) : 0

    return {
      total: totalRecycleValue,
      difference,
      percentage: Number(percentageChange),
    }
  }, [recycledItems, item.sellPrice])

  if (recycledItems.length === 0) {
    return null
  }

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
    <Card variant="primary" title="Recycles To" icon="♻️" footer={footer}>
      <ItemGrid
        items={recycledItems}
        variant="primary"
        onItemSelect={onItemSelect}
        ariaLabel={`Recycles To: ${recycledItems.length} item${recycledItems.length !== 1 ? 's' : ''}`}
      />
    </Card>
  )
}
