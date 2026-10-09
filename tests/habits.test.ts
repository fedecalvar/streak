import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { parseStoredHabits, toggleDate, validateHabitName, type Habit } from '../src/utils/habits.ts'

describe('validateHabitName', () => {
  it('rechaza un nombre vacío', () => {
    assert.equal(validateHabitName('').ok, false)
  })

  it('rechaza un nombre con solo espacios', () => {
    assert.equal(validateHabitName('   ').ok, false)
  })

  it('acepta un nombre válido y le saca los espacios de los bordes', () => {
    assert.deepEqual(validateHabitName('  Leer 20 páginas '), { ok: true, name: 'Leer 20 páginas' })
  })
})

describe('toggleDate', () => {
  const habit: Habit = { id: '1', name: 'Leer', completedDates: ['2026-10-08'] }

  it('marca un día no cumplido', () => {
    assert.deepEqual(toggleDate(habit, '2026-10-09').completedDates, ['2026-10-08', '2026-10-09'])
  })

  it('desmarca un día ya cumplido', () => {
    assert.deepEqual(toggleDate(habit, '2026-10-08').completedDates, [])
  })

  it('no muta el hábito original', () => {
    toggleDate(habit, '2026-10-09')
    assert.deepEqual(habit.completedDates, ['2026-10-08'])
  })
})

describe('parseStoredHabits', () => {
  it('devuelve lista vacía si no hay nada guardado', () => {
    assert.deepEqual(parseStoredHabits(null), [])
  })

  it('devuelve lista vacía si el JSON está corrupto', () => {
    assert.deepEqual(parseStoredHabits('{no es json'), [])
  })

  it('descarta entradas con forma inválida', () => {
    const raw = JSON.stringify([{ id: '1', name: 'Leer', completedDates: [] }, { id: 2 }, 'basura'])
    assert.deepEqual(parseStoredHabits(raw), [{ id: '1', name: 'Leer', completedDates: [] }])
  })
})
