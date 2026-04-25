import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/globalStyles.ts'




import { AppRoutes } from './appRouters.tsx'

import './index.css'


// === Pages === //

createRoot(document.getElementById('root')!).render(

    <StrictMode>
      <GlobalStyle/>
      <AppRoutes />
    </StrictMode>
)
