import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/globalStyles.ts'




import { Home } from './Pages/Home/Index.tsx'

import './index.css'


// === Pages === //

createRoot(document.getElementById('root')!).render(

    <StrictMode>
      <GlobalStyle/>
      <Home />
    </StrictMode>
)
