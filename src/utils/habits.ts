import type { DateKey } from './date.ts'

export interface Habit {
  id: string
  name: string
  completedDates: DateKey[]
}

export type NameValidation = { ok: true; name: string } | { ok: false; error: string }

export function validateHabitName(raw: string): NameValidation {
  const name = raw.trim()
  if (name === '') return { ok: false, error: 'El nombre no puede estar vacío.' }
  return { ok: true, name }
}

export function toggleDate(habit: Habit, day: DateKey): Habit {
  const completedDates = habit.completedDates.includes(day)
    ? habit.completedDates.filter((d) => d !== day)
    : [...habit.completedDates, day]
  return { ...habit, completedDates }
}
