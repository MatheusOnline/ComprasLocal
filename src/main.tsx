import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './style/theme.ts'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { AppRoutes } from './appRouters.tsx'





import './index.css'

const client = new QueryClient()

// === Pages === //
createRoot(document.getElementById('root')!).render(

    <StrictMode>
      <GlobalStyle/>
      <ThemeProvider theme={defaultTheme}>
        <QueryClientProvider client={client}>

          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
)
