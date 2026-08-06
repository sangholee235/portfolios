import { skillGroups } from '../data/skills'

/** 이력서 — 스택/경력/소개. 소개·경력은 추후 전달받아 채움(지금은 골격만). */
export default function Resume() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black gradient-text mb-2">이력서</h1>
        <p className="text-gray-500 text-sm mb-16">MES 개발자 · 2026년 2월부터 재직 중</p>

        <div className="space-y-16">
          <ResumeSection title="소개">
            <Placeholder />
          </ResumeSection>

          <ResumeSection title="기술 스택">
            <div className="space-y-8">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-medium text-gray-500 mb-3">{group.title}</p>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map(({ name, icon: Icon, color }) => (
                      <div
                        key={name}
                        className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-gray-300"
                      >
                        <Icon size={16} style={{ color }} />
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="경력 / 이력">
            <Placeholder />
          </ResumeSection>
        </div>
      </div>
    </section>
  )
}

function ResumeSection({ title, children }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">{title}</p>
      {children}
    </div>
  )
}

function Placeholder() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-sm text-gray-600">
      준비 중
    </div>
  )
}
