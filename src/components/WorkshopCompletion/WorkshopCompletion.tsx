import classNames from 'classnames'
import { Wrench } from 'lucide-react'
import { useCallback, useState } from 'react'
import { workshops } from '../../data/workshops'
import { useCompletedWorkshops } from '../../hooks/useCompletedWorkshops'
import { SidePanel } from '../SidePanel'
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

      <SidePanel
        isOpen={isOpen}
        onClose={handleClose}
        title="Workshop Upgrades"
        variant="workshop"
      >
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
      </SidePanel>
    </>
  )
}
