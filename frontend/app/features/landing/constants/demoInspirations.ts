/**
 * 示範靈感卡(書架 ShelfSection 與 SearchOverlay 共用)。
 * 素材進場:填 video(自帶播放鈕)或 image 即取代占位色;標題文案在 i18n landing.shelf.cards.*。
 */
export interface DemoInspiration {
  key: string
  style: string
  hue: number
  video?: string
  image?: string
}

export const demoInspirations: DemoInspiration[] = [
  { key: 'c1', style: 'cinematic', hue: 352 },
  { key: 'c2', style: 'street', hue: 212 },
  { key: 'c3', style: 'warmDaily', hue: 36 },
  { key: 'c4', style: 'neoTokyo', hue: 300 },
  { key: 'c5', style: 'warmDaily', hue: 150 },
  { key: 'c6', style: 'street', hue: 20 },
  { key: 'c7', style: 'neoTokyo', hue: 260 },
]
