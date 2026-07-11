# UI Style Guide

## 選型

- **Tailwind CSS 唯一樣式系統**;禁止引入 Element Plus / Naive UI / Bootstrap 等任何 UI library(ADR 前提:Cinematic Editorial Workspace 是高度客製視覺)。
- design token 集中兩處:Tailwind theme(`@theme`,見 assets/styles/main.css)+ CSS variables;禁止散落覆寫。

## 視覺基調(spec 10.0,Moodboard PRE-004 定稿前為暫定 token)

- 深色 cinematic 基調:近黑背景、暖白文字、單一強調色(amber 系,攝影棚燈感)。
- 大量留白與大圖 Showcase;避免企業 SaaS 儀表板感。
- 字階:標題用 clamp() 流動字級;內文 16px 基準。

## 元件規則

- 重複 pattern 抽成 component;className 不可超長重複貼。
- 基礎元件(Button/Card/Input)放 `components/common/`,做了才建,不預先堆。
- 圖片一律 lazy + 設定寬高避免 layout shift(收藏照片、Showcase 大圖)。

## 禁止

混用 UI library;樣式全塞單一 css;各處自定顏色不走 token。
