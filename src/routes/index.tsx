import { useState, useEffect, useCallback } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import classNames from 'classnames'
import { z } from 'zod'

import { SearchInput } from '../components/SearchInput/SearchInput'
import { SearchResults } from '../components/SearchResults/SearchResults'
import { items } from '../data/data'

import styles from './index.module.scss'

const searchParamsSchema = z.object({
  item: z.number().optional(),
})

export const Route = createFileRoute('/')({
  component: App,
  validateSearch: searchParamsSchema,
})

function App() {
  const { item: itemIdParam } = Route.useSearch()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItemId, setSelectedItemId] = useState(itemIdParam)
  const [filteredItems, setFilteredItems] = useState<typeof items>([])

  // Helper to filter items based on query
  const filterItems = useCallback((query: string) => {
    if (!query.trim()) {
      setFilteredItems([])
      return
    }

    const normalizedQuery = query.toLowerCase().trim()
    const results = items.filter((item) => {
      return item.name.toLowerCase().includes(normalizedQuery)
    })

    setFilteredItems(results)

    // Auto-select when exactly one item is found via search
    if (results.length === 1) {
      const item = results[0]
      setSelectedItemId(item.id)
      navigate({ to: '/', search: { item: item.id } })
    }
  }, [navigate])

  // Sync item param with state on mount
  useEffect(() => {
    if (itemIdParam === selectedItemId) return

    setSelectedItemId(itemIdParam)
    if (!itemIdParam) return

    const item = items.find((i) => i.id === itemIdParam)
    if (item) {
      setSearchQuery(item.name)
      setFilteredItems([item])
    }
  }, [itemIdParam])

  const handleItemSelect = useCallback(
    (itemName: string) => {
      const item = items.find((i) => i.name === itemName)
      if (!item) return

      setSelectedItemId(item.id)
      setSearchQuery(item.name)
      setFilteredItems([item])
      navigate({ to: '/', search: { item: item.id } })
    },
    [navigate],
  )

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchQuery(value)

      if (selectedItemId) {
        const currentItem = items.find((i) => i.id === selectedItemId)
        if (currentItem && value !== currentItem.name) {
          setSelectedItemId(undefined)
          navigate({ to: '/', search: {} })
        }
      }

      filterItems(value)
    },
    [selectedItemId, navigate, filterItems],
  )

  const hasSearchQuery = searchQuery.trim().length > 0

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
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for items..."
        />

        <div
          className={classNames(styles.resultsContainer, {
            [styles.resultsContainerVisible]: hasSearchQuery,
          })}
        >
          <SearchResults
            items={filteredItems}
            searchQuery={searchQuery}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
    </div>
  )
}
