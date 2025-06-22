import React, { useState } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addDays } from 'date-fns'
import { zhTW } from 'date-fns/locale'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, User, Phone, Mail } from 'lucide-react'

const Booking = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const courses = [
    { id: 1, name: '陶藝課', price: 550 },
    { id: 2, name: '畫畫課', price: 500 },
    { id: 3, name: '茶席體驗', price: 780 },
    { id: 4, name: '烤茶體驗', price: 550 },
  ]

  const timeSlots = [
    '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ]

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // 填充月初和月末的空白天數
  const startPadding = monthStart.getDay()
  const endPadding = 6 - monthEnd.getDay()
  
  const paddedDays = [
    ...Array(startPadding).fill(null),
    ...monthDays,
    ...Array(endPadding).fill(null)
  ]

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  const handleDateClick = (date) => {
    if (date) {
      setSelectedDate(date)
      setSelectedTime(null)
    }
  }

  const handleTimeClick = (time) => {
    setSelectedTime(time)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime || !selectedCourse) {
      alert('請選擇日期、時間和課程')
      return
    }
    
    // 這裡可以添加實際的預約邏輯
    console.log('預約資訊:', {
      date: selectedDate,
      time: selectedTime,
      course: selectedCourse,
      ...formData
    })
    
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setSelectedDate(null)
      setSelectedTime(null)
      setSelectedCourse('')
      setFormData({ name: '', phone: '', email: '', notes: '' })
    }, 3000)
  }

  const isDateDisabled = (date) => {
    if (!date) return true
    const today = new Date()
    return date < today
  }

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="section-title">課程預約</h1>
        <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
          選擇您想要的課程和時間，輕鬆完成預約
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        {/* Calendar Section */}
        <div className="calendar">
          <div className="calendar-header">
            <button 
              onClick={handlePrevMonth}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <h2 style={{ margin: 0 }}>
              {format(currentDate, 'yyyy年 M月', { locale: zhTW })}
            </h2>
            <button 
              onClick={handleNextMonth}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="calendar-grid">
            {/* 星期標題 */}
            {['日', '一', '二', '三', '四', '五', '六'].map(day => (
              <div key={day} style={{ 
                textAlign: 'center', 
                fontWeight: '600', 
                padding: '0.5rem',
                color: '#6b7280'
              }}>
                {day}
              </div>
            ))}
            
            {/* 日期格子 */}
            {paddedDays.map((date, index) => (
              <div
                key={index}
                className={`calendar-day ${
                  !date ? 'disabled' : ''
                } ${
                  date && isToday(date) ? 'today' : ''
                } ${
                  date && selectedDate && isSameDay(date, selectedDate) ? 'selected' : ''
                }`}
                onClick={() => handleDateClick(date)}
                style={{
                  opacity: !date || isDateDisabled(date) ? 0.3 : 1
                }}
              >
                {date ? format(date, 'd') : ''}
              </div>
            ))}
          </div>

          {selectedDate && (
            <div className="time-slots">
              <h3 style={{ marginBottom: '1rem' }}>選擇時間</h3>
              <div>
                {timeSlots.map(time => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Booking Form */}
        <div className="booking-form">
          <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CalendarIcon size={24} />
            預約表單
          </h2>

          {isSubmitted ? (
            <div className="success-message">
              <h3>預約成功！</h3>
              <p>我們會盡快與您聯繫確認預約詳情。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">選擇課程</label>
                <select
                  name="course"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="form-input"
                  required
                >
                  <option value="">請選擇課程</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.name}>
                      {course.name} - NT$ {course.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <User size={16} style={{ marginRight: '0.5rem' }} />
                  姓名
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Phone size={16} style={{ marginRight: '0.5rem' }} />
                  電話
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Mail size={16} style={{ marginRight: '0.5rem' }} />
                  電子郵件
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">備註</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="3"
                  placeholder="如有特殊需求請在此說明..."
                />
              </div>

              {selectedDate && selectedTime && (
                <div style={{ 
                  background: '#f3f4f6', 
                  padding: '1rem', 
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>預約摘要</h4>
                  <p><strong>日期：</strong>{format(selectedDate, 'yyyy年M月d日', { locale: zhTW })}</p>
                  <p><strong>時間：</strong>{selectedTime}</p>
                  {selectedCourse && <p><strong>課程：</strong>{selectedCourse}</p>}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={!selectedDate || !selectedTime || !selectedCourse}
              >
                確認預約
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Booking 