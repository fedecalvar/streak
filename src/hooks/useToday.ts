import { useEffect, useState } from 'react'

function msUntilNextMidnight(now: Date): number {
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  return next.getTime() - now.getTime()
}

// Re-renderiza al cambiar el día, así la app abierta pasada la medianoche no queda mostrando "ayer" como hoy.
export function useToday(): Date {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setTimeout(() => setNow(new Date()), msUntilNextMidnight(now) + 1000)
    return () => clearTimeout(timer)
  }, [now])

  return now
}
