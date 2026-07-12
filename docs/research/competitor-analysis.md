# 競品與替代方案分析(PRE-003)

> 初稿 2026-07-12(WebSearch 調研),同日經擁有者審閱並補充回饋定案。
> 結論先講:目前**沒有**任何產品同時做「收藏管理 × 靈感生成 × 社群文案」——三個賽道各有玩家,交集是空的,這就是 FigureShot Lab 的差異化位置(驗證了 spec 第 3 節的判斷)。

## 賽道一:模型收藏管理

| 產品 | 定位 | 核心功能 | 沒做的 |
|---|---|---|---|
| **MyFigureCollection.net(MFC)**<br><small>白話說:模型收藏圈最大的公開資料庫網站,可以想成「模型版的豆瓣/IMDb」——查某隻模型的原廠資訊、比價、標記已入手/想要、看別人上傳的收藏照</small> | 模型圈最大資料庫社群 | 公共模型資料庫、Owned/Wished/Ordered 標記、價格比較、發售月曆、收藏統計圖表、圖片分享 | 拍攝靈感、搭配建議、AI 文案——收藏是「檔案櫃」,不是「創作起點」 |
| MyFigureList(App) | MFC 型行動版 | 資料庫瀏覽、收藏管理、條碼掃描 | 同上 |
| iCollect Action Figures | 泛收藏品管理 | 收藏清單、估值 | 無模型攝影任何面向 |

**啟示**:MFC 證明玩家有強烈的「收藏建檔」需求與公共資料庫網路效應;但它停在管理,收藏「站著不動」的痛點完全沒人接手。MFC 的公共資料庫是長期威脅也是潛在互補(未來可考慮匯入)。

## 賽道二:攝影靈感/隨機挑戰工具

| 產品 | 定位 | 核心功能 | 沒做的 |
|---|---|---|---|
| LearnPhoto365(iOS/Android,$4.99) | 攝影作業產生器 | 隨機作業(主題+技法+對象)、365 挑戰 | 針對「人像/風景」等通用攝影;不懂模型、不懂你的收藏 |
| Photography Challenge Generator 等網頁工具 | 免費隨機提示 | 一鍵出「構圖+主體+主題」 | 同上;無資料、無記憶、無社群輸出 |
| Spin The Wheel 類 | 通用轉盤 | 自建選項隨機抽 | 純工具,零領域知識 |

**啟示**:「隨機生成拍攝主題」的行為模式已被驗證(有人願意付 $4.99);但全部是**通用攝影**,沒有一個吃「你的收藏」當輸入——我們的輪盤/產生器抽的是使用者自己的模型,這是根本差異。

## 賽道三:AI 社群文案工具

| 產品 | 定位 | 核心功能 | 沒做的 |
|---|---|---|---|
| Pallyy / TheSocialCat / Copy.ai 等 | 通用 IG 文案生成 | 描述貼文→出文案+hashtag,部分可讀圖 | 不懂模型文化語彙、不連拍攝企劃、每次都要從頭描述 |
| CapAI / CapGen(App) | 圖生文案 | 上傳照片→文案 | 同上;後製端單點工具 |

**啟示**:AI 文案是紅海且免費工具遍地——**單獨做文案生成沒有生意**(驗證 spec 第 2 節「純文案生成器價值低」的判斷)。文案必須是工作流的最後一站,而不是產品本身。

## 賽道四:模型攝影社群(替代方案)

- IG/Threads hashtag 圈(#toyphotography、#模型攝影)、MFC 圖片區、巴哈模型板:玩家目前「找靈感」的實際方式是刷別人的作品——被動、無法轉化成自己的拍攝計畫。

## 定位地圖

```text
              管理收藏          產生靈感         輸出社群內容
MFC             ●●●               —                ○(圖片分享)
LearnPhoto365    —               ●●(通用)           —
AI 文案工具       —                —               ●●(通用)
FigureShot Lab  ●●(自建庫)   ●●●(吃收藏的生成)   ●●(企劃+文案一體)
```

## 對 MVP 的三個行動建議

1. **不要把 FigureShot Lab 定位成公開瀏覽的模型百科網站去跟 MFC 拚流量**——這跟「內部要不要用結構化目錄輔助使用者建收藏」是兩件事,可以分開決定。後者已有真實痛點佐證(擁有者反饋:海外觀眾常反覆問「這是哪隻/哪牌」),記錄於 [canonical-catalog-backlog.md](canonical-catalog-backlog.md),討論中、不阻擋現行進度。
2. **輪盤/產生器是護城河**,文案只是出口——行銷敘事順序應為「收藏活起來」>「AI 幫你寫文案」。
3. ~~訪談(PRE-002)加一題:「你用過 MFC 嗎?」~~ → 已改用白話問法直接加入 [interview-guide.md](interview-guide.md)(「你有沒有用 App/網站幫收藏打勾記錄」),避免受訪者聽不懂 MFC 這個縮寫。

## Sources

- [MyFigureCollection.net](https://myfigurecollection.net/)
- [MyFigureList - Google Play](https://play.google.com/store/apps/details?id=com.myfigurelist.app)
- [iCollect Action Figures - App Store](https://apps.apple.com/us/app/icollect-action-figures-toys/id656405076)
- [LearnPhoto365 Assignment Generator](https://www.learnphoto365.com/apps/)
- [Photography Challenge Generator](https://creativephotoconnect.com/photography-challenge-generator/)
- [Spin The Wheel - Photography Challenge](https://spinthewheel.app/photography-challenge)
- [Pallyy Instagram Caption Generator](https://pallyy.com/tools/instagram-caption-generator)
- [TheSocialCat Caption Generator](https://thesocialcat.com/tools/instagram-caption-generator)
- [CapAI - Google Play](https://play.google.com/store/apps/details?id=com.infinityapps.ai.generated.image.to.caption.quotes.social.media&hl=en_US)
