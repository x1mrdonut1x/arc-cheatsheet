import classNames from 'classnames'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

export type ButtonVariant = 'default' | 'ghost' | 'icon' | 'toggle'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
}

export function Button({
  children,
  variant = 'default',
  size = 'md',
  active = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        styles[variant],
        styles[size],
        { [styles.active]: active },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
