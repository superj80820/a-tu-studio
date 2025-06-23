import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Calendar, Users, Star, Instagram, Facebook, MapPin } from 'lucide-react'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>阿土工作室</h1>
          <p>要學陶，買茶請找我<br/>講信用，品質100分。</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link to="/courses" className="btn btn-primary">
              瀏覽課程
            </Link>
            <Link to="/booking" className="btn btn-secondary">
              立即預約
            </Link>
          </div>
          
          {/* 社群媒體連結 */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <a 
              href="https://www.instagram.com/pottery0703" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.facebook.com/chen.ruo.yu.722185" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.pinkoi.com/store/tutubaby" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="Pinkoi"
            >
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>P</span>
            </a>
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
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 className="section-title">有哪些課程</h2>
          <div className="grid grid-cols-3">
            <div className="course-card">
              <div className="course-image">
                <img src="/1.jpg" alt="陶藝課" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="course-content">
                <h3 className="course-title">陶藝課</h3>
                <p className="course-description">自由創作手捏與手拉，依照當天土料給予</p>
                <div className="course-price">NT$ 550</div>
                <Link to="/courses" className="btn btn-primary">
                  了解更多
                </Link>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">
                <img src="/5.jpg" alt="茶席體驗" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="course-content">
                <h3 className="course-title">茶席體驗</h3>
                <p className="course-description">提供當天茶品，可選熱或冰</p>
                <div className="course-price">NT$ 780</div>
                <Link to="/courses" className="btn btn-primary">
                  了解更多
                </Link>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">
                <img src="/4.jpg" alt="畫畫課" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="course-content">
                <h3 className="course-title">畫畫課</h3>
                <p className="course-description">自由隨意塗鴉，老師提供材料</p>
                <div className="course-price">NT$ 500</div>
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

      {/* Location Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">工作室位置</h2>
          <div className="location-container">
            <div className="location-info">
              <div className="location-header">
                <MapPin className="location-icon" size={32} />
                <h3>阿土工作室</h3>
              </div>
              <div className="location-details">
                <p><strong>地址：</strong>台中市清水區光復街92號</p>
                <p><strong>營業時間：</strong>24小時營業</p>
                <p><strong>電話：</strong>0908928633</p>
                <p><strong>交通方式：</strong></p>
                <ul>
                  <li>開車：附近有<a href="https://g.co/kgs/UCvUxnH" target="_blank" rel="noopener noreferrer">牛罵頭收費停車場</a></li>
                </ul>
              </div>
              <div className="location-actions">
                <a 
                  href="https://maps.google.com/?q=台中市清水區光復街92號" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  在 Google Maps 中查看
                </a>
                <a 
                  href="tel:0223456789" 
                  className="btn btn-secondary"
                >
                  撥打電話
                </a>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.1587529197104!2d120.57543100000001!3d24.271185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346915d329c4a771%3A0x429c50c823ca71b9!2z6Zi_5Zyf5bel5L2c5a6k!5e0!3m2!1szh-TW!2stw!4v1750683571358!5m2!1szh-TW!2stw"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="阿土工作室位置"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section">
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
      </section> */}
    </div>
  )
}

export default Home 