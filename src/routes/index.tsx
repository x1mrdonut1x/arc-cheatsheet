import { createFileRoute, useNavigate } from '@tanstack/react-router'
import classNames from 'classnames'
import { useLayoutEffect, useState } from 'react'
import { z } from 'zod'
import { SearchInput } from '../components/SearchInput/SearchInput'
import { SearchResults } from '../components/SearchResults/SearchResults'
import { useDebounce } from '../hooks/useDebounce'
import { useGetItem, useSearchItems } from '../hooks/useItems'
import styles from './index.module.scss'

const searchParamsSchema = z.object({
  id: z.number().optional(),
  sortBy: z.enum(['name', 'price', 'rarity', 'category']).optional(),
  sortDirection: z.enum(['asc', 'desc']).optional(),
})

export const Route = createFileRoute('/')({
  component: App,
  validateSearch: searchParamsSchema,
})

function App() {
  const { id: selectedItemId, sortBy, sortDirection } = Route.useSearch()
  const navigate = useNavigate({ from: '/' })

  const [searchQuery, setSearchQuery] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [showAllItems, setShowAllItems] = useState(false)
  const debouncedQuery = useDebounce(searchQuery, 300)

  const { data: searchResults = [] } = useSearchItems(
    debouncedQuery,
    sortBy ?? null,
    sortDirection ?? null,
    showAllItems,
  )
  const { data: selectedItem } = useGetItem(selectedItemId)

  // Derive display items from state
  const displayItems = selectedItem ? [selectedItem] : searchResults

  // Show selected item name only when input is not focused
  const displayQuery = isInputFocused
    ? searchQuery
    : (selectedItem?.name ?? searchQuery)

  const hasSearchQuery = displayQuery.trim().length > 0 || showAllItems

  useLayoutEffect(() => {
    if (searchResults.length === 1) {
      navigate({
        to: '/',
        search: (prev: z.infer<typeof searchParamsSchema>) => ({
          ...prev,
          id: searchResults[0].id,
        }),
      })
    }
  }, [navigate, searchResults])

  const handleItemSelect = (id: number) => {
    setShowAllItems(false)
    navigate({
      to: '/',
      search: (prev: z.infer<typeof searchParamsSchema>) => ({ ...prev, id }),
    })
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setShowAllItems(false)

    if (selectedItemId) {
      navigate({ to: '/' })
    }
  }

  const handleShowToggle = () => {
    setSearchQuery('')
    setShowAllItems((prev) => !prev)
    navigate({
      to: '/',
      search: (prev: z.infer<typeof searchParamsSchema>) => ({
        ...prev,
        id: undefined,
      }),
    })
  }

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.searchWrapper, {
          [styles.searchWrapperActive]: hasSearchQuery,
          [styles.searchWrapperCentered]: !hasSearchQuery,
        })}
      >
        <h1
          className={classNames(styles.title, {
            [styles.titleHidden]: hasSearchQuery,
          })}
        >
          ARC Cheatsheet
        </h1>
        <p
          className={classNames(styles.subtitle, {
            [styles.subtitleHidden]: hasSearchQuery,
          })}
        >
          Search for items, materials, and more
        </p>

        <SearchInput
          value={displayQuery}
          onChange={handleSearchChange}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder="Search for items..."
          showAll={showAllItems}
          onToggleShowAll={handleShowToggle}
        />

        <div
          className={classNames(styles.resultsContainer, {
            [styles.resultsContainerVisible]: hasSearchQuery,
          })}
        >
          <SearchResults
            items={displayItems}
            searchQuery={displayQuery}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
    </div>
  )
}
