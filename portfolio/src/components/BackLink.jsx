import { Link } from '../router'

/** 목록 화면으로 돌아가는 브레드크럼 링크 (홈으로는 이제 상단 헤더가 항상 열려있음). */
export default function BackLink({ to = '/projects', children = '프로젝트 목록' }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
           strokeLinecap="round" strokeLinejoin="round"
           className="transition-transform duration-200 group-hover:-translate-x-0.5">
        <path d="M15 18l-6-6 6-6" />
      </svg>
      {children}
    </Link>
  )
}
