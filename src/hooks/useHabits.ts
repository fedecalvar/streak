import { useState } from 'react'
import { validateHabitName, type Habit } from '../utils/habits.ts'

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([])

  function addHabit(rawName: string) {
    const result = validateHabitName(rawName)
    if (!result.ok) return result
    setHabits((prev) => [...prev, { id: crypto.randomUUID(), name: result.name, completedDates: [] }])
    return result
  }

  return { habits, addHabit }
}
