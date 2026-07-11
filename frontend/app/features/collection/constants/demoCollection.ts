/**
 * 示範收藏資料(靜態展示;登入 + figures API 接線後由後端取代)。
 * 欄位對齊 docs/data-model.md 的 figures 表。
 */
import { demoFigures, type DemoFigure } from '~/features/generator/constants/demoFigures'

export type OwnershipStatus = 'owned' | 'wishlist' | 'preorder'

export interface CollectionItem extends DemoFigure {
  brand: string
  figureType: 'action' | 'pvc' | 'chibi'
  scale: string
  status: OwnershipStatus
}

const brands = ['Bandai', 'Good Smile', 'Kotobukiya', 'Hot Toys'] as const
const types = ['action', 'pvc', 'chibi'] as const
const scales = ['1/12', '1/7', '1/6'] as const
const statuses: OwnershipStatus[] = ['owned', 'owned', 'wishlist', 'owned', 'preorder', 'owned']

export const demoCollection: CollectionItem[] = demoFigures.map((f, i) => ({
  ...f,
  brand: brands[i % brands.length]!,
  figureType: types[i % types.length]!,
  scale: scales[i % scales.length]!,
  status: statuses[i % statuses.length]!,
}))
