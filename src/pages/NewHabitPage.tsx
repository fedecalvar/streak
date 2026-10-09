import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router'
import type { NameValidation } from '../utils/habits.ts'

interface Props {
  onCreate: (name: string) => NameValidation
}

function NewHabitPage({ onCreate }: Props) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = onCreate(name)
    if (result.ok) {
      navigate('/')
    } else {
      setError(result.error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col px-5 pt-4">
      <Link to="/" aria-label="Volver a Hoy" className="-ml-2 flex size-12 items-center justify-center rounded-full hover:bg-white">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </Link>

      <h1 className="mt-3.5 font-display text-[40px] leading-none font-extrabold tracking-tight">Nuevo hábito</h1>

      <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-1 flex-col">
        <div className="flex flex-col gap-2">
          <label htmlFor="habit-name" className="text-[15px] font-semibold">
            ¿Qué querés lograr?
          </label>
          <input
            id="habit-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (error) setError(null)
            }}
            placeholder="Ej.: Caminar 30 minutos"
            autoFocus
            aria-invalid={error !== null}
            aria-describedby={error ? 'habit-name-error' : undefined}
            className="h-14 rounded-[18px] border-2 border-ink bg-white px-[18px] text-[17px] outline-none placeholder:text-muted focus-visible:ring-4 focus-visible:ring-accent/25"
          />
          {error && (
            <p id="habit-name-error" role="alert" className="text-sm font-medium text-[#C2331F]">
              {error}
            </p>
          )}
        </div>

        <div className="sticky bottom-0 mt-auto border-t border-[#DDE1EE] bg-canvas pt-3 pb-7">
          <button type="submit" className="h-[58px] w-full rounded-[20px] bg-ink text-[17px] font-semibold text-white hover:bg-ink-soft">
            Crear hábito
          </button>
        </div>
      </form>
    </main>
  )
}

export default NewHabitPage
