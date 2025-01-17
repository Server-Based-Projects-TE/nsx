import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/app'

import './index.scss'

const container = document.createElement('popup')
document.body.appendChild(container)

const root = createRoot(container)
root.render(<App />)

// eslint-disable-next-line no-console
console.log('Content Script 👋')
