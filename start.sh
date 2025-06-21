#!/bin/bash

echo "🚀 啟動課程預約系統..."
echo "📦 檢查依賴..."

# 檢查node_modules是否存在
if [ ! -d "node_modules" ]; then
    echo "📥 安裝依賴..."
    npm install
fi

echo "🌐 啟動開發伺服器..."
echo "📍 網址: http://localhost:3000"
echo "⏹️  按 Ctrl+C 停止伺服器"
echo ""

npm run dev 