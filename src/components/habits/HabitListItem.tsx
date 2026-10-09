import type { DateKey } from '../../utils/date.ts'
import type { Habit } from '../../utils/habits.ts'
import { calculateStreak } from '../../utils/streak.ts'

interface Props {
  habit: Habit
  today: DateKey
  onToggle: (id: string) => void
}

function HabitListItem({ habit, today, onToggle }: Props) {
  const done = habit.completedDates.includes(today)
  const streak = calculateStreak(habit.completedDates, today)

  return (
    <li className="flex min-h-[72px] items-center gap-3.5 rounded-[22px] bg-white py-3 pr-2 pl-3">
      <button
        type="button"
        onClick={() => onToggle(habit.id)}
        aria-pressed={done}
        aria-label={done ? `Desmarcar ${habit.name}` : `Marcar ${habit.name} como cumplido hoy`}
        className={`flex size-12 flex-none items-center justify-center rounded-full border-2 transition-colors ${
          done ? 'border-ink bg-lime' : 'border-line bg-transparent hover:border-ink'
        }`}
      >
        {done && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        )}
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className={`truncate text-[17px] font-semibold ${done ? 'text-muted line-through decoration-[1.5px]' : ''}`}>
          {habit.name}
        </span>
        <span className="text-sm text-muted">
          {streak === 0 ? 'Sin racha todavía' : `Racha de ${streak} ${streak === 1 ? 'día' : 'días'}`}
        </span>
      </div>
    </li>
  )
}

export default HabitListItem
