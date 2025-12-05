import classNames from 'classnames'
import { Search, TableOfContents } from 'lucide-react'
import styles from './SearchInput.module.scss'
import { SortMenu } from './SortMenu'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  placeholder?: string
  showAll: boolean
  onToggleShowAll: () => void
}

export function SearchInput({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder = 'Search items...',
  showAll,
  onToggleShowAll,
}: SearchInputProps) {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete="off"
        />
        <Search className={styles.searchIcon} size={24} />
      </div>

      <div className={styles.iconButtons}>
        <SortMenu />

        {/* Show All Icon */}
        <button
          type="button"
          className={classNames(styles.iconButton, {
            [styles.iconButtonActive]: showAll,
          })}
          onClick={onToggleShowAll}
          title={showAll ? 'Hide all items' : 'Show all items'}
        >
          <TableOfContents size={20} />
        </button>
      </div>
    </div>
  )
}

