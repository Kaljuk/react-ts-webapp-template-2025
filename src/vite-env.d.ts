/// <reference types="vite/client" />

/**
 * @description Import.meta.env types
 */
interface ImportMetaEnv {
  /**
   * @description API Base url
   * @example `https://api.example.com/api/v1`
   */
  readonly VITE_APP_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
