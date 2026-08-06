// 빌드 배포 기준 경로 (npm run build:all 후 portfolio/dist/ 배포 시 그대로 동작)
//
// 스키마:
//   role            내 역할/기여 한 줄 (없으면 상세페이지에서 안내문 표시)
//   troubleshooting [{ situation, task, action, result }, ...] STAR 형식 (없으면 안내문 표시)
//   demoUrl         string | null — null이면 상세페이지에 데모 버튼 자체를 숨김
//   repoUrl         GitHub 링크
export const projects = [
  {
    id: 'gomin',
    name: '고민 한 접시',
    nameEn: 'Gomin',
    tagline: '당신의 고민을 한 접시에',
    description:
      '고민을 초밥처럼 올려두면 누군가 답해주는 익명 고민 공유 소셜 플랫폼. 귀여운 마스터캣 캐릭터, BGM, 사운드 이펙트로 무거운 고민도 가볍게.',
    tech: ['React', 'Redux', 'Firebase', 'Tailwind CSS', 'PWA', 'SSE'],
    features: [
      '익명 고민 공유 & 답변',
      '실시간 알림 (SSE)',
      'PWA · 푸시 알림',
      'Kakao / Google 소셜 로그인',
      'BGM & 사운드 이펙트',
    ],
    role: null,
    troubleshooting: [],
    demoUrl: '/gomin/',
    repoUrl: null,
    color: '#FF6A3B',
    colorLight: '#FF6A3B22',
    gradient: 'from-orange-500 to-red-500',
    gradientBg: 'from-orange-950/30 to-red-950/20',
    glowClass: 'card-glow-orange',
    borderColor: 'border-orange-500/30',
    icon: '🍣',
  },
  {
    id: 'techmate',
    name: 'TechMate',
    nameEn: 'TechMate',
    tagline: 'IT 동향 파악엔 테크메이트',
    description:
      '개발자를 위한 IT 뉴스 큐레이션 서비스. 기사를 읽고 메모하며 퀴즈로 복습하는 맞춤형 학습 경험을 제공합니다.',
    tech: ['React', 'Redux', 'OAuth 2.0', 'Tailwind CSS', 'MSW', 'Markdown'],
    features: [
      'IT 뉴스 큐레이션 & 추천',
      '기사 스크랩 & 폴더 관리',
      'AI 학습 퀴즈',
      'Google / Kakao OAuth',
      '스켈레톤 UI & 부드러운 UX',
    ],
    role: null,
    troubleshooting: [],
    demoUrl: '/techmate/',
    repoUrl: null,
    color: '#1A75FF',
    colorLight: '#1A75FF22',
    gradient: 'from-blue-500 to-indigo-600',
    gradientBg: 'from-blue-950/30 to-indigo-950/20',
    glowClass: 'card-glow-blue',
    borderColor: 'border-blue-500/30',
    icon: '💡',
  },
  {
    id: 'cholog',
    name: 'CHO:LOG',
    nameEn: 'CHO:LOG',
    tagline: '초보자를 위한 로그 관리',
    description:
      '개발 초보자도 쉽게 사용할 수 있는 로그 수집·분석 서비스. AI 분석, 시각화 대시보드, Jira·Mattermost 연동까지 한 번에.',
    tech: ['React', 'TypeScript', 'Redux', 'Recharts', 'MSW', 'Framer Motion'],
    features: [
      'SDK 한 줄로 로그 수집',
      'AI 로그 분석 (Claude)',
      '시각화 대시보드 & 리포트',
      'Jira 이슈 자동 생성',
      'Mattermost 웹훅 알림',
    ],
    role: null,
    troubleshooting: [],
    demoUrl: '/cholog/',
    repoUrl: null,
    color: '#5EA500',
    colorLight: '#5EA50022',
    gradient: 'from-lime-500 to-green-600',
    gradientBg: 'from-lime-950/30 to-green-950/20',
    glowClass: 'card-glow-green',
    borderColor: 'border-lime-500/30',
    icon: '🪵',
  },
  {
    id: 'etf-bot',
    name: 'ETF 자동 적립 봇',
    nameEn: 'ETF Auto-Invest Bot',
    tagline: '목표 비중대로 그리디하게 사 모으는 매수전용 봇',
    description:
      '토스증권·키움증권 Open API 기반, 여러 ETF를 목표 비중대로 그리디 리밸런싱하며 적립하는 매수전용 봇. ' +
      '매도 로직 없이 다층 안전장치를 두고 AWS Lightsail에 상시 배포해 실거래로 운영 중.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Docker', 'GitHub Actions', 'AWS Lightsail'],
    features: [
      '목표비중 그리디 리밸런싱 적립',
      '토스·키움 브로커 추상화',
      '실시간 체결통보 (WebSocket → SSE)',
      'Pull 기반 무인 CI/CD (서버 진입점 0개)',
      'DRY_RUN · 하루한도 · 킬스위치 등 다층 안전장치',
    ],
    role: '기획·설계·백엔드/프론트엔드 구현·배포 전체를 단독으로 담당.',
    troubleshooting: [
      // TODO: STAR 형식 사례 추가 예정 (SKIP 로그 오표시, RuntimeError 미처리, CI skip으로 배포 안 됨 등)
    ],
    // TODO: 실계좌 노출 없는 더미데이터 데모 빌드 준비 중 — 완성 전까지 null
    demoUrl: null,
    repoUrl: null,
    color: '#F5A623',
    colorLight: '#F5A62322',
    gradient: 'from-amber-500 to-yellow-600',
    gradientBg: 'from-amber-950/30 to-yellow-950/20',
    glowClass: 'card-glow-amber',
    borderColor: 'border-amber-500/30',
    icon: '📈',
  },
]
