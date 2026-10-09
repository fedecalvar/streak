import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { validateHabitName } from '../src/utils/habits.ts'

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
