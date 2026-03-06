import { useState, useCallback } from 'react'
import { useApp } from '../context/AppContext'
import { labOrder } from '../data/labContent'

const STEP_NAMES = ['Introduction', 'Workbook', 'Quiz', 'Complete']
const letters = ['A', 'B', 'C', 'D']

// ─── Helper: download text file ─────────────────────────────────────────────
function downloadAnswers(labData, labConfig) {
  const lines = [
    `CONQUERING COLLEGE — LAB ${labConfig.labNumber}: ${labConfig.title.toUpperCase()}`,
    `Downloaded: ${new Date().toLocaleDateString()}`,
    '═'.repeat(60),
    '',
    '── WORKBOOK ANSWERS ──────────────────────────────────────',
    '',
  ]
  labConfig.workbookPrompts.forEach((p) => {
    lines.push(`▸ ${p.label}`)
    lines.push(labData.formData[p.id] || '(not answered)')
    lines.push('')
  })
  lines.push('── QUIZ RESULTS ──────────────────────────────────────────')
  lines.push(`Score: ${labData.quizScore ?? '?'} / ${labConfig.quizQuestions.length}`)
  lines.push('')
  labConfig.quizQuestions.forEach((q, i) => {
    const chosen = labData.quizAnswers[q.id]
    const correct = chosen === q.answer
    lines.push(`Q${i + 1}: ${q.text}`)
    lines.push(`Your answer: ${chosen !== undefined ? q.options[chosen] : '(skipped)'}`)
    lines.push(`Correct: ${q.options[q.answer]}`)
    lines.push(`Result: ${correct ? '✓ Correct' : '✗ Incorrect'}`)
    lines.push('')
  })

  const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `Lab${labConfig.labNumber}_${labConfig.title.replace(/\s+/g, '_')}_Answers.txt`
  a.click()
  URL.revokeObjectURL(url)
}

// ─── Step 0: Intro ──────────────────────────────────────────────────────────
function StepIntro({ lab, onNext }) {
  return (
    <div>
      <div className="gold-rule" />
      <p className="label mb-md">Lab {lab.labNumber} of 4</p>
      <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.5rem' }}>
        {lab.title}
      </h1>
      <p style={{ fontSize: '1rem', color: 'var(--gold)', marginBottom: '2rem', fontStyle: 'italic' }}>
        {lab.subtitle}
      </p>

      <div className="divider" />

      <p className="label mb-md">What you'll accomplish</p>
      <ul className="objectives-list">
        {lab.objectives.map((o, i) => <li key={i}>{o}</li>)}
      </ul>

      <div className="divider" />

      <p className="intro-prose">{lab.intro}</p>

      {/* Video + PDF links */}
      <div className="video-block">
        <span className="video-icon">▶</span>
        <div>
          <div className="video-title">{lab.videoTitle}</div>
          <div className="video-desc">
            Watch this before completing the workbook. Open in a new tab, then return here.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href={lab.videoUrl} target="_blank" rel="noreferrer" className="video-link">
              Watch Playlist ↗
            </a>
            <a href={lab.pdfUrl} target="_blank" rel="noreferrer" className="video-link">
              Open PDF ↗
            </a>
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.84rem', color: 'var(--cream3)', marginBottom: '2rem', fontStyle: 'italic' }}>
        {lab.readingNote}
      </p>

      <div className="step-nav" style={{ borderTop: 'none', marginTop: '1rem', paddingTop: '0' }}>
        <span />
        <button className="btn btn-primary" onClick={onNext}>
          Start Workbook →
        </button>
      </div>
    </div>
  )
}

// ─── Step 1: Workbook ───────────────────────────────────────────────────────
function StepWorkbook({ lab, labState, onUpdate, onNext, onBack }) {
  const filledCount = lab.workbookPrompts.filter(
    (p) => (labState.formData[p.id] || '').trim().length > 0
  ).length

  return (
    <div>
      <div className="step-header">
        <div className="step-breadcrumb">
          <span className="step-crumb">Lab {lab.labNumber}</span>
          <span className="step-crumb-sep">›</span>
          <span className="step-crumb current">Workbook</span>
        </div>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Your Workbook</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--cream3)' }}>
          Answer each prompt thoughtfully in your own words. Your responses save automatically.
          &nbsp;({filledCount}/{lab.workbookPrompts.length} answered)
        </p>
      </div>

      {lab.workbookPrompts.map((prompt, i) => (
        <div className="workbook-section" key={prompt.id}>
          <div className="prompt-number">Prompt {i + 1} of {lab.workbookPrompts.length}</div>
          <div className="prompt-label">{prompt.label}</div>
          {prompt.type === 'text' ? (
            <input
              type="text"
              value={labState.formData[prompt.id] || ''}
              placeholder={prompt.placeholder}
              onChange={(e) => onUpdate(prompt.id, e.target.value)}
            />
          ) : (
            <textarea
              value={labState.formData[prompt.id] || ''}
              placeholder={prompt.placeholder}
              rows={5}
              onChange={(e) => onUpdate(prompt.id, e.target.value)}
            />
          )}
        </div>
      ))}

      <div className="step-nav">
        <button className="btn btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn btn-primary" onClick={onNext}>
          Continue to Quiz →
        </button>
      </div>
    </div>
  )
}

// ─── Step 2: Quiz ───────────────────────────────────────────────────────────
function StepQuiz({ lab, labState, onSubmit, onNext, onBack }) {
  const [localAnswers, setLocalAnswers] = useState(labState.quizAnswers || {})
  const submitted = labState.quizSubmitted

  const handleSelect = (qId, idx) => {
    if (submitted) return
    setLocalAnswers((prev) => ({ ...prev, [qId]: idx }))
  }

  const handleSubmit = () => {
    const score = lab.quizQuestions.reduce((acc, q) => {
      return acc + (localAnswers[q.id] === q.answer ? 1 : 0)
    }, 0)
    onSubmit(localAnswers, score)
  }

  const allAnswered = lab.quizQuestions.every((q) => localAnswers[q.id] !== undefined)
  const score = labState.quizScore

  return (
    <div>
      <div className="step-header">
        <div className="step-breadcrumb">
          <span className="step-crumb">Lab {lab.labNumber}</span>
          <span className="step-crumb-sep">›</span>
          <span className="step-crumb current">Self-Assessment Quiz</span>
        </div>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Quiz — {lab.title}</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--cream3)' }}>
          5 questions · Choose the best answer · Your score will be saved
        </p>
      </div>

      {submitted && score !== null && (
        <div className="score-banner">
          <div className="score-big">{score}/5</div>
          <div>
            <div className="score-label" style={{ fontSize: '1rem', fontWeight: 600 }}>
              {score === 5 ? '🎉 Perfect Score!' : score >= 4 ? '✅ Great Work' : score >= 3 ? '👍 Good Effort' : '📚 Keep Reviewing'}
            </div>
            <div className="score-sublabel">
              {score === 5
                ? 'You\'ve mastered this lab\'s concepts.'
                : 'Review the explanations below to deepen your understanding.'}
            </div>
          </div>
        </div>
      )}

      {lab.quizQuestions.map((q, qi) => {
        const chosen = submitted ? labState.quizAnswers[q.id] : localAnswers[q.id]
        return (
          <div className="quiz-question" key={q.id}>
            <div className="question-num">Question {qi + 1} of {lab.quizQuestions.length}</div>
            <div className="question-text">{q.text}</div>
            <div className="option-list">
              {q.options.map((opt, oi) => {
                let cls = 'option-btn'
                if (submitted) {
                  if (oi === q.answer) cls += ' correct'
                  else if (oi === chosen && oi !== q.answer) cls += ' wrong'
                } else {
                  if (oi === chosen) cls += ' selected'
                }
                return (
                  <button
                    key={oi}
                    className={cls}
                    onClick={() => handleSelect(q.id, oi)}
                    disabled={submitted}
                  >
                    <span className="option-letter">{letters[oi]}.</span>
                    <span>{opt}</span>
                  </button>
                )
              })}
            </div>
            {submitted && (
              <div className="quiz-explanation">
                <strong style={{ color: 'var(--gold)' }}>Explanation:</strong> {q.explanation}
              </div>
            )}
          </div>
        )
      })}

      <div className="step-nav">
        <button className="btn btn-ghost" onClick={onBack} disabled={submitted}>← Back</button>
        {!submitted ? (
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={!allAnswered}
          >
            Submit Quiz →
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onNext}>
            See Summary →
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Step 3: Summary / Done ─────────────────────────────────────────────────
function StepDone({ lab, labState, onDownload, onNextLab, nextLabKey }) {
  return (
    <div>
      <div className="step-header">
        <div className="step-breadcrumb">
          <span className="step-crumb">Lab {lab.labNumber}</span>
          <span className="step-crumb-sep">›</span>
          <span className="step-crumb current" style={{ color: 'var(--sage)' }}>Complete ✓</span>
        </div>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
          Lab {lab.labNumber} Complete
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--cream3)' }}>
          Here's a summary of everything you built in this lab.
        </p>
      </div>

      {labState.quizScore !== null && (
        <div className="score-banner" style={{ marginBottom: '2rem' }}>
          <div className="score-big">{labState.quizScore}/5</div>
          <div>
            <div className="score-label">Quiz Score — {lab.title}</div>
            <div className="score-sublabel">{labState.quizScore === 5 ? 'Perfect!' : `${lab.quizQuestions.length - labState.quizScore} to review`}</div>
          </div>
        </div>
      )}

      <p className="label mb-md">Your Workbook Answers</p>
      {lab.workbookPrompts.map((p) => (
        <div className="summary-answer" key={p.id}>
          <div className="summary-answer-label">{p.label.slice(0, 60)}{p.label.length > 60 ? '…' : ''}</div>
          <div className="summary-answer-value">
            {(labState.formData[p.id] || '').trim() || <em style={{ color: 'var(--cream3)' }}>(not answered)</em>}
          </div>
        </div>
      ))}

      <div className="step-nav">
        <button className="btn btn-ghost" onClick={onDownload}>
          ↓ Download My Answers
        </button>
        {nextLabKey ? (
          <button className="btn btn-primary" onClick={() => onNextLab(nextLabKey)}>
            Start Lab {parseInt(nextLabKey.replace('lab', '')) + 0} →
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => onNextLab('final')}>
            Go to Final Project →
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Main LabShell ──────────────────────────────────────────────────────────
export default function LabShell({ labConfig }) {
  const { state, setPage, setLabStep, updateForm, submitQuiz, completeLab, nextLabKey } = useApp()
  const labState = state.labs[labConfig.labKey]
  const currentStep = labState.step

  const goStep = useCallback((s) => {
    setLabStep(labConfig.labKey, s)
  }, [labConfig.labKey, setLabStep])

  const handleQuizSubmit = (answers, score) => {
    submitQuiz(labConfig.labKey, answers, score)
  }

  const handleComplete = () => {
    completeLab(labConfig.labKey)
    goStep(3)
  }

  const handleDownload = () => downloadAnswers(labState, labConfig)

  const handleNextLab = (key) => {
    setPage(key)
  }

  const nextKey = labOrder.indexOf(labConfig.labKey) < labOrder.length - 1
    ? labOrder[labOrder.indexOf(labConfig.labKey) + 1]
    : null

  // Step indicator dots
  const stepDots = (
    <div className="step-indicator" style={{ marginBottom: '0.5rem' }}>
      {STEP_NAMES.map((_, i) => (
        <div
          key={i}
          className={`step-dot${i < currentStep ? ' done' : i === currentStep ? ' active' : ''}`}
        />
      ))}
    </div>
  )

  return (
    <div>
      {stepDots}
      {currentStep === 0 && (
        <StepIntro lab={labConfig} onNext={() => goStep(1)} />
      )}
      {currentStep === 1 && (
        <StepWorkbook
          lab={labConfig}
          labState={labState}
          onUpdate={(id, val) => updateForm(labConfig.labKey, id, val)}
          onNext={() => goStep(2)}
          onBack={() => goStep(0)}
        />
      )}
      {currentStep === 2 && (
        <StepQuiz
          lab={labConfig}
          labState={labState}
          onSubmit={handleQuizSubmit}
          onNext={handleComplete}
          onBack={() => goStep(1)}
        />
      )}
      {currentStep === 3 && (
        <StepDone
          lab={labConfig}
          labState={labState}
          onDownload={handleDownload}
          onNextLab={handleNextLab}
          nextLabKey={nextKey}
        />
      )}
    </div>
  )
}
