import { useState } from 'react'
import { useApp } from './context/AppContext'
import Sidebar from './components/Sidebar'
import Home from './modules/Home'
import Lab1 from './modules/Lab1'
import Lab2 from './modules/Lab2'
import Lab3 from './modules/Lab3'
import Lab4 from './modules/Lab4'
import FinalProject from './modules/FinalProject'

const PAGE_MAP = {
  home: Home,
  lab1: Lab1,
  lab2: Lab2,
  lab3: Lab3,
  lab4: Lab4,
  final: FinalProject,
}

export default function App() {
  const { state } = useApp()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const PageComponent = PAGE_MAP[state.currentPage] || Home

  return (
    <div className="app-shell">
      {/* Mobile toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setSidebarOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Sidebar */}
      <Sidebar
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 199,
          }}
        />
      )}

      {/* Main content */}
      <main className="main-content">
        <div className="page">
          <PageComponent />
        </div>
      </main>
    </div>
  )
}
