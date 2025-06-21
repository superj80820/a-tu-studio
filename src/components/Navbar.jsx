import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Calendar, BookOpen, Home, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: '首頁', icon: <Home size={20} /> },
  { to: '/courses', label: '課程品項', icon: <BookOpen size={20} /> },
  { to: '/booking', label: '預約日曆', icon: <Calendar size={20} /> },
]

const Navbar = () => {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isPWA, setIsPWA] = useState(false)

  // 檢測是否為 PWA 模式
  useEffect(() => {
    const checkPWA = () => {
      // 檢查是否為 PWA 模式（獨立窗口）
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      // 檢查是否為移動設備
      const isMobile = window.innerWidth <= 768
      // 檢查是否為 iOS Safari 的 PWA 模式
      const isIOSPWA = window.navigator.standalone === true
      
      setIsPWA(isStandalone || isIOSPWA || isMobile)
    }

    checkPWA()
    window.addEventListener('resize', checkPWA)
    
    return () => window.removeEventListener('resize', checkPWA)
  }, [])

  const isActive = (path) => location.pathname === path

  // 關閉 Drawer
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'relative',
      zIndex: 50
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#000000',
            textDecoration: 'none'
          }}>
            阿土工作室
          </Link>

          {/* 桌面版選單 - 在非 PWA 模式下顯示 */}
          {!isPWA && (
            <div className="navbar-links-desktop">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: isActive(link.to) ? '#F97316' : '#6b7280',
                    fontWeight: isActive(link.to) ? '600' : '400',
                    marginLeft: '2rem',
                    transition: 'color 0.2s'
                  }}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* 行動版漢堡選單按鈕 - 只在 PWA 模式下顯示 */}
          {isPWA && (
            <button
              className="navbar-burger"
              aria-label="開啟選單"
              onClick={() => setDrawerOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                marginLeft: '1rem'
              }}
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </div>

      {/* 側邊 Drawer 遮罩 - 只在 PWA 模式下顯示 */}
      {isPWA && drawerOpen && (
        <div
          className="navbar-drawer-backdrop"
          onClick={closeDrawer}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 49
          }}
        />
      )}

      {/* 側邊 Drawer - 只在 PWA 模式下顯示 */}
      {isPWA && (
        <div
          className="navbar-drawer"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: 260,
            background: 'white',
            boxShadow: '2px 0 8px rgba(0,0,0,0.08)',
            transform: drawerOpen ? 'translateX(0)' : 'translateX(-110%)',
            transition: 'transform 0.25s cubic-bezier(.4,0,.2,1)',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem 1.5rem 1.5rem',
            minWidth: 0
          }}
        >
          <button
            aria-label="關閉選單"
            onClick={closeDrawer}
            style={{
              background: 'none',
              border: 'none',
              alignSelf: 'flex-end',
              marginBottom: '2rem',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <X size={28} />
          </button>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeDrawer}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: isActive(link.to) ? '#F97316' : '#374151',
                fontWeight: isActive(link.to) ? '600' : '400',
                fontSize: '1.15rem',
                marginBottom: '1.5rem',
                padding: '0.5rem 0',
                borderRadius: '0.5rem',
                background: isActive(link.to) ? '#fed7aa' : 'transparent',
                transition: 'background 0.2s'
              }}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar 