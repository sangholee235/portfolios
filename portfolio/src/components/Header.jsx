import { Link, useRouter, segments } from '../router'

const ITEMS = [
  { to: '/resume', label: '이력서' },
  { to: '/projects', label: '프로젝트' },
  { to: '/contact', label: '연락처' },
]

/** 모든 화면에 항상 떠있는 헤더 — 어디서든 홈/다른 화면으로 이동 가능. */
export default function Header() {
  const { path } = useRouter()
  const top = segments(path)[0]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070709]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="text-sm font-bold text-white hover:text-gray-300 transition-colors">
          이상호
        </Link>

        <nav className="flex items-center gap-7">
          {ITEMS.map((item) => {
            const active = top === item.to.slice(1)
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group relative text-sm font-medium py-1 transition-colors duration-200 ${
                  active ? 'text-white' : 'text-gray-500 hover:text-gray-200'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-white transition-all duration-200 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}

          <a
            href="https://github.com/sangholee235"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
