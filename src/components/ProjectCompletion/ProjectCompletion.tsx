import classNames from 'classnames'
import { FolderKanban } from 'lucide-react'
import { useCallback, useState } from 'react'
import { projects } from '../../data/project'
import { useCompletedProjects } from '../../hooks/useCompletedProjects'
import { Button } from '../Button'
import { SidePanel } from '../SidePanel'
import styles from './ProjectCompletion.module.scss'

export function ProjectCompletion() {
  const [isOpen, setIsOpen] = useState(false)
  const { isCompleted, toggleLevel, isTracking, toggleTracking } =
    useCompletedProjects()

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      <Button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Project Completion"
      >
        <FolderKanban size={18} className={styles.buttonIcon} />
        <span className={styles.buttonText}>Project</span>
      </Button>

      <SidePanel
        isOpen={isOpen}
        onClose={handleClose}
        title="Project Completion"
        variant="project"
      >
        <div className={styles.trackingSection}>
          <Button
            variant="toggle"
            className={styles.trackingButton}
            active={isTracking}
            onClick={toggleTracking}
            aria-pressed={isTracking}
          >
            {isTracking ? 'Tracking Project' : 'Track Project'}
          </Button>
          <p className={styles.trackingHint}>
            {isTracking
              ? 'Project items are included in recommendations'
              : 'Enable to include project items in recommendations'}
          </p>
        </div>

        <ul className={styles.stageList}>
          {projects.map((project) => (
            <li key={project.level} className={styles.stageItem}>
              <Button
                variant="ghost"
                className={classNames(styles.stageButton, {
                  [styles.stageCompleted]: isCompleted(project.level),
                })}
                onClick={() => toggleLevel(project.level)}
                aria-pressed={isCompleted(project.level)}
                disabled={!isTracking}
              >
                <span className={styles.stageLevel}>Stage {project.level}</span>
                <span className={styles.stageName}>{project.name}</span>
                {isCompleted(project.level) && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={styles.checkIcon}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </Button>
            </li>
          ))}
        </ul>
      </SidePanel>
    </>
  )
}
