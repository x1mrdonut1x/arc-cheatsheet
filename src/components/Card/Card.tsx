import classNames from 'classnames'
import type { ReactNode } from 'react'
import { useId } from 'react'
import styles from './Card.module.scss'

type CardVariant = 'primary' | 'secondary'

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  className?: string
  animated?: boolean
  title?: string
  icon?: string
  footer?: ReactNode
}

export function Card({
  children,
  variant = 'primary',
  className,
  animated = true,
  title,
  icon,
  footer,
}: CardProps) {
  const titleId = useId()

  return (
    <div
      className={classNames(
        styles.card,
        {
          [styles.cardPrimary]: variant === 'primary',
          [styles.cardSecondary]: variant === 'secondary',
          [styles.cardAnimated]: animated,
        },
        className,
      )}
    >
      {title ? (
        <section aria-labelledby={titleId}>
          <h4 id={titleId} className={styles.title}>
            {icon && (
              <span
                className={classNames(styles.icon, {
                  [styles.iconSpin]: variant === 'primary',
                })}
                aria-hidden="true"
              >
                {icon}
              </span>
            )}
            {title}
          </h4>
          {children}
          {footer}
        </section>
      ) : (
        children
      )}
    </div>
  )
}
