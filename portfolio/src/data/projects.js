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
        title: '스케줄러가 브로커 하나 실패하면 나머지도 스킵됨',
        body:
          '10분마다 정상적으로 도는데도 키움 계좌만 며칠째 매수가 안 됐다. 알고 보니 틱 처리 전체가 ' +
          '하나의 try/except로 묶여 있어서, 토스 브로커 처리 중 예외가 나면 같은 틱에서 키움은 시도조차 ' +
          '안 되고 넘어가는 구조였다. 브로커별로 개별 try/except를 둬서 서로 격리하고, 실패 사유를 ' +
          '따로 남겨 다음에도 바로 원인을 볼 수 있게 했다.',
      },
      {
        title: '에러 메시지 없이 그냥 "-"만 뜨던 계좌조회',
        body:
          '키움 쪽은 실패할 때 다른 예외 타입(RuntimeError)을 던지는데, 조회 라우터들이 토스 전용 ' +
          '예외만 잡고 있어서 처리되지 않은 500이 났고 프론트는 그걸 조용히 무시하고 있었다. 공통 ' +
          '에러 처리를 추가해 라우터 전체에 적용했더니, 같은 종류의 실수가 코드베이스 여러 곳에 ' +
          '반복돼 있었던 것도 같이 확인됐다.',
      },
      {
        title: '매수를 건너뛴 이유가 실제와 다르게 표시됨',
        body:
          '"포트폴리오에 없는 종목을 왜 사려 하냐", "명백히 부족한데 왜 목표비중 도달이라 뜨냐"는 ' +
          '지적이 이어졌다. 실제 매수 판단 로직엔 문제가 없었고, 매수를 건너뛴 이유를 화면에 ' +
          '표시하는 로직의 정밀도가 부족한 게 원인이었다. 레거시 값으로 잘못 표시되던 필드, 시세조회 ' +
          '실패를 목표 달성으로 오인하던 판정, 예산부족을 목표 달성으로 오인하던 판정 — 세 가지를 ' +
          '각각 찾아 고치고 회귀 테스트를 추가했다.',
      },
      {
        title: '배포했다고 생각했는데 실제로는 반영 안 됨',
        body:
          '새 기능을 배포했다고 판단했는데 몇 시간이 지나도 서버엔 반영되지 않았다. 서버에 직접 ' +
          '접속해 배포 로그와 이미지 생성 시각을 대조해보니 새 이미지가 애초에 올라온 적이 없었고, ' +
          'CI 로그를 보니 테스트 단계가 실패해서 배포 단계 자체가 건너뛰어졌다는 걸 알았다. ' +
          '로컬에서 CI가 실제로 쓰는 빌드 명령으로 재현해서 원인을 잡아 고쳤다.',
      },
    ],
    stack: [
      { name: 'Python', why: '증권사 API 클라이언트·매수 로직을 빠르게 작성하기 좋고, 데이터 처리 관련 생태계가 풍부해서 백엔드 언어로 선택.' },
      { name: 'FastAPI', why: '풀프레임워크는 이 정도 규모엔 과했고, 가볍게 REST 엔드포인트만 필요해서 선택. 자동 문서화도 덤.' },
      { name: 'React + TypeScript', why: '자주 갱신되는 대시보드를 컴포넌트 단위로 관리하고, API 응답 구조를 타입으로 고정해 실수를 미리 잡기 위해.' },
      { name: 'Docker', why: '로컬과 서버 환경 차이 없이 그대로 옮기기 위해. 백엔드/프론트를 각각 컨테이너 하나로 통째로 이식.' },
      { name: 'GitHub Actions + Watchtower', why: '서버에 배포용 자격증명을 아예 두지 않는 pull 기반 무인 배포를 만들기 위해 이 조합을 선택.' },
      { name: 'AWS Lightsail', why: '이 규모엔 EC2가 과했음. 고정 요금 + 간단한 관리로 충분해서 선택.' },
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
