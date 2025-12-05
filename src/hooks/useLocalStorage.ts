import { useCallback, useEffect, useSyncExternalStore } from 'react'

function getStorageValue<T>(key: string, initialValue: T): T {
  try {
    const item = localStorage.getItem(key)
    return item ? (JSON.parse(item) as T) : initialValue
  } catch {
    return initialValue
  }
}

function setStorageValue<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    // Dispatch a custom event so other tabs/components can react
    window.dispatchEvent(new StorageEvent('storage', { key }))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Error setting localStorage key "${key}":`, error)
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const handleStorage = (e: StorageEvent) => {
        if (e.key === key || e.key === null) {
          onStoreChange()
        }
      }
      window.addEventListener('storage', handleStorage)
      return () => window.removeEventListener('storage', handleStorage)
    },
    [key],
  )

  const getSnapshot = useCallback(
    () => JSON.stringify(getStorageValue(key, initialValue)),
    [key, initialValue],
  )

  const getServerSnapshot = useCallback(
    () => JSON.stringify(initialValue),
    [initialValue],
  )

  const storedValue = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      const currentValue = getStorageValue(key, initialValue)
      const newValue = value instanceof Function ? value(currentValue) : value
      setStorageValue(key, newValue)
    },
    [key, initialValue],
  )

  // Sync initialValue to storage if key doesn't exist
  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      setStorageValue(key, initialValue)
    }
  }, [key, initialValue])

  return [JSON.parse(storedValue) as T, setValue]
}
