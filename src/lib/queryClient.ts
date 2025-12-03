import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Data is static, never stale
      gcTime: Infinity, // Never garbage collect
    },
  },
})
