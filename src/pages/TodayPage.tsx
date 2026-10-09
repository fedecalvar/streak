import { Link } from 'react-router'
import HabitList from '../components/habits/HabitList.tsx'
import TodaySummary from '../components/habits/TodaySummary.tsx'
import { useToday } from '../hooks/useToday.ts'
import { toDateKey, type DateKey } from '../utils/date.ts'
import type { Habit } from '../utils/habits.ts'

interface Props {
  habits: Habit[]
  onToggle: (id: string, today: DateKey) => void
}

const dateFormatter = new Intl.DateTimeFormat('es-AR', { weekday: 'long', day: 'numeric', month: 'long' })

function TodayPage({ habits, onToggle }: Props) {
  const now = useToday()
  const today = toDateKey(now)
  const doneCount = habits.filter((h) => h.completedDates.includes(today)).length
  const formattedDate = dateFormatter.format(now)

  return (
    <main className="flex flex-col gap-6 px-5 pt-7 pb-10">
      <header className="flex flex-col gap-1">
        <p className="text-sm font-medium text-muted first-letter:uppercase">{formattedDate}</p>
        <h1 className="font-display text-5xl leading-none font-extrabold tracking-tight">
          Hoy<span className="text-accent">.</span>
        </h1>
      </header>

      {habits.length > 0 && <TodaySummary doneCount={doneCount} total={habits.length} />}

      <section className="flex flex-col gap-3" aria-labelledby="habits-title">
        <div className="flex items-baseline justify-between">
          <h2 id="habits-title" className="font-display text-xl font-bold tracking-tight">
            Tus hábitos
          </h2>
          <Link to="/nuevo" className="py-2.5 text-[15px] font-semibold text-accent">
            Agregar
          </Link>
        </div>
        <HabitList habits={habits} today={today} onToggle={(id) => onToggle(id, today)} />
      </section>
    </main>
  )
}

export default TodayPage
