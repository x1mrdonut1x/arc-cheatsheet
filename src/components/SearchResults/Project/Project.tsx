import { Check, FolderKanban } from 'lucide-react'
import type { Item } from '../../../data/types'
import type { ProjectStageInfo } from '../../../hooks/useItemAnalysis'
import { Card } from '../../Card/Card'
import { ItemGrid } from '../../ItemGrid/ItemGrid'
import styles from './Project.module.scss'

interface ProjectProps {
  item: Item
  stages: Array<ProjectStageInfo>
  onItemSelect?: (id: number) => void
}

export function Project({ item, stages, onItemSelect }: ProjectProps) {
  if (stages.length === 0) {
    return null
  }

  return (
    <Card variant="secondary" title="Project" icon={<FolderKanban size={18} />}>
      <div className={styles.stages}>
        {stages.map((stage) => (
          <div key={stage.level} className={styles.stage}>
            <div className={styles.header}>
              {stage.isCompleted && (
                <Check size={16} className={styles.completedIcon} />
              )}
              <span
                className={styles.stageName}
                data-completed={stage.isCompleted || undefined}
              >
                {stage.name}
              </span>
              <span className={styles.level}>Stage {stage.level}</span>
            </div>
            <ItemGrid
              items={stage.ingredients}
              variant="secondary"
              highlightedItemId={item.id}
              onItemSelect={onItemSelect}
              ariaLabel={`Items needed for ${stage.name} (Stage ${stage.level})`}
            />
          </div>
        ))}
      </div>
    </Card>
  )
}
