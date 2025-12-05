import { RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'
import { router } from './router'
import './styles.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
