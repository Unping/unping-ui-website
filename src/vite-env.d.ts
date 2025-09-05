/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POSTHOG_KEY: string
  readonly VITE_POSTHOG_HOST?: string
  readonly DEV: boolean
  readonly PROD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
