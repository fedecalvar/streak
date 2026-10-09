import { addDays, type DateKey } from './date.ts'

// Si hoy todavía no se cumplió, la racha sigue viva contando desde ayer: el día no se "salteó" hasta que termina.
export function calculateStreak(completedDates: DateKey[], today: DateKey): number {
  const done = new Set(completedDates)
  let day = done.has(today) ? today : addDays(today, -1)
  let streak = 0
  while (done.has(day)) {
    streak++
    day = addDays(day, -1)
  }
  return streak
}
