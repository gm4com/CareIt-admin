import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRouter from './routers/AppRouter'
import BaseLayout from './layouts/base'
import { BrowserRouter } from 'react-router'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BaseLayout>
          <AppRouter />
        </BaseLayout>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
