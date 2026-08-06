import { Link } from '../router'

const ITEMS = [
  { to: '/resume', label: '이력서' },
  { to: '/projects', label: '프로젝트' },
  { to: '/contact', label: '연락처' },
]

/** 홈에만 뜨는 nav — 여기서만 다른 화면으로 진입한다. */
export default function Nav() {
  return (
    <nav className="flex flex-col">
      {ITEMS.map((item, i) => (
        <Link
          key={item.to}
          to={item.to}
          className="group flex items-center gap-4 py-4 border-b border-white/10 first:border-t transition-colors duration-200 hover:border-white/20"
        >
          <span className="text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors duration-200">
            0{i + 1}
          </span>
          <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-200">
            {item.label}
          </span>
          <span className="ml-auto text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
            →
          </span>
        </Link>
      ))}
    </nav>
  )
}
