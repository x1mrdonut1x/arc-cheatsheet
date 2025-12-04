import { useSearch } from '@tanstack/react-router'
import { Wrench } from 'lucide-react'
import type { UsedInInfo } from '../../../hooks/useItemAnalysis'
import { Card } from '../../Card/Card'
import { ItemGrid } from '../ItemGrid/ItemGrid'

interface UsedInProps {
  usedInItems: Array<UsedInInfo>
  onItemSelect?: (id: number) => void
}

export function UsedIn({ usedInItems, onItemSelect }: UsedInProps) {
  const { id } = useSearch({ from: '/' })

  if (usedInItems.length === 0) {
    return null
  }

  return (
    <Card variant="secondary" title="Used In" icon={<Wrench size={18} />}>
      <ItemGrid
        items={usedInItems}
        variant="secondary"
        onItemSelect={onItemSelect}
        highlightedItemId={id}
        ariaLabel={`Used In: ${usedInItems.length} item${usedInItems.length !== 1 ? 's' : ''}`}
      />
    </Card>
  )
}
