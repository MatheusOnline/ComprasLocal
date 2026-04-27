import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './style/theme.ts'


import { AppRoutes } from './appRouters.tsx'

import './index.css'


// === Pages === //

createRoot(document.getElementById('root')!).render(

    <StrictMode>
      <GlobalStyle/>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </StrictMode>
)
