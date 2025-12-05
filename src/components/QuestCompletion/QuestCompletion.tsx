import { useCallback, useState } from 'react'
import { traders } from '../../data/traders'
import { useCompletedQuests } from '../../hooks/useCompletedQuests'
import { SidePanel } from '../SidePanel'
import styles from './QuestCompletion.module.scss'
import { QuestsList } from './QuestsList'
import { TraderSelector } from './TraderSelector'

export function QuestCompletion() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTraderId, setSelectedTraderId] = useState(traders[0]?.id ?? 0)
  const { completedQuests, toggleQuest } = useCompletedQuests()

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Quest Completion"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.buttonIcon}
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        <span className={styles.buttonText}>Quest Completion</span>
      </button>

      <SidePanel
        isOpen={isOpen}
        onClose={handleClose}
        title="Quest Completion"
        variant="quest"
      >
        <TraderSelector
          selectedTraderId={selectedTraderId}
          onSelectTrader={setSelectedTraderId}
        />

        <QuestsList
          traderId={selectedTraderId}
          completedQuests={completedQuests}
          onToggleQuest={toggleQuest}
        />
      </SidePanel>
    </>
  )
}
