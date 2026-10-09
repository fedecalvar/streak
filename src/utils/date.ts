// Fechas como "YYYY-MM-DD" en hora local: comparar strings evita bugs de zona horaria de toISOString (UTC).
export type DateKey = string

export function toDateKey(date: Date): DateKey {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}
