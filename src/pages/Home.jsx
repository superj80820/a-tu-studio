import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Calendar, Users, Star } from 'lucide-react'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>阿土工作室</h1>
          <p>要學陶，買茶請找我<br/>講信用，品質100分。</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/courses" className="btn btn-primary">
              瀏覽課程
            </Link>
            <Link to="/booking" className="btn btn-secondary">
              立即預約
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">阿土工作室是？</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen size={32} />
              </div>
              <h3>自由彈性風格</h3>
              <p>提供多樣化的課程選擇，從基礎到進階，滿足不同學習需求</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>優質體驗</h3>
              <p>舒適的學習環境，讓您享受最佳的學習體驗</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 className="section-title">熱門課程</h2>
          <div className="grid grid-cols-3">
            <div className="course-card">
              <div className="course-image">
                <img src="/1.jpg" alt="基礎課程" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="course-content">
                <h3 className="course-title">基礎課程</h3>
                <p className="course-description">學習基本的陶土技巧，培養藝術美感</p>
                <div className="course-price">NT$ 550</div>
                <Link to="/courses" className="btn btn-primary">
                  了解更多
                </Link>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">
                <img src="/2.jpg" alt="自己的骨灰壇製作！" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="course-content">
                <h3 className="course-title">自己的骨灰壇製作！</h3>
                <p className="course-description">創造自己的骨灰壇，讓自己走得有尊嚴</p>
                <div className="course-price">NT$ 3,200</div>
                <Link to="/courses" className="btn btn-primary">
                  了解更多
                </Link>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">
                <img src="/3.jpg" alt="陶瓷瓷器製作" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="course-content">
                <h3 className="course-title">陶瓷瓷器製作</h3>
                <p className="course-description">自己的碗自己做，自己的杯子自己做</p>
                <div className="course-price">NT$ 2,800</div>
                <Link to="/courses" className="btn btn-primary">
                  了解更多
                </Link>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/courses" className="btn btn-primary">
              查看所有課程
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>你的靈魂在哪？</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#6b7280' }}>
              立即預約課程，去探索自己
            </p>
            <Link to="/booking" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
              立即預約
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 