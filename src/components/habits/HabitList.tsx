import { Link } from 'react-router'
import type { Habit } from '../../utils/habits.ts'
import HabitListItem from './HabitListItem.tsx'

interface Props {
  habits: Habit[]
}

function HabitList({ habits }: Props) {
  if (habits.length === 0) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-[22px] border-2 border-dashed border-line px-5 py-6">
        <p className="text-[17px] font-semibold">Todavía no tenés hábitos.</p>
        <p className="text-[15px] text-muted">Empezá con uno chico que puedas cumplir hoy mismo.</p>
        <Link to="/nuevo" className="rounded-2xl bg-ink px-5 py-3 text-[15px] font-semibold text-white">
          Crear mi primer hábito
        </Link>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitListItem key={habit.id} habit={habit} />
      ))}
    </ul>
  )
}

export default HabitList
