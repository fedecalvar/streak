import { Route, Routes } from 'react-router'
import { useHabits } from './hooks/useHabits.ts'
import NewHabitPage from './pages/NewHabitPage.tsx'
import TodayPage from './pages/TodayPage.tsx'

function App() {
  // El estado vive acá (no en cada página) para que ambas rutas compartan la misma lista de hábitos.
  const { habits, addHabit, toggleToday } = useHabits()

  return (
    <div className="mx-auto min-h-screen max-w-md">
      <Routes>
        <Route path="/" element={<TodayPage habits={habits} onToggle={toggleToday} />} />
        <Route path="/nuevo" element={<NewHabitPage onCreate={addHabit} />} />
      </Routes>
    </div>
  )
}

export default App
