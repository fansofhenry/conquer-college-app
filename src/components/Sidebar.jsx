import { useApp } from '../context/AppContext'
import { labs, labOrder } from '../data/labContent'

const pages = [
  { key: 'home', icon: '⌂', title: 'Home', sub: 'Dashboard & overview' },
  ...labOrder.map((k) => ({
    key: k,
    icon: labs[k].icon,
    title: `Lab ${labs[k].labNumber}`,
    sub: labs[k].title,
    isLab: true,
  })),
  { key: 'final', icon: '⭐', title: 'Final Project', sub: 'Strategic Learner Blueprint', isFinal: true },
]

export default function Sidebar({ mobileOpen, onClose }) {
  const { state, setPage, getLabProgress, getOverallProgress } = useApp()
  const overall = getOverallProgress()

  const handleNav = (key, locked) => {
    if (locked) return
    setPage(key)
    onClose?.()
  }

  return (
    <nav className={`sidebar${mobileOpen ? ' open' : ''}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-mark">Conquering College</div>
        <div className="sidebar-logo-sub">Jeff Anderson Math</div>
      </div>

      {/* Overall Progress */}
      <div className="sidebar-progress-section">
        <div className="sidebar-progress-label">
          <span>Overall Progress</span>
          <span style={{ color: 'var(--gold)' }}>{overall}%</span>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${overall}%` }} />
        </div>
      </div>

      {/* Nav */}
      <div className="sidebar-nav">
        {pages.map((p) => {
          const isActive = state.currentPage === p.key
          const labPct = p.isLab ? getLabProgress(p.key) : null
          const labDone = p.isLab ? state.labs[p.key]?.completed : false
          const locked = p.isFinal && overall < 25

          return (
            <div
              key={p.key}
              className={`nav-item${isActive ? ' active' : ''}${locked ? ' locked' : ''}`}
              onClick={() => handleNav(p.key, locked)}
              title={locked ? 'Complete at least one lab to unlock' : ''}
            >
              <span className="nav-item-icon">{p.icon}</span>
              <div className="nav-item-text">
                <div className="nav-item-title">{p.title}</div>
                <div className="nav-item-sub">{p.sub}</div>
                {p.isLab && (
                  <div className="nav-lab-progress">
                    <div className="nav-lab-bar">
                      <div className="nav-lab-bar-fill" style={{ width: `${labPct}%` }} />
                    </div>
                    <span className="nav-lab-pct">{labPct}%</span>
                  </div>
                )}
                {p.isFinal && locked && (
                  <div className="nav-item-sub" style={{ color: 'var(--rust)', marginTop: '0.2rem' }}>
                    Start a lab to unlock
                  </div>
                )}
              </div>
              {labDone && (
                <span className="nav-checkmark">✓</span>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div>
          <a href="https://www.appliedlinearalgebra.com/conquering-college" target="_blank" rel="noreferrer">
            appliedlinearalgebra.com
          </a>
        </div>
        <div style={{ marginTop: '0.3rem' }}>
          <a href="https://jeffandersonmath.wordpress.com" target="_blank" rel="noreferrer">
            Jeff Anderson Math
          </a>
        </div>
      </div>
    </nav>
  )
}
