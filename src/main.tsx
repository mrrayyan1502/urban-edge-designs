import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { initAnalytics } from './lib/analytics.ts'

initAnalytics()

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if (container && container.hasChildNodes() && container.innerHTML.trim() !== '') {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
