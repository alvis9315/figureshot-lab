import { defineStore } from 'pinia'

/**
 * 全域登入狀態(跨頁才進 store)。TODO(P1 auth):login / logout / token 持久化。
 */
export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null as string | null,
    displayName: null as string | null,
  }),
  getters: {
    isLoggedIn: (state) => state.accessToken !== null,
  },
})
