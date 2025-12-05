import { useSearch } from '@tanstack/react-router'
import { Split } from 'lucide-react'
import type { RecycledFromInfo } from '../../../hooks/useItemAnalysis'
import { Card } from '../../Card/Card'
import { ItemGrid } from '../../ItemGrid/ItemGrid'

interface RecycledFromProps {
  recycledFromItems: Array<RecycledFromInfo>
  onItemSelect?: (id: number) => void
}

export function RecycledFrom({
  recycledFromItems,
  onItemSelect,
}: RecycledFromProps) {
  const { id } = useSearch({ from: '/' })

  if (recycledFromItems.length === 0) {
    return null
  }

  return (
    <Card variant="secondary" title="Recycled from" icon={<Split size={18} />}>
      <ItemGrid
        items={recycledFromItems}
        variant="secondary"
        onItemSelect={onItemSelect}
        highlightedItemId={id}
        ariaLabel={`Recycled from: ${recycledFromItems.length} item${recycledFromItems.length !== 1 ? 's' : ''}`}
      />
    </Card>
  )
}
