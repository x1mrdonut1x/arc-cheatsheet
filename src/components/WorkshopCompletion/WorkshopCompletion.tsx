import classNames from 'classnames'
import { Wrench } from 'lucide-react'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { workshops } from '../../data/workshops'
import { useCompletedWorkshops } from '../../hooks/useCompletedWorkshops'
import styles from './WorkshopCompletion.module.scss'

export function WorkshopCompletion() {
  const [isOpen, setIsOpen] = useState(false)
  const { isCompleted, toggleLevel } = useCompletedWorkshops()

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Workshop Upgrades"
      >
        <Wrench size={18} className={styles.buttonIcon} />
        <span className={styles.buttonText}>Workshop Upgrades</span>
      </button>

      {isOpen && createPortal(
        <>
          <div className={styles.backdrop} onClick={handleClose} />
          <div
            className={classNames(styles.container, {
              [styles.containerOpen]: isOpen,
            })}
          >
            <div className={styles.header}>
              <h3 className={styles.title}>Workshop Upgrades</h3>
              <button
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Close"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className={styles.workshopList}>
              {workshops.map((workshop) => (
                <li key={workshop.id} className={styles.workshopItem}>
                  <span className={styles.workshopName}>{workshop.name}</span>
                  <div className={styles.levels}>
                    {workshop.levels.map((level) => (
                      <button
                        key={level.value}
                        className={classNames(styles.levelButton, {
                          [styles.levelCompleted]: isCompleted(
                            workshop.id,
                            level.value,
                          ),
                        })}
                        onClick={() => toggleLevel(workshop.id, level.value)}
                        aria-pressed={isCompleted(workshop.id, level.value)}
                        aria-label={`Level ${level.value}`}
                      >
                        {level.value}
                      </button>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
