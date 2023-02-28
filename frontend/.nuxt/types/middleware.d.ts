import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/tarik/Work/NewTabLab/Boilerplates/N3S4D/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}