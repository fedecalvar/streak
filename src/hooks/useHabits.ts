import { useState } from 'react'
import type { DateKey } from '../utils/date.ts'
import { toggleDate, validateHabitName, type Habit } from '../utils/habits.ts'

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([])

  function addHabit(rawName: string) {
    const result = validateHabitName(rawName)
    if (!result.ok) return result
    setHabits((prev) => [...prev, { id: crypto.randomUUID(), name: result.name, completedDates: [] }])
    return result
  }

  function toggleToday(id: string, today: DateKey) {
    setHabits((prev) => prev.map((h) => (h.id === id ? toggleDate(h, today) : h)))
  }

  return { habits, addHabit, toggleToday }
}
