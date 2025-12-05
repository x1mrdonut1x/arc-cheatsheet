import { useNavigate, useSearch } from '@tanstack/react-router'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../Button'
import styles from './SortMenu.module.scss'

export type SortOption = 'name' | 'price' | 'rarity' | 'category'
export type SortDirection = 'asc' | 'desc' | null

const sortOptions: Array<{ value: SortOption; label: string }> = [
  { value: 'name', label: 'Name' },
  { value: 'price', label: 'Price' },
  { value: 'rarity', label: 'Rarity' },
  { value: 'category', label: 'Category' },
]

export function SortMenu() {
  const { sortBy, sortDirection } = useSearch({ from: '/' })
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSortSelect = (option: SortOption) => {
    if (sortBy !== option) {
      // First click on a new field: descending
      void navigate({
        to: '/',
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          sortBy: option,
          sortDirection: 'desc',
        }),
      })
    } else if (sortDirection === 'desc') {
      // Second click: ascending
      void navigate({
        to: '/',
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          sortBy: option,
          sortDirection: 'asc',
        }),
      })
    } else {
      // Third click: reset
      void navigate({
        to: '/',
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          sortBy: undefined,
          sortDirection: undefined,
        }),
      })
    }
    setShowMenu(false)
  }

  const renderSortIcon = (option: SortOption) => {
    if (sortBy !== option) return null

    if (sortDirection === 'desc') {
      return <ArrowDown size={14} className={styles.sortArrow} />
    } else if (sortDirection === 'asc') {
      return <ArrowUp size={14} className={styles.sortArrow} />
    }
    return null
  }

  return (
    <div className={styles.filterWrapper} ref={menuRef}>
      <Button
        type="button"
        variant="icon"
        active={sortBy !== undefined}
        onClick={() => setShowMenu(!showMenu)}
        title="Sort by"
      >
        <ArrowUpDown size={20} />
      </Button>
      {showMenu && (
        <div className={styles.filterMenu}>
          {sortOptions.map((option) => (
            <Button
              key={option.value}
              type="button"
              variant="ghost"
              active={sortBy === option.value}
              className={styles.filterOption}
              onClick={() => handleSortSelect(option.value)}
            >
              <span>Sort by {option.label}</span>
              {renderSortIcon(option.value)}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
