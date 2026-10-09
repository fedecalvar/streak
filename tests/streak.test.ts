import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { addDays } from '../src/utils/date.ts'
import { calculateStreak } from '../src/utils/streak.ts'

describe('calculateStreak', () => {
  it('devuelve 0 sin historial', () => {
    assert.equal(calculateStreak([], '2026-10-09'), 0)
  })

  it('cuenta días consecutivos incluyendo hoy', () => {
    assert.equal(calculateStreak(['2026-10-07', '2026-10-08', '2026-10-09'], '2026-10-09'), 3)
  })

  it('se corta cuando se saltea un día', () => {
    assert.equal(calculateStreak(['2026-10-05', '2026-10-06', '2026-10-08', '2026-10-09'], '2026-10-09'), 2)
  })

  it('si hoy no está cumplido, sigue contando desde ayer', () => {
    assert.equal(calculateStreak(['2026-10-07', '2026-10-08'], '2026-10-09'), 2)
  })

  it('es 0 si ni hoy ni ayer están cumplidos', () => {
    assert.equal(calculateStreak(['2026-10-06', '2026-10-07'], '2026-10-09'), 0)
  })

  it('cruza el cambio de mes', () => {
    assert.equal(calculateStreak(['2026-09-29', '2026-09-30', '2026-10-01'], '2026-10-01'), 3)
  })

  it('cruza el cambio de año', () => {
    assert.equal(calculateStreak(['2025-12-31', '2026-01-01'], '2026-01-01'), 2)
  })

  it('ignora el orden y los duplicados del historial', () => {
    assert.equal(calculateStreak(['2026-10-09', '2026-10-08', '2026-10-09'], '2026-10-09'), 2)
  })
})

describe('addDays', () => {
  it('maneja febrero en año bisiesto', () => {
    assert.equal(addDays('2028-02-28', 1), '2028-02-29')
    assert.equal(addDays('2028-03-01', -1), '2028-02-29')
  })
})
