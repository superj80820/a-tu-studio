import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, Star, Filter } from 'lucide-react'

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  const courses = [
    {
      id: 1,
      name: '基礎課程',
      description: '學習基本的陶土技巧，培養藝術美感',
      price: 550,
      duration: '8週',
      maxStudents: 12,
      category: 'art',
      rating: 4.8,
      image: '/1.jpg',
      instructor: '阿土老師',
      schedule: '週二、週四 19:00-21:00'
    },
    {
      id: 2,
      name: '自己的骨灰壇製作！',
      description: '創造自己的骨灰壇，讓自己走得有尊嚴',
      price: 3200,
      duration: '10週',
      maxStudents: 15,
      category: 'art',
      rating: 4.9,
      image: '/2.jpg',
      instructor: '阿土老師',
      schedule: '週一、週三 18:30-20:30'
    },
    {
      id: 3,
      name: '陶瓷瓷器製作',
      description: '自己的碗自己做，自己的杯子自己做',
      price: 2800,
      duration: '12週',
      maxStudents: 10,
      category: 'art',
      rating: 4.7,
      image: '/3.jpg',
      instructor: '阿土老師',
      schedule: '週五 19:00-21:00'
    },
  ]

  const categories = [
    { id: 'all', name: '全部課程' },
    { id: 'art', name: '藝術創作' },
  ]

  const filteredCourses = courses
    .filter(course => selectedCategory === 'all' || course.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="section-title">課程品項</h1>
        <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
          探索我們豐富的課程內容，找到最適合您的學習選擇
        </p>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Filter size={20} />
          <h3>篩選與排序</h3>
        </div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              課程類別：
            </label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem' }}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              排序方式：
            </label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              style={{ padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem' }}
            >
              <option value="name">依名稱</option>
              <option value="price">依價格</option>
              <option value="rating">依評分</option>
            </select>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-3">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="course-content">
              <h3 className="course-title">{course.name}</h3>
              <p className="course-description">{course.description}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Star size={16} style={{ color: '#fbbf24' }} />
                <span>{course.rating}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Users size={16} />
                <span>最多 {course.maxStudents} 人</span>
              </div>
              
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>講師：</strong>{course.instructor}
              </div>
              
              <div style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <strong>上課時間：</strong><br />
                {course.schedule}
              </div>
              
              <div className="course-price">NT$ {course.price.toLocaleString()}</div>
              
              <Link to="/booking" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                立即預約
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
            沒有找到符合條件的課程
          </p>
        </div>
      )}
    </div>
  )
}

export default Courses 