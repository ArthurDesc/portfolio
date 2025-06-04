import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './lib/i18n'
import { init } from '@emailjs/browser'
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18n'

// Initialisez EmailJS avec votre Public Key
init("c4qjRThVTK8OsaU-_");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
