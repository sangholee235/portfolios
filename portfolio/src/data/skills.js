import { SiDocker, SiDotnet, SiFastapi, SiGit, SiGithubactions, SiMqtt, SiMysql, SiPython, SiReact, SiSpring, SiTypescript } from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa6'
import { TbBrandCSharp, TbCpu, TbDatabase, TbPlugConnected } from 'react-icons/tb'

// MES 개발자 기준 대략적인 스택 초안 — 실제와 다른 항목은 나중에 정리.
// icon 없는 항목(브랜드 로고가 없는 DB·산업프로토콜)은 tabler의 범용 아이콘으로 대체.
export const skillGroups = [
  {
    title: '언어',
    items: [
      { name: 'C#', icon: TbBrandCSharp, color: '#9B4F96' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    title: '프레임워크/런타임',
    items: [
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      { name: 'Spring', icon: SiSpring, color: '#6DB33F' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    title: '데이터베이스',
    items: [
      { name: 'MSSQL', icon: TbDatabase, color: '#CC2927' },
      { name: 'Oracle', icon: TbDatabase, color: '#F80000' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: '인프라/툴',
    items: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
    ],
  },
  {
    title: '제조/MES 특화',
    items: [
      { name: 'OPC-UA', icon: TbPlugConnected, color: '#5EA500' },
      { name: 'MQTT', icon: SiMqtt, color: '#660066' },
      { name: 'PLC 통신 (Modbus)', icon: TbCpu, color: '#F5A623' },
    ],
  },
]
