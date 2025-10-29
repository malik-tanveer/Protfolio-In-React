import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import LanguageSwitcher from "../src/components/LanguageSwitcher"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <LanguageSwitcher/> */}
  </StrictMode>,
)
