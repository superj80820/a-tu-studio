const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

// 中間件
app.use(cors())
app.use(express.json())

// 預約 API 端點
app.get('/api/booking', (req, res) => {
  try {
    // 從 URL 參數中獲取預約數據
    const {
      date,
      time,
      course,
      name,
      phone,
      email,
      notes
    } = req.query

    // 驗證必要欄位
    if (!date || !time || !course || !name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: '缺少必要欄位'
      })
    }

    // 這裡可以添加實際的預約邏輯
    // 例如：保存到資料庫、發送通知等
    
    console.log('收到預約請求:', {
      date,
      time,
      course,
      name,
      phone,
      email,
      notes
    })

    // 模擬處理時間
    setTimeout(() => {
      res.json({
        success: true,
        message: '預約成功',
        bookingId: `BK${Date.now()}`,
        data: {
          date,
          time,
          course,
          name,
          phone,
          email,
          notes
        }
      })
    }, 1000) // 模擬 1 秒的處理時間

  } catch (error) {
    console.error('預約處理錯誤:', error)
    res.status(500).json({
      success: false,
      message: '服務器錯誤'
    })
  }
})

// 健康檢查端點
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

app.listen(port, () => {
  console.log(`預約 API 服務器運行在 http://localhost:${port}`)
}) 