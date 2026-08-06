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
      'AI 로그 분석',
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
    role:
      '기획·설계부터 백엔드(FastAPI)·프론트엔드(React)·인프라(Docker·CI/CD·AWS)까지 전체를 단독으로 ' +
      '설계·구현·운영. 소액이지만 실제 돈으로 LIVE 운영하면서 발생한 버그를 그때그때 직접 추적·수정.',
    troubleshooting: [
      {
        situation: '스케줄러가 10분마다 정상적으로 돌고 있는데도, 키움 계좌는 며칠째 한 번도 매수가 되지 않음.',
        task: '진단용 필드(lastFiredAt)를 보니 키움 쪽만 계속 비어있었음 — 원인을 찾아야 했음.',
        action: '스케줄러의 틱 처리가 통째로 하나의 try/except로 묶여 있어서, 토스 브로커 처리 중 예외가 나면 같은 틱에서 키움은 시도조차 안 되고 넘어가는 구조적 결함을 발견. 브로커별로 개별 try/except를 둬서 서로 격리하고, 실패 사유를 lastError로 노출해 다음에도 바로 진단할 수 있게 함.',
        result: '배포 후 lastFiredAt.kiwoom이 정상적으로 채워지는 걸 실시간으로 확인. 이후로는 한 브로커의 장애가 다른 브로커로 전파되지 않음.',
      },
      {
        situation: '대시보드에서 계좌조회가 에러 메시지도 없이 그냥 "-"만 뜨는 증상.',
        task: '에러 자체가 안 보이니, 먼저 원인이 드러나게 만들어야 했음.',
        action: '키움 브로커는 실패 시 TossApiError가 아니라 RuntimeError를 던지는데, 조회 라우터(account/market/orders) 전체가 TossApiError만 catch하고 있어 처리 안 된 500이 나고 프론트가 그걸 조용히 삼키고 있었던 걸 확인. 공통 에러 변환 헬퍼를 추가해 라우터 전체에 RuntimeError 처리를 확장.',
        result: '브로커 실패 시 최소한 원인이 에러 메시지로 드러나게 됐고, 같은 종류의 버그(주문 실행기에서 한 번 겪었던 것)가 코드베이스 여러 곳에 반복돼 있었다는 것도 이번에 확인해 한 번에 정리.',
      },
      {
        situation: '실거래 중 "포트폴리오에 없는 종목을 왜 사려 하냐", "명백히 부족한 종목인데 왜 목표비중 도달이라 뜨냐"는 지적이 이어짐.',
        task: '실제 매수 로직 버그인지, 그냥 표시 로직 버그인지부터 구분해야 했음.',
        action: '추적 결과 실제 주문 로직엔 문제가 없었고, SKIP 사유를 판정·표시하는 로직의 정밀도 부족이 원인이었음 — 레거시 기본값으로 잘못 폴백되는 필드, 시세조회 실패를 균형 상태로 오인, 예산부족을 균형 상태로 오인, 이렇게 세 가지를 각각 원인 추적 후 수정하고 회귀 테스트를 추가.',
        result: 'SKIP 사유 문구가 실제 원인과 정확히 매칭되게 됨. 이 과정에서 만든 보조 판정 함수 하나도 첫 구현이 잘못됐다는 걸 직접 테스트로 바로 발견해 재작성 — 검증을 코드 작성과 분리하지 않는 계기가 됨.',
      },
      {
        situation: '새 기능을 배포했다고 판단했는데, 몇 시간이 지나도 실제 서버엔 반영이 안 됨.',
        task: '왜 반영이 안 됐는지 서버까지 직접 들어가서 확인해야 했음.',
        action: 'SSH로 서버에 접속해 Watchtower 로그와 이미지 생성 시각을 대조, 새 이미지가 애초에 안 올라온 걸 확인. GitHub Actions API로 CI 상태를 조회해 테스트 단계가 실패해서 배포 단계 자체가 건너뛰어진 걸 특정. 로컬에서 CI가 실제로 쓰는 빌드 명령으로 그대로 재현해 원인(레거시 컴포넌트가 새로 필수로 바뀐 값 없이 호출됨)을 잡아 수정.',
        result: '로컬에서 통과한 타입체크와 CI가 쓰는 빌드 명령의 검사 범위가 다를 수 있다는 걸 실증. 수정 후 재배포까지 서버에서 직접 확인.',
      },
    ],
    // 실계좌 대신 더미데이터로 돌아가는 별도 빌드(etf-demo/) — 실제 대시보드 UI 그대로,
    // 백엔드 호출만 mock으로 교체(다른 프로젝트들의 MSW와 같은 역할).
    demoUrl: '/etf-bot/',
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
