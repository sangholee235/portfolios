import { projects } from '../data/projects'
import BackLink from '../components/BackLink'

export default function ProjectDetail({ id }) {
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <section className="min-h-screen px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <BackLink to="/projects">← 프로젝트 목록</BackLink>
          <p className="text-gray-500 mt-8">프로젝트를 찾을 수 없습니다.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <BackLink to="/projects" children="← 프로젝트 목록" />

        {/* 헤더 */}
        <div className="flex items-center gap-4 mt-8 mb-2">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${project.gradientBg} border ${project.borderColor}`}
          >
            {project.icon}
          </div>
          <div>
            <h1 className="text-3xl font-black text-white">{project.name}</h1>
            <p className="text-sm font-medium mt-0.5" style={{ color: project.color }}>
              {project.tagline}
            </p>
          </div>
        </div>

        <div className="space-y-14 mt-14">
          {/* 1. 개요 */}
          <DetailSection title="개요">
            <p className="text-gray-300 text-[15px] leading-relaxed">{project.description}</p>
          </DetailSection>

          {/* 2. 역할 / 기여 */}
          <DetailSection title="역할 / 기여">
            {project.role ? (
              <p className="text-gray-300 text-[15px] leading-relaxed">{project.role}</p>
            ) : (
              <Placeholder />
            )}
          </DetailSection>

          {/* 3. 트러블슈팅 (STAR) */}
          <DetailSection title="트러블슈팅">
            {project.troubleshooting.length > 0 ? (
              <div className="space-y-8">
                {project.troubleshooting.map((t, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <StarRow label="S" text={t.situation} color={project.color} />
                    <StarRow label="T" text={t.task} color={project.color} />
                    <StarRow label="A" text={t.action} color={project.color} />
                    <StarRow label="R" text={t.result} color={project.color} last />
                  </div>
                ))}
              </div>
            ) : (
              <Placeholder />
            )}
          </DetailSection>

          {/* 4. 기술 스택 */}
          <DetailSection title="기술 스택">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-md border font-medium"
                  style={{ borderColor: project.color + '44', color: project.color, background: project.colorLight }}
                >
                  {t}
                </span>
              ))}
            </div>
          </DetailSection>

          {/* 5. 데모 (부가 버튼 — demoUrl 없으면 아예 표시 안 함) */}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] bg-gradient-to-r ${project.gradient} text-white`}
            >
              데모 보기 →
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 ml-3 px-6 py-3 rounded-xl font-semibold text-sm border border-white/10 text-gray-300 hover:bg-white/5 transition-colors duration-200"
            >
              코드 보기 →
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

function DetailSection({ title, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{title}</p>
      {children}
    </div>
  )
}

function Placeholder() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-600">
      준비 중
    </div>
  )
}

function StarRow({ label, text, color, last }) {
  return (
    <div className={`flex gap-3 ${last ? '' : 'mb-4'}`}>
      <span
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
        style={{ color, background: color + '22' }}
      >
        {label}
      </span>
      <p className="text-sm text-gray-300 leading-relaxed pt-0.5">{text}</p>
    </div>
  )
}
