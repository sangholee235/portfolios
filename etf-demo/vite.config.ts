import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 포트폴리오 사이트의 /etf-bot/ 서브패스로 배포 (gomin/techmate/cholog와 동일한 패턴).
// 백엔드 호출이 전부 mock(./api.ts)이라 dev 프록시가 필요 없다.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/etf-bot/' : '/',
}))
