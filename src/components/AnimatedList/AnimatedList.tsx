import { Children, useId, type ReactNode, type HTMLAttributes } from 'react'
import classNames from 'classnames'
import { getStaggerStyle } from '../../utils/animation'
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
  const id = useId()
  const childArray = Children.toArray(children)
  const itemCount = childArray.length

  return (
    <Component className={classNames(styles.list, className)} {...rest}>
      {childArray.map((child, index) => (
        <div
          key={`${id}-${index}`}
          className={styles.item}
          style={getStaggerStyle(index, itemCount, totalDuration)}
        >
          {child}
        </div>
      ))}
    </Component>
  )
}
