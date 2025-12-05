import classNames from 'classnames'
import type { HTMLAttributes, ReactNode } from 'react'
import { Children } from 'react'
import styles from './AnimatedList.module.scss'

interface AnimatedListProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  as?: 'ul' | 'ol' | 'div'
  totalDuration?: number
}

export function AnimatedList({
  children,
  className,
  as: Component = 'ul',
  totalDuration = 0.3,
  ...rest
}: AnimatedListProps) {
  const childArray = Children.toArray(children)
  const itemCount = childArray.length

  // Generate random keys when children change to re-trigger animations
  const keys = childArray.map(() => crypto.randomUUID())

  return (
    <Component className={classNames(styles.list, className)} {...rest}>
      {childArray.map((child, index) => {
        const delay = itemCount <= 1 ? 0 : (index * totalDuration) / itemCount

        return (
          <div
            key={keys[index]}
            className={styles.item}
            style={{ animationDelay: `${delay}s` }}
          >
            {child}
          </div>
        )
      })}
    </Component>
  )
}
