import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/tarik/Work/NewTabLab/Boilerplates/N3S4D/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}