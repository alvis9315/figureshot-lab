/**
 * 攝影風格卡占位資料(guide: leica-looks-gallery 的 Transform 對應)。
 * gradient 是風格示意的暫代視覺;正式預覽圖屬 PRE-006 種子素材。
 */
export interface DemoStyle {
  id: string
  gradient: string
}

export const demoStyles: DemoStyle[] = [
  { id: 'cinematic', gradient: 'linear-gradient(135deg, #0f2a33 0%, #14424d 45%, #e8a33d 130%)' },
  { id: 'street', gradient: 'linear-gradient(135deg, #17171b 0%, #3a3f4a 60%, #8ea0b8 130%)' },
  { id: 'warmDaily', gradient: 'linear-gradient(135deg, #3a2b1a 0%, #8a5a2b 55%, #f2d8a7 130%)' },
  { id: 'neoTokyo', gradient: 'linear-gradient(135deg, #14060f 0%, #55164f 55%, #00c2d1 140%)' },
]

export const demoScenes = ['rooftop', 'office', 'store', 'beach', 'ruins'] as const
export const demoMoods = ['heartwarming', 'deadpan', 'epic', 'awkward'] as const
export const demoTasks = ['takeout', 'overtime', 'duel', 'picnic'] as const
