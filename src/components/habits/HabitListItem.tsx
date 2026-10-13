import { useState } from 'react'
import type { DateKey } from '../../utils/date.ts'
import type { Habit } from '../../utils/habits.ts'
import { calculateStreak } from '../../utils/streak.ts'

interface Props {
  habit: Habit
  today: DateKey
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

function HabitListItem({ habit, today, onToggle, onDelete }: Props) {
  // Borrar pide confirmación en la misma tarjeta: se pierde todo el historial y no hay forma de deshacerlo.
  const [confirming, setConfirming] = useState(false)
  const done = habit.completedDates.includes(today)
  const streak = calculateStreak(habit.completedDates, today)

  if (confirming) {
    return (
      <li className="flex min-h-[72px] flex-col gap-3 rounded-[22px] border-2 border-danger bg-white px-4 py-3.5" role="alertdialog" aria-labelledby={`delete-${habit.id}`}>
        <p id={`delete-${habit.id}`} className="text-[15px]">
          ¿Borrar <span className="font-semibold">{habit.name}</span>? Se pierde la racha y todo el historial.
        </p>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            autoFocus
            onClick={() => setConfirming(false)}
            className="rounded-2xl px-4 py-2.5 text-[15px] font-semibold text-ink hover:bg-canvas"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={() => onDelete(habit.id)}
            className="rounded-2xl bg-danger px-4 py-2.5 text-[15px] font-semibold text-white"
          >
            Borrar
          </button>
        </div>
      </li>
    )
  }

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

      <button
        type="button"
        onClick={() => setConfirming(true)}
        aria-label={`Borrar ${habit.name}`}
        className="flex size-11 flex-none items-center justify-center rounded-full text-muted transition-colors hover:bg-canvas hover:text-danger"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />
        </svg>
      </button>
    </li>
  )
}

export default HabitListItem
