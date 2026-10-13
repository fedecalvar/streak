# MEMORY.md — Streak

Memoria del repo: decisiones técnicas y estado del proyecto, para retomar fácil en otra sesión. No es un changelog línea por línea, es contexto de alto nivel.

> **Regla**: se actualiza al final de cada sesión de trabajo. Máximo **50 líneas** — al llegar al límite, resumir o borrar lo viejo/ya no relevante antes de agregar algo nuevo.

## Decisiones técnicas

- **Vite + React, no Next.js**: frontend-only por ahora, sin backend.
- **localStorage antes de backend real**: MVP rápido sin DB. Backend es fase futura explícita.
- **Skills descartadas**: `improve-codebase-architecture` y `vercel-react-best-practices` (pensadas para codebases grandes/Next.js).
- **Skills vendorizadas en `.claude/skills/`**: `web-design-guidelines`, `tdd`, `code-review`. Copia textual de los repos de origen, sin `npx skills` (sin dependencias nuevas) y sin los `agents/openai.yaml` (son para Codex). `web-design-guidelines` baja las reglas de una URL de Vercel en cada uso, como el original.
- **GitHub Issues/Projects**: un issue por feature/tarea grande, referenciado en commits, movido en el tablero.
- **SDD completo descartado por sobre-ingeniería**: se había armado una metodología formal (4 agentes, 4 comandos, constitution.md separado) para un proyecto chico — evaluado como desproporcionado para el tamaño real de la app y riesgoso en una entrevista ("bazuca para matar una mosca"). Se simplificó a: 1 `spec.md` liviana por feature grande (solo para la 001), sin agentes/comandos custom ni plan.md/tasks.md separados. El foco pasa a tener el MVP funcionando.

## Estado actual

- Repo: **https://github.com/fedecalvar/streak** (renombrado desde "hoy-si", público), con 9 Issues (#1-#9) ya linkeados al tablero de GitHub Projects "Streak" (project #1).
- Stack real: Vite + React 19 + **TypeScript** + Tailwind 4 + react-router; lint con oxlint; tests con `npm test` (node --test sobre `tests/*.test.ts`).
- MVP (spec 001) completo: crear (#5), marcar hoy (#6), racha (#7), persistencia en `localStorage` clave `streak:habits` (#8), borrar con confirmación inline en la tarjeta (#9).
- Lógica de dominio como funciones puras en `src/utils/` (testeadas); el estado vive en `useHabits` dentro de `App`.
- Skills con contenido real (#4). No quedan Issues abiertos del MVP.
