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

function isHabit(value: unknown): value is Habit {
  if (typeof value !== 'object' || value === null) return false
  const h = value as Record<string, unknown>
  return (
    typeof h.id === 'string' &&
    typeof h.name === 'string' &&
    Array.isArray(h.completedDates) &&
    h.completedDates.every((d) => typeof d === 'string')
  )
}

export function parseStoredHabits(raw: string | null): Habit[] {
  if (raw === null) return []
  try {
    const data: unknown = JSON.parse(raw)
    return Array.isArray(data) ? data.filter(isHabit) : []
  } catch {
    return []
  }
}
