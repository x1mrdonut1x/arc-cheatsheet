import classNames from 'classnames'
import { Filter, Search, TableOfContents } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import styles from './SearchInput.module.scss'

export type SortOption = 'name' | 'price'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  placeholder?: string
  sortBy: SortOption
  onSortChange: (sort: SortOption) => void
  showAll: boolean
  onToggleShowAll: () => void
}

export function SearchInput({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder = 'Search items...',
  sortBy,
  onSortChange,
  showAll,
  onToggleShowAll,
}: SearchInputProps) {
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const filterMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target as Node)
      ) {
        setShowFilterMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSortSelect = (option: SortOption) => {
    onSortChange(option)
    setShowFilterMenu(false)
  }

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
        {/* Filter Icon */}
        <div className={styles.filterWrapper} ref={filterMenuRef}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => setShowFilterMenu(!showFilterMenu)}
            title="Sort by"
          >
            <Filter size={20} />
          </button>
          {showFilterMenu && (
            <div className={styles.filterMenu}>
              <button
                type="button"
                className={classNames(styles.filterOption, {
                  [styles.filterOptionActive]: sortBy === 'name',
                })}
                onClick={() => handleSortSelect('name')}
              >
                Sort by Name
              </button>
              <button
                type="button"
                className={classNames(styles.filterOption, {
                  [styles.filterOptionActive]: sortBy === 'price',
                })}
                onClick={() => handleSortSelect('price')}
              >
                Sort by Price
              </button>
            </div>
          )}
        </div>

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
