import type { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Card.module.scss'

export type CardVariant = 'primary' | 'secondary'

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  className?: string
  animated?: boolean
}

export function Card({
  children,
  variant = 'primary',
  className,
  animated = true,
}: CardProps) {
  return (
    <div
      className={classNames(
        styles.card,
        {
          [styles.cardPrimary]: variant === 'primary',
          [styles.cardSecondary]: variant === 'secondary',
          [styles.cardAnimated]: animated,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
