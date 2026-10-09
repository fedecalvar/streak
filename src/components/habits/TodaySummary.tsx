interface Props {
  doneCount: number
  total: number
}

function remainingText(left: number): string {
  if (left === 0) return 'Día completo. Bien ahí.'
  if (left === 1) return 'Te falta uno para cerrar el día.'
  return `Te faltan ${left} para cerrar el día.`
}

function TodaySummary({ doneCount, total }: Props) {
  return (
    <div className="flex flex-col gap-1.5 rounded-[28px] bg-ink px-6 py-5 text-white">
      <p className="font-display text-3xl leading-none font-extrabold tracking-tight">
        {doneCount} de {total}
      </p>
      <p className="text-[15px] text-[#C9CDE6]">{remainingText(total - doneCount)}</p>
    </div>
  )
}

export default TodaySummary
