import { createContext, useContext, useReducer, useEffect } from 'react'
import { labOrder } from '../data/labContent'

// ─── Default State ─────────────────────────────────────────────────────────

const defaultLabState = {
  step: 0,            // 0=intro, 1=workbook, 2=quiz, 3=done
  formData: {},       // { promptId: value }
  quizAnswers: {},    // { questionId: optionIndex }
  quizScore: null,    // null | 0–5
  quizSubmitted: false,
  completed: false,
}

const defaultState = {
  currentPage: 'home',
  labs: {
    lab1: { ...defaultLabState },
    lab2: { ...defaultLabState },
    lab3: { ...defaultLabState },
    lab4: { ...defaultLabState },
  },
}

// ─── Reducer ───────────────────────────────────────────────────────────────

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, currentPage: action.page }

    case 'SET_LAB_STEP': {
      const { labKey, step } = action
      return {
        ...state,
        labs: {
          ...state.labs,
          [labKey]: { ...state.labs[labKey], step },
        },
      }
    }

    case 'UPDATE_FORM': {
      const { labKey, promptId, value } = action
      return {
        ...state,
        labs: {
          ...state.labs,
          [labKey]: {
            ...state.labs[labKey],
            formData: { ...state.labs[labKey].formData, [promptId]: value },
          },
        },
      }
    }

    case 'SUBMIT_QUIZ': {
      const { labKey, answers, score } = action
      const completed = state.labs[labKey].step >= 2
      return {
        ...state,
        labs: {
          ...state.labs,
          [labKey]: {
            ...state.labs[labKey],
            quizAnswers: answers,
            quizScore: score,
            quizSubmitted: true,
          },
        },
      }
    }

    case 'COMPLETE_LAB': {
      const { labKey } = action
      return {
        ...state,
        labs: {
          ...state.labs,
          [labKey]: { ...state.labs[labKey], completed: true, step: 3 },
        },
      }
    }

    case 'RESET_LAB': {
      const { labKey } = action
      return {
        ...state,
        labs: {
          ...state.labs,
          [labKey]: { ...defaultLabState },
        },
      }
    }

    case 'LOAD': return action.state

    default: return state
  }
}

// ─── Context ───────────────────────────────────────────────────────────────

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState, (initial) => {
    try {
      const saved = localStorage.getItem('cc-state')
      if (saved) {
        const parsed = JSON.parse(saved)
        // Merge to ensure new labs/fields added in updates still appear
        return {
          ...initial,
          ...parsed,
          labs: {
            ...initial.labs,
            ...parsed.labs,
          },
        }
      }
    } catch {}
    return initial
  })

  // Persist to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem('cc-state', JSON.stringify(state))
    } catch {}
  }, [state])

  // ── Selectors ──────────────────────────────────────────────────────────

  const getLabProgress = (labKey) => {
    const lab = state.labs[labKey]
    if (!lab) return 0
    if (lab.completed) return 100
    const workbookFilled = Object.keys(lab.formData).length > 0 ? 1 : 0
    const quizDone = lab.quizSubmitted ? 1 : 0
    // step 0=0%, 1=workbook in progress (10–40%), 2=quiz, 3=done
    if (lab.step === 0) return 0
    if (lab.step === 1) return 10 + (workbookFilled * 20)
    if (lab.step === 2) return 40 + (quizDone * 40)
    return 100
  }

  const getOverallProgress = () => {
    const total = labOrder.reduce((sum, k) => sum + getLabProgress(k), 0)
    return Math.round(total / labOrder.length)
  }

  const allLabsComplete = () => labOrder.every((k) => state.labs[k].completed)

  const nextLabKey = () => {
    for (const k of labOrder) {
      if (!state.labs[k].completed) return k
    }
    return null
  }

  // ── Actions ────────────────────────────────────────────────────────────

  const setPage = (page) => dispatch({ type: 'SET_PAGE', page })
  const setLabStep = (labKey, step) => dispatch({ type: 'SET_LAB_STEP', labKey, step })
  const updateForm = (labKey, promptId, value) => dispatch({ type: 'UPDATE_FORM', labKey, promptId, value })
  const submitQuiz = (labKey, answers, score) => dispatch({ type: 'SUBMIT_QUIZ', labKey, answers, score })
  const completeLab = (labKey) => dispatch({ type: 'COMPLETE_LAB', labKey })
  const resetLab = (labKey) => dispatch({ type: 'RESET_LAB', labKey })

  return (
    <AppContext.Provider value={{
      state,
      setPage,
      setLabStep,
      updateForm,
      submitQuiz,
      completeLab,
      resetLab,
      getLabProgress,
      getOverallProgress,
      allLabsComplete,
      nextLabKey,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
