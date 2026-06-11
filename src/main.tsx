import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log =
    () => {};

  console.info =
    () => {};

  console.warn =
    () => {};

  console.error =
    () => {};
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
