import AutoPage from './AutoPage'
import './App.css'

// 이 데모는 실제 대시보드(AutoPage)의 화면 그대로를 보여주는 게 목적이라,
// 원본 App.tsx에 있던 '조회/랭킹/로그' 등 이미 숨겨진 레거시 탭 코드는
// 애초에 옮기지 않았다(불필요한 목데이터를 늘릴 이유가 없어서).
export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="16" fill="currentColor" />
              <path d="M14 40 L26 28 L34 36 L50 20" fill="none" stroke="#fff" strokeWidth="6"
                    strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="50" cy="20" r="5" fill="#fff" />
            </svg>
          </span>
          <span className="brand-name"><b>ETF</b></span>
        </div>
        <span className="conn spacer" title="데모 — 더미데이터로 동작(실계좌 아님)">
          <span className="dot ok" />
          데모 모드
        </span>
      </header>

      <main className="single"><AutoPage /></main>
    </div>
  )
}
