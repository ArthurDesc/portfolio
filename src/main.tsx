import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './lib/i18n'
import { init } from '@emailjs/browser'

// Initialisez EmailJS avec votre Public Key
init("c4qjRThVTK8OsaU-_");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
