import { createContext, useContext, useEffect, useState } from 'react'

// 라이브러리 없는 초경량 hash 라우터.
// "/gomin/*" 같은 실제 서브패스는 Vercel rewrite가 처리하므로 안 건드림 —
// 여기선 오직 "#/resume", "#/projects/:id" 같은 포트폴리오 내부 화면 전환만 다룬다.
const RouterContext = createContext({ path: '/', navigate: () => {} })

function currentPath() {
  const hash = window.location.hash.slice(1) // '#/projects/gomin' -> '/projects/gomin'
  return hash || '/'
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(currentPath())

  useEffect(() => {
    const onHashChange = () => setPath(currentPath())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = (to) => {
    window.location.hash = to === '/' ? '' : `#${to}`
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
}

export function useRouter() {
  return useContext(RouterContext)
}

/** 경로를 세그먼트로 분해. '/projects/gomin' -> ['projects', 'gomin'] */
export function segments(path) {
  return path.split('/').filter(Boolean)
}

/** nav용 링크 — 실제 <a>는 아니지만 클릭·중간클릭·접근성 대응. */
export function Link({ to, className, children, ...rest }) {
  const { navigate } = useRouter()
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
