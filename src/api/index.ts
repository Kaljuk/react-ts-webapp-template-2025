import axios from 'axios'

const baseURL = import.meta.env.VITE_APP_API

if (import.meta.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.info('Setting API base URL:', baseURL)
}

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  withXSRFToken: true,
})

api.defaults.withCredentials = true

export type SWRFetcherConfig = {
  key?: string
  isDisabled?: boolean
}
type SWRFetcherArgs = string | SWRFetcherConfig

export const swrFetcher = async (config: SWRFetcherArgs) => {
  if (!config) return null
  if (typeof config === 'string') return api.get(config).then((res) => res?.data)

  if (config.isDisabled || !config?.key) return null
  return api.get(config.key).then((res) => res?.data)
}

export default api
