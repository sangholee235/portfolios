import { skillGroups } from '../data/skills'

const timeline = [
  { period: '2026.02 – 현재', title: 'MES 개발자', org: '재직 중' },
  { period: '2024.07 – 2025.06', title: '삼성 청년 SW·AI 아카데미(SSAFY) 수료', org: 'Java 전공트랙 · 1,620시간' },
  { period: '2018.03 – 2024.02', title: '소프트웨어학과 졸업', org: null },
]

/** 이력서 — 스택/경력/소개. 소개는 추후 전달받아 채움(지금은 골격만). */
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
            <div className="space-y-6">
              {timeline.map((t) => (
                <div key={t.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <p className="text-xs font-mono text-gray-500 sm:w-36 sm:flex-shrink-0">{t.period}</p>
                  <div>
                    <p className="text-[15px] font-medium text-white">{t.title}</p>
                    {t.org && <p className="text-sm text-gray-500 mt-0.5">{t.org}</p>}
                  </div>
                </div>
              ))}
            </div>
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
