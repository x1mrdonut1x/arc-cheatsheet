import classNames from 'classnames'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './SidePanel.module.scss'

export type SidePanelVariant = 'quest' | 'workshop' | 'project'

interface SidePanelProps {
  isOpen: boolean
  onClose: () => void
  title: string
  variant: SidePanelVariant
  children: ReactNode
}

export function SidePanel({
  isOpen,
  onClose,
  title,
  variant,
  children,
}: SidePanelProps) {
  if (!isOpen) return null

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div
        className={classNames(styles.container, styles[variant])}
        data-variant={variant}
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button
            className={styles.closeButton}
            onClick={onClose}
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
        {children}
      </div>
    </>,
    document.body,
  )
}
