import { useEffect, useRef } from 'react'
import { Link } from '../router'

const ITEMS = [
  { to: '/resume', label: '이력서' },
  { to: '/projects', label: '프로젝트' },
  { to: '/contact', label: '연락처' },
]

export default function Hero() {
  const heroRef = useRef(null)

  // 마우스 움직임에 따라 빛 효과
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      hero.style.setProperty('--mouse-x', `${x}%`)
      hero.style.setProperty('--mouse-y', `${y}%`)
    }
    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-start justify-center px-8 md:px-20 overflow-hidden dot-grid"
      style={{
        background:
          'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 40%), #1a1a2e 0%, #070709 60%)',
      }}
    >
      {/* 배경 글로우 블롭 — 깊이감을 위해 2겹 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-[120px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full opacity-[0.08] blur-[100px] bg-gradient-to-br from-indigo-500 to-cyan-400 pointer-events-none" />

      <div className="relative z-10 text-left max-w-2xl w-full">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-8 animate-fade-in"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Portfolio
        </div>

        <h1
          className="text-5xl md:text-6xl font-black leading-tight mb-4 animate-fade-in-up gradient-text"
          style={{ animationFillMode: 'both' }}
        >
          안녕하세요. 이상호입니다.
        </h1>
        <p
          className="text-gray-500 text-base md:text-lg mb-14 animate-fade-in-up"
          style={{ animationDelay: '0.08s', animationFillMode: 'both' }}
        >
          만든 것들을 하나씩 정리해두었습니다.
        </p>

        {/* 이동 메뉴 — 가로 인라인, 점 구분자. 버튼도 리스트도 아닌 형태로. */}
        <div
          className="flex items-center gap-4 md:gap-5 animate-fade-in-up"
          style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
        >
          {ITEMS.map((item, i) => (
            <span key={item.to} className="flex items-center gap-4 md:gap-5">
              {i > 0 && <span className="text-gray-700">·</span>}
              <Link
                to={item.to}
                className="group relative text-base font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
              </Link>
            </span>
          ))}

          <span className="text-gray-700">·</span>
          <a
            href="https://github.com/sangholee235"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
