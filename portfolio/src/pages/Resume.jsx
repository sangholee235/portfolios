/** 이력서 — 스택/경력/소개. 내용은 추후 전달받아 채움(지금은 골격만). */
export default function Resume() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black gradient-text mb-2">이력서</h1>
        <p className="text-gray-500 text-sm mb-16">내용 준비 중입니다.</p>

        <div className="space-y-16">
          <ResumeSection title="소개" />
          <ResumeSection title="기술 스택" />
          <ResumeSection title="경력 / 이력" />
        </div>
      </div>
    </section>
  )
}

function ResumeSection({ title }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">{title}</p>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-sm text-gray-600">
        준비 중
      </div>
    </div>
  )
}
