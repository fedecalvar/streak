import { Link } from 'react-router'
import HabitList from '../components/habits/HabitList.tsx'
import type { Habit } from '../utils/habits.ts'

interface Props {
  habits: Habit[]
}

function TodayPage({ habits }: Props) {
  return (
    <main className="flex flex-col gap-6 px-5 pt-7 pb-10">
      <header className="flex flex-col gap-1">
        <h1 className="font-display text-5xl leading-none font-extrabold tracking-tight">
          Hoy<span className="text-accent">.</span>
        </h1>
      </header>

      <section className="flex flex-col gap-3" aria-labelledby="habits-title">
        <div className="flex items-baseline justify-between">
          <h2 id="habits-title" className="font-display text-xl font-bold tracking-tight">
            Tus hábitos
          </h2>
          <Link to="/nuevo" className="py-2.5 text-[15px] font-semibold text-accent">
            Agregar
          </Link>
        </div>
        <HabitList habits={habits} />
      </section>
    </main>
  )
}

export default TodayPage
