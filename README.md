# 課程預約系統

一個現代化的課程預約網站，提供完整的課程展示和預約功能。

## 功能特色

- 🏠 **首頁展示** - 美觀的歡迎頁面，展示系統特色和熱門課程
- 📚 **課程品項** - 完整的課程列表，支援篩選和排序功能
- 📅 **預約日曆** - 互動式日曆介面，方便選擇預約時間
- 📝 **預約表單** - 完整的預約資訊收集表單
- 📱 **響應式設計** - 支援各種裝置尺寸

## 技術架構

- **前端框架**: React 18
- **路由管理**: React Router DOM
- **日期處理**: date-fns
- **圖示**: Lucide React
- **建置工具**: Vite
- **樣式**: CSS3 + Flexbox/Grid

## 快速開始

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

應用程式將在 `http://localhost:3000` 啟動

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 專案結構

```
src/
├── components/          # 共用組件
│   └── Navbar.jsx      # 導航欄
├── pages/              # 頁面組件
│   ├── Home.jsx        # 首頁
│   ├── Courses.jsx     # 課程品項
│   └── Booking.jsx     # 預約日曆
├── App.jsx             # 主要應用組件
├── main.jsx            # 應用入口
├── index.css           # 全局樣式
└── App.css             # 應用樣式
```

## 主要功能說明

### 首頁 (Home)
- 歡迎橫幅區域
- 系統特色介紹
- 熱門課程預覽
- 行動呼籲區域

### 課程品項 (Courses)
- 課程卡片展示
- 類別篩選功能
- 價格/評分排序
- 詳細課程資訊

### 預約日曆 (Booking)
- 月曆視圖
- 日期選擇
- 時段選擇
- 預約表單
- 預約摘要

## 自訂設定

### 修改課程資料
在 `src/pages/Courses.jsx` 中修改 `courses` 陣列來新增或修改課程。

### 修改時段設定
在 `src/pages/Booking.jsx` 中修改 `timeSlots` 陣列來調整可預約時段。

### 修改樣式
- 全局樣式：`src/index.css`
- 組件樣式：`src/App.css`

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 授權

MIT License 