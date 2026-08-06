import { useEffect, useRef } from 'react'
import Nav from './Nav'

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

      {/* 배경 워터마크 — 카드의 인덱스 넘버(text-white/5)와 같은 시각 언어 */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[26rem] font-black text-white/[0.03] select-none leading-none pointer-events-none hidden lg:block">
        SH
      </div>

      {/* 메인 콘텐츠 — 직함·스택 나열 없이 담백한 인삿말 + nav (좌측 시작) */}
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

        <div className="animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
          <Nav />
        </div>
      </div>
    </section>
  )
}
