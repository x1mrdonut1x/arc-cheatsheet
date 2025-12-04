import { createHashHistory, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const hashHistory = createHashHistory()

export const router = createRouter({
  routeTree,
  history: hashHistory,
  scrollRestoration: true,
  defaultPreload: 'intent',
})
