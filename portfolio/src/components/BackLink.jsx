import { Link } from '../router'

/** nav는 홈에만 있으므로, 다른 화면에는 이걸로 돌아갈 길만 열어둔다. */
export default function BackLink({ to = '/', children = '← 홈' }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors"
    >
      {children}
    </Link>
  )
}
