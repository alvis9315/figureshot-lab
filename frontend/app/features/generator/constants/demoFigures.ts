/**
 * 占位角色池:靜態 UI 展示用(PRE-005 種子資料未到位前的替身)。
 * hue 用來產生剪影卡的色調差異;正式版由收藏 API 取代。
 */
export interface DemoFigure {
  id: number
  name: string
  series: string
  hue: number
}

export const demoFigures: DemoFigure[] = [
  { id: 1, name: 'Ranger A', series: 'Series Alpha', hue: 28 },
  { id: 2, name: 'Mecha Unit 02', series: 'Steel Works', hue: 200 },
  { id: 3, name: 'Songstress', series: 'Stage Lights', hue: 320 },
  { id: 4, name: 'Night Blade', series: 'Shadow Arc', hue: 260 },
  { id: 5, name: 'Captain R', series: 'Series Alpha', hue: 0 },
  { id: 6, name: 'Beast Kid', series: 'Wild Tails', hue: 90 },
  { id: 7, name: 'Pilot Zero', series: 'Steel Works', hue: 180 },
  { id: 8, name: 'Witch of Tea', series: 'Daily Magic', hue: 140 },
  { id: 9, name: 'Drifter', series: 'Neo Street', hue: 40 },
  { id: 10, name: 'Ice Queen', series: 'Frost Saga', hue: 210 },
  { id: 11, name: 'Chef Bot', series: 'Daily Magic', hue: 60 },
  { id: 12, name: 'Star Racer', series: 'Neo Street', hue: 300 },
]
