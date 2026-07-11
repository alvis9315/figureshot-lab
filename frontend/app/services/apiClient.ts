/**
 * 唯一的 API 呼叫封裝:baseURL 來自 runtimeConfig(NUXT_PUBLIC_API_BASE)。
 * page / 元件不得直接 $fetch 後端;功能 API 放 features/<feature>/api/ 並經由本函式。
 * TODO(P1 auth):自動帶 Authorization header 與 401 統一處理。
 */
export function apiFetch<T>(path: string, options: Parameters<typeof $fetch>[1] = {}): Promise<T> {
  const config = useRuntimeConfig()
  return $fetch<T>(path, {
    baseURL: config.public.apiBase,
    ...options,
  }) as Promise<T>
}
