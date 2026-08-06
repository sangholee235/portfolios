import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import BackLink from '../components/BackLink'

export default function Projects() {
  const sectionRef = useRef(null)

  // 등장 애니메이션 (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <BackLink />

        <div className="text-center mt-8 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-black gradient-text mb-6">
            진행한 프로젝트
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto text-base leading-relaxed">
            카드를 누르면 각 프로젝트의 역할·트러블슈팅을 볼 수 있습니다.
          </p>
        </div>

        {/* 카드 몇 개든 자동으로 줄바꿈되는 반응형 그리드 — 추가돼도 구조 안 깨짐 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
