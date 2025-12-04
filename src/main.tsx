import { RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { router } from './router'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
