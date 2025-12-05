import classNames from 'classnames'
import styles from './QuestItem.module.scss'

interface QuestItemProps {
  id: number
  name: string
  description: string
  isCompleted: boolean
  onToggleComplete: (questId: number) => void
}

export function QuestItem({
  id,
  name,
  description,
  isCompleted,
  onToggleComplete,
}: QuestItemProps) {
  return (
    <div
      className={classNames(styles.questItem, {
        [styles.completed]: isCompleted,
      })}
    >
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggleComplete(id)}
          className={styles.hiddenCheckbox}
        />
        <span
          className={classNames(styles.checkbox, {
            [styles.checkboxChecked]: isCompleted,
          })}
        >
          {isCompleted && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className={styles.checkIcon}
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>
      </label>
      <div className={styles.content}>
        <div className={styles.header}>
          <h4 className={styles.name}>{name}</h4>
          {isCompleted && (
            <span className={styles.completedBadge}>Completed</span>
          )}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
