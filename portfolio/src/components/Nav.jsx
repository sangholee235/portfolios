import { Link } from '../router'

const ITEMS = [
  { to: '/resume', label: '이력서' },
  { to: '/projects', label: '프로젝트' },
  { to: '/contact', label: '연락처' },
]

/** 홈에만 뜨는 nav — 여기서만 다른 화면으로 진입한다. */
export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-start gap-3">
      {ITEMS.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-gray-200 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
