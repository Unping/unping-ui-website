import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupConsentWatcher, initPostHog } from './lib/posthog'

// Set up consent watcher to initialize PostHog when user gives consent
setupConsentWatcher()

// Try to initialize PostHog if consent was already given
initPostHog()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
