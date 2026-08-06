import { Link } from '../router'

/** 모든 화면에 항상 떠있는 헤더 — 홈으로 돌아가는 버튼 하나만 있다. */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070709]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center">
        <Link
          to="/"
          aria-label="홈으로"
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V10" />
          </svg>
        </Link>
      </div>
    </header>
  )
}
