import 'dayjs/locale/et'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { SWRConfig } from 'swr'
import { name, version } from '../package.json'
import { swrFetcher } from './api'

import Screens from './screens'
import './styles/index.css'

console.info(`APP: ${name} - ${version}`)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRConfig
      value={{
        fetcher: swrFetcher,
      }}
    >
      <BrowserRouter>
        <Screens />
      </BrowserRouter>
    </SWRConfig>
  </StrictMode>,
)
