import { useApp } from '../context/AppContext'
import { labs, labOrder } from '../data/labContent'

export default function Home() {
  const { state, setPage, getLabProgress, getOverallProgress, nextLabKey } = useApp()
  const overall = getOverallProgress()
  const resumeKey = nextLabKey()
  const resumeLab = resumeKey ? labs[resumeKey] : null

  const getStatusLabel = (labKey) => {
    const lab = state.labs[labKey]
    if (lab.completed) return { text: '✓ Complete', cls: 'status-completed' }
    if (lab.step > 0 || Object.keys(lab.formData).length > 0) return { text: '● In Progress', cls: 'status-in-progress' }
    return { text: '○ Not Started', cls: 'status-not-started' }
  }

  return (
    <div>
      {/* Hero */}
      <div className="home-hero">
        <div className="gold-rule" />
        <p className="label mb-md">Jeff Anderson Math · Strategic Deep Learning</p>
        <h1>
          Conquer<br />
          <em>College.</em>
        </h1>
        <p className="home-subtitle">
          Earn any grade you want, in any class, with any teacher — while building skills
          that matter for the life you actually want to live.
        </p>

        {/* Overall progress */}
        <div style={{ maxWidth: 400 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span className="label" style={{ color: 'var(--cream3)' }}>Overall Progress</span>
            <span className="label">{overall}%</span>
          </div>
          <div className="progress-bar-track" style={{ height: '6px' }}>
            <div className="progress-bar-fill" style={{ width: `${overall}%` }} />
          </div>
        </div>
      </div>

      {/* Resume card */}
      {resumeLab && (
        <div className="resume-card">
          <div>
            <div className="resume-title">
              {state.labs[resumeKey].step > 0 ? 'Continue where you left off' : 'Ready to begin'}
            </div>
            <div className="resume-info">
              Lab {resumeLab.labNumber}: {resumeLab.title} — {resumeLab.subtitle}
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setPage(resumeKey)}
            style={{ flexShrink: 0 }}
          >
            {state.labs[resumeKey].step > 0 ? 'Continue →' : 'Start Lab 1 →'}
          </button>
        </div>
      )}

      {overall === 100 && (
        <div className="resume-card" style={{ borderColor: 'var(--sage)' }}>
          <div>
            <div className="resume-title" style={{ color: 'var(--sage)' }}>🎉 All 4 Labs Complete!</div>
            <div className="resume-info">Your Strategic Learner Blueprint is ready.</div>
          </div>
          <button className="btn btn-primary" onClick={() => setPage('final')}>
            View Blueprint →
          </button>
        </div>
      )}

      {/* Lab Cards */}
      <p className="label mb-md">The Four Labs</p>
      <div className="lab-grid">
        {labOrder.map((k) => {
          const lab = labs[k]
          const pct = getLabProgress(k)
          const status = getStatusLabel(k)
          return (
            <div
              key={k}
              className={`lab-card-home${state.labs[k].completed ? ' completed' : ''}`}
              onClick={() => setPage(k)}
              style={{ borderTop: `3px solid ${lab.color}40` }}
            >
              <div className="lab-card-num">Lab {lab.labNumber} / 4 · {pct}% complete</div>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{lab.icon}</div>
              <div className="lab-card-title">{lab.title}</div>
              <div className="lab-card-sub">{lab.subtitle}</div>
              <div className={`lab-card-status ${status.cls}`}>{status.text}</div>

              {/* Mini progress bar */}
              <div className="progress-bar-track" style={{ marginTop: '1rem', height: '2px' }}>
                <div className="progress-bar-fill" style={{ width: `${pct}%`, background: lab.color }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Phase context */}
      <div className="divider" />
      <p className="label mb-md">Where this fits</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border2)', border: '1px solid var(--border2)', marginBottom: '2rem' }}>
        {[
          { n: '01', name: 'Conquering College', desc: 'Earn any grade in any class with any teacher.', active: true },
          { n: '02', name: 'Get Paid to Learn', desc: 'Earn $10K+ through scholarships and internships.', active: false },
          { n: '03', name: 'Classroom to Career', desc: 'Reverse-engineer your degree into a life you love.', active: false },
          { n: '04', name: 'Freedom Dreaming', desc: 'Use your expertise to transform broken systems.', active: false },
        ].map((phase) => (
          <div
            key={phase.n}
            style={{
              background: phase.active ? 'var(--card2)' : 'var(--card)',
              padding: '1.5rem',
              borderLeft: phase.active ? '3px solid var(--gold)' : '3px solid transparent',
            }}
          >
            <div className="label" style={{ color: phase.active ? 'var(--gold)' : 'var(--cream3)', marginBottom: '0.4rem' }}>
              Phase {phase.n}{phase.active ? ' — Current' : ''}
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: phase.active ? 'var(--cream)' : 'var(--cream3)', marginBottom: '0.3rem' }}>
              {phase.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--cream3)' }}>{phase.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: '0.82rem', color: 'var(--cream3)', lineHeight: 1.7 }}>
        This is Phase 1 of Jeff Anderson's{' '}
        <a href="https://jeffandersonmath.wordpress.com/2024/11/30/jeff-anderson-maths-strategic-deep-learning-project/" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)' }}>
          Strategic Deep Learning project
        </a>. All content is created and owned by Jeff Anderson.
      </div>
    </div>
  )
}
