# MEMORY.md — Hoy sí

Memoria del repo: decisiones técnicas y estado del proyecto, para retomar fácil en otra sesión. No es un changelog línea por línea, es contexto de alto nivel.

> **Regla**: se actualiza al final de cada sesión de trabajo. Máximo **50 líneas** — al llegar al límite, resumir o borrar lo viejo/ya no relevante antes de agregar algo nuevo.

## Decisiones técnicas

- **Vite + React, no Next.js**: frontend-only por ahora, sin backend.
- **localStorage antes de backend real**: MVP rápido sin DB. Backend es fase futura explícita.
- **Skills descartadas**: `improve-codebase-architecture` y `vercel-react-best-practices` (pensadas para codebases grandes/Next.js).
- **Skills vendorizadas en `.claude/skills/`**: `web-design-guidelines`, `tdd`, `code-review`. Contenido real de los `SKILL.md` **todavía no traído** (placeholder).
- **GitHub Issues/Projects**: un issue por feature/tarea grande, referenciado en commits, movido en el tablero.
- **SDD completo descartado por sobre-ingeniería**: se había armado una metodología formal (4 agentes, 4 comandos, constitution.md separado) para un proyecto chico — evaluado como desproporcionado para el tamaño real de la app y riesgoso en una entrevista ("bazuca para matar una mosca"). Se simplificó a: 1 `spec.md` liviana por feature grande (solo para la 001), sin agentes/comandos custom ni plan.md/tasks.md separados. El foco pasa a tener el MVP funcionando.

## Estado actual

- Fase: **setup liviano** — `AGENTS.md`, `MEMORY.md`, `specs/001-mvp-habitos/spec.md` (borrador, 1 duda abierta sobre frecuencia), `.claude/skills/*` (3, placeholder).
- Todavía NO existe: scaffold de Vite/código, repo git, remoto en GitHub, Issues/Projects reales, contenido real de las skills.
- Próximos pasos:
  1. Resolver la duda abierta de la spec 001 y aprobarla.
  2. Traer contenido real de las 3 skills.
  3. Crear repo en GitHub + tablero Projects + primeros Issues.
  4. Generar scaffold Vite + React + Tailwind y arrancar el MVP.
