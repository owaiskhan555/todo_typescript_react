import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { TodosProvideer } from './store/todos.tsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')as HTMLElement).render(
  <StrictMode>
    <TodosProvideer>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </TodosProvideer>
  </StrictMode>,
)
