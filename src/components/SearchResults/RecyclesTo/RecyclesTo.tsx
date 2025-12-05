import { Coins, Recycle } from 'lucide-react'
import { useMemo } from 'react'
import type { Item } from '../../../data/types'
import type { RecycledItemInfo } from '../../../hooks/useItemAnalysis'
import { Card } from '../../Card/Card'
import { ItemGrid } from '../../ItemGrid/ItemGrid'
import styles from './RecyclesTo.module.scss'

interface RecyclesToProps {
  item: Item
  recycledItems: Array<RecycledItemInfo>
  onItemSelect?: (id: number) => void
}

export function RecyclesTo({
  item,
  recycledItems,
  onItemSelect,
}: RecyclesToProps) {
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
        <Coins size={16} />
        {priceComparison.total.toLocaleString()}{' '}
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
    <Card
      variant="primary"
      title="Recycles To"
      icon={<Recycle size={18} />}
      footer={footer}
    >
      <ItemGrid
        items={recycledItems}
        variant="primary"
        onItemSelect={onItemSelect}
        ariaLabel={`Recycles To: ${recycledItems.length} item${recycledItems.length !== 1 ? 's' : ''}`}
      />
    </Card>
  )
}
