import { projects } from '../data/projects'
import BackLink from '../components/BackLink'

export default function ProjectDetail({ id }) {
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <section className="min-h-screen px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <BackLink />
          <p className="text-gray-500 mt-8">프로젝트를 찾을 수 없습니다.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <BackLink />

        {/* 헤더 */}
        <div className="flex items-start justify-between gap-4 mt-8 mb-2 flex-wrap">
          <div className="flex items-center gap-4">
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

          {/* 데모/코드 — 이름 옆에 바로 (없으면 표시 안 함) */}
          {(project.demoUrl || project.repoUrl) && (
            <div className="flex items-center gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.02] bg-gradient-to-r ${project.gradient} text-white`}
                >
                  데모 보기 →
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-sm border border-white/10 text-gray-300 hover:bg-white/5 transition-colors duration-200"
                >
                  코드 보기 →
                </a>
              )}
            </div>
          )}
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

          {/* 2.5. 실측 지표 (있는 프로젝트만) */}
          {project.metrics?.length > 0 && (
            <DetailSection title="실측 지표">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6">
                {project.metrics.map((m, i) => (
                  <div key={i}>
                    <p className="text-2xl font-black text-white">{m.value}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{m.label}</p>
                  </div>
                ))}
              </div>
            </DetailSection>
          )}

          {/* 3. 트러블슈팅 */}
          <DetailSection title="트러블슈팅">
            {project.troubleshooting.length > 0 ? (
              <div className="space-y-8">
                {project.troubleshooting.map((t, i) => (
                  <div key={i}>
                    <p className="text-[15px] font-semibold text-white mb-1.5">{t.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{t.body}</p>
                  </div>
                ))}
              </div>
            ) : (
              <Placeholder />
            )}
          </DetailSection>

          {/* 4. 설계 고민 (있는 프로젝트만) */}
          {project.considerations?.length > 0 && (
            <DetailSection title="설계 고민">
              <div className="space-y-8">
                {project.considerations.map((c, i) => (
                  <div key={i}>
                    <p className="text-[15px] font-semibold text-white mb-1.5">{c.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </DetailSection>
          )}

          {/* 5. 기술 스택 */}
          <DetailSection title="기술 스택">
            <div className="flex flex-wrap gap-2 mb-5">
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
            {project.stack?.length > 0 ? (
              <dl className="space-y-3">
                {project.stack.map((s) => (
                  <div key={s.name} className="flex gap-3 text-sm">
                    <dt className="flex-shrink-0 w-28 font-medium text-gray-300">{s.name}</dt>
                    <dd className="text-gray-500 leading-relaxed">{s.why}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <Placeholder />
            )}
          </DetailSection>
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
