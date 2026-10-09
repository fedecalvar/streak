import type { Habit } from '../../utils/habits.ts'

interface Props {
  habit: Habit
}

function HabitListItem({ habit }: Props) {
  return (
    <li className="flex min-h-[72px] items-center gap-3.5 rounded-[22px] bg-white py-3 pr-2 pl-3">
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="truncate text-[17px] font-semibold">{habit.name}</span>
      </div>
    </li>
  )
}

export default HabitListItem
