import { useApp } from '../context/AppContext'
import { labs, labOrder } from '../data/labContent'

// ─── Pull a specific answer from a lab ────────────────────────────────────
function getAnswer(labState, promptId) {
  return (labState?.formData?.[promptId] || '').trim()
}

// ─── Score bar visual ─────────────────────────────────────────────────────
function ScoreBar({ score, max = 5 }) {
  const pct = score !== null ? Math.round((score / max) * 100) : 0
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <div className="score-bar-mini" style={{ width: 100 }}>
        <div className="score-bar-mini-fill" style={{ width: `${pct}%` }} />
      </div>
      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: 'var(--gold)' }}>
        {score !== null ? `${score}/${max}` : '—'}
      </span>
    </div>
  )
}

// ─── Download blueprint as .txt ────────────────────────────────────────────
function downloadBlueprint(state) {
  const l1 = state.labs.lab1
  const l2 = state.labs.lab2
  const l3 = state.labs.lab3
  const l4 = state.labs.lab4

  const lines = [
    '╔══════════════════════════════════════════════════════════╗',
    '║        STRATEGIC LEARNER BLUEPRINT                       ║',
    '║        Jeff Anderson Math — Conquering College           ║',
    '╚══════════════════════════════════════════════════════════╝',
    `Generated: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`,
    '',
    '── IDENTITY ──────────────────────────────────────────────',
    `Name & College: ${getAnswer(l1, 'studentName') || '(not filled in)'}`,
    '',
    '── MY WHY ────────────────────────────────────────────────',
    'Intrinsic Motivations (Lab 2):',
    getAnswer(l2, 'intrinsicMotivations') || '(not filled in)',
    '',
    'Personal Mission Statement (Lab 4):',
    getAnswer(l4, 'personalMission') || '(not filled in)',
    '',
    '── MY PLAN ───────────────────────────────────────────────',
    'SMART Goal this Term (Lab 1):',
    getAnswer(l1, 'smartGoal') || '(not filled in)',
    '',
    '5-Year Vision (Lab 1):',
    getAnswer(l1, 'lifeVision') || '(not filled in)',
    '',
    '5-Year Academic Plan (Lab 4):',
    getAnswer(l4, 'fiveYearPlan') || '(not filled in)',
    '',
    'Career Vision (Lab 4):',
    getAnswer(l4, 'careerVision') || '(not filled in)',
    '',
    '── HOW I LEARN ───────────────────────────────────────────',
    'My Deliberate Practice Session (Lab 2):',
    getAnswer(l2, 'dpSession') || '(not filled in)',
    '',
    'My Note Rewrite System (Lab 3):',
    getAnswer(l3, 'rewriteSystem') || '(not filled in)',
    '',
    'My Deep Learning Environment (Lab 3):',
    getAnswer(l3, 'learningEnvironment') || '(not filled in)',
    '',
    '── MY SUPPORT NETWORK ────────────────────────────────────',
    'Mentors & Professors to Connect With (Lab 4):',
    getAnswer(l4, 'mentors') || '(not filled in)',
    '',
    'Teaching Partner Plan (Lab 3):',
    getAnswer(l3, 'teachingPlan') || '(not filled in)',
    '',
    '── FUNDING STRATEGY ──────────────────────────────────────',
    'Scholarships & Internships (Lab 4):',
    getAnswer(l4, 'funding') || '(not filled in)',
    '',
    '── QUIZ SCORES ───────────────────────────────────────────',
    `Lab 1 — Schedule to Succeed:         ${l1.quizScore !== null ? `${l1.quizScore}/5` : 'Not taken'}`,
    `Lab 2 — Prepare for Deep Learning:   ${l2.quizScore !== null ? `${l2.quizScore}/5` : 'Not taken'}`,
    `Lab 3 — Build Your Note System:      ${l3.quizScore !== null ? `${l3.quizScore}/5` : 'Not taken'}`,
    `Lab 4 — Build Your Dream Binder:     ${l4.quizScore !== null ? `${l4.quizScore}/5` : 'Not taken'}`,
    '',
    '──────────────────────────────────────────────────────────',
    'Created with the Conquering College Interactive App',
    'Jeff Anderson Math · appliedlinearalgebra.com',
  ]

  const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Strategic_Learner_Blueprint.txt'
  a.click()
  URL.revokeObjectURL(url)
}

// ─── Blueprint Section ─────────────────────────────────────────────────────
function BlueprintSection({ title, items }) {
  return (
    <div className="blueprint-section">
      <div className="blueprint-section-title">{title}</div>
      {items.map(({ label, value }) => (
        <div className="summary-answer" key={label}>
          <div className="summary-answer-label">{label}</div>
          <div className="summary-answer-value">
            {value || <em style={{ color: 'var(--cream3)' }}>(not filled in — go back and complete the workbook)</em>}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Main ──────────────────────────────────────────────────────────────────
export default function FinalProject() {
  const { state, setPage, getOverallProgress } = useApp()
  const overall = getOverallProgress()
  const l1 = state.labs.lab1
  const l2 = state.labs.lab2
  const l3 = state.labs.lab3
  const l4 = state.labs.lab4

  const completedCount = labOrder.filter((k) => state.labs[k].completed).length

  // Not enough progress
  if (overall < 25) {
    return (
      <div>
        <div className="locked-overlay">
          <div className="locked-icon">🔒</div>
          <h2 style={{ marginBottom: '1rem' }}>Complete a lab first</h2>
          <p style={{ color: 'var(--cream2)', marginBottom: '2rem', maxWidth: 400, margin: '0 auto 2rem' }}>
            Your Strategic Learner Blueprint will be generated here once you've made progress
            through the labs. Start with Lab 1!
          </p>
          <button className="btn btn-primary" onClick={() => setPage('lab1')}>
            Start Lab 1 →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="gold-rule" />
      <p className="label mb-md">Final Project · Capstone Synthesis</p>
      <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '0.5rem' }}>
        Strategic Learner Blueprint
      </h1>
      <p style={{ color: 'var(--cream2)', marginBottom: '0.5rem', fontStyle: 'italic' }}>
        A living document that connects today's work to the life you're building.
      </p>

      {/* Completion status bar */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '1.25rem 1.75rem', marginTop: '2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.2rem' }}>
            {completedCount}/4 labs completed · {overall}% overall progress
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--cream3)' }}>
            {completedCount < 4 ? 'Complete remaining labs to fill in all sections below.' : '🎉 All labs complete! Your full blueprint is below.'}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => downloadBlueprint(state)}>
            ↓ Download .txt
          </button>
          <button className="btn btn-ghost btn-sm" onClick={() => window.print()}>
            🖨 Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── IDENTITY ── */}
      <BlueprintSection
        title="① Identity"
        items={[
          { label: 'Name, College & Term', value: getAnswer(l1, 'studentName') },
        ]}
      />

      {/* ── WHY ── */}
      <BlueprintSection
        title="② My Why — Intrinsic Motivations"
        items={[
          { label: 'Top Intrinsic Motivations (Lab 2)', value: getAnswer(l2, 'intrinsicMotivations') },
          { label: 'Personal Mission Statement (Lab 4)', value: getAnswer(l4, 'personalMission') },
          { label: 'Limiting Belief I Am Challenging (Lab 2)', value: getAnswer(l2, 'learningBeliefs') },
        ]}
      />

      {/* ── PLAN ── */}
      <BlueprintSection
        title="③ My Plan — Short & Long Term"
        items={[
          { label: 'SMART Goal This Term (Lab 1)', value: getAnswer(l1, 'smartGoal') },
          { label: '5–10 Year Life Vision (Lab 1)', value: getAnswer(l1, 'lifeVision') },
          { label: 'Career Vision in 5 Years (Lab 4)', value: getAnswer(l4, 'careerVision') },
          { label: '5-Year Academic Plan (Lab 4)', value: getAnswer(l4, 'fiveYearPlan') },
        ]}
      />

      {/* ── HOW I LEARN ── */}
      <BlueprintSection
        title="④ How I Learn — My Systems"
        items={[
          { label: 'My Weekly Schedule & Commitments (Lab 1)', value: getAnswer(l1, 'courses') + (getAnswer(l1, 'commitments') ? '\n\nCommitments:\n' + getAnswer(l1, 'commitments') : '') },
          { label: 'When I Have Peak Mental Energy (Lab 1)', value: getAnswer(l1, 'peakEnergy') },
          { label: 'My Deliberate Practice Session (Lab 2)', value: getAnswer(l2, 'dpSession') },
          { label: 'My Note Rewrite System (Lab 3)', value: getAnswer(l3, 'rewriteSystem') },
          { label: 'My Deep Learning Environment (Lab 3)', value: getAnswer(l3, 'learningEnvironment') },
          { label: 'My Second Brain / Capture System (Lab 4)', value: getAnswer(l4, 'captureSystem') },
        ]}
      />

      {/* ── SUPPORT NETWORK ── */}
      <BlueprintSection
        title="⑤ My Support Network"
        items={[
          { label: 'Peer Teaching Plan (Lab 3)', value: getAnswer(l3, 'teachingPlan') },
          { label: 'Professors & Mentors to Build Relationships With (Lab 4)', value: getAnswer(l4, 'mentors') },
        ]}
      />

      {/* ── FUNDING ── */}
      <BlueprintSection
        title="⑥ Funding Strategy"
        items={[
          { label: 'Scholarships, Internships & Work-Study Programs to Pursue (Lab 4)', value: getAnswer(l4, 'funding') },
        ]}
      />

      {/* ── QUIZ SCORES ── */}
      <div className="blueprint-section">
        <div className="blueprint-section-title">⑦ Self-Assessment Quiz Scores</div>
        <div className="card" style={{ padding: '1.5rem' }}>
          {labOrder.map((k) => {
            const lab = labs[k]
            const labState = state.labs[k]
            return (
              <div className="score-row" key={k}>
                <span className="score-row-name">
                  {lab.icon} Lab {lab.labNumber} — {lab.title}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <ScoreBar score={labState.quizScore} />
                  {!labState.quizSubmitted && (
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => setPage(k)}
                    >
                      Take Quiz
                    </button>
                  )}
                </div>
              </div>
            )
          })}
          {/* Total */}
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: 'var(--cream3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '1rem', color: 'var(--gold)' }}>
              {labOrder.reduce((s, k) => s + (state.labs[k].quizScore ?? 0), 0)} /{' '}
              {labOrder.filter((k) => state.labs[k].quizSubmitted).length * 5} taken
            </span>
          </div>
        </div>
      </div>

      {/* Jeff's 5 Rules reminder */}
      <div className="blueprint-section">
        <div className="blueprint-section-title">⑧ Jeff's Five Rules — My Commitments</div>
        {[
          { n: '01', rule: 'Health comes first.', detail: 'If you must choose between your class and your health — always choose your health.' },
          { n: '02', rule: 'Deep learning over shallow learning.', detail: 'Spend as much time as possible in your Sweet Spot — productive struggle, not passive review.' },
          { n: '03', rule: 'Show up. Show out. Show joy.', detail: 'Be present for yourself and your community. Give your best effort. Find genuine joy in the work.' },
          { n: '04', rule: 'Veggies before dessert.', detail: 'Finish your commitments. But dessert is mandatory too — your dreams matter.' },
          { n: '05', rule: 'Show your boss a 20/10.', detail: 'Produce 100 for yourself. Excellence in core responsibilities creates options and freedom.' },
        ].map(({ n, rule, detail }) => (
          <div key={n} style={{ display: 'flex', gap: '1.25rem', padding: '1rem 0', borderBottom: '1px solid var(--border2)' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 900, color: 'var(--gold-dim)', flexShrink: 0, lineHeight: 1, paddingTop: '0.15rem' }}>{n}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{rule}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--cream3)', lineHeight: 1.6 }}>{detail}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom actions */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border2)', flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={() => downloadBlueprint(state)}>
          ↓ Download Blueprint (.txt)
        </button>
        <button className="btn btn-ghost" onClick={() => window.print()}>
          🖨 Print / Save as PDF
        </button>
        {completedCount < 4 && (
          <button className="btn btn-ghost" onClick={() => {
            const nextIncomplete = labOrder.find((k) => !state.labs[k].completed)
            if (nextIncomplete) setPage(nextIncomplete)
          }}>
            Continue Labs →
          </button>
        )}
      </div>

      <div style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--cream3)', lineHeight: 1.7 }}>
        All content in this app is based on the work of Jeff Anderson.{' '}
        <a href="https://www.appliedlinearalgebra.com/conquering-college" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)' }}>
          appliedlinearalgebra.com
        </a>
      </div>
    </div>
  )
}
