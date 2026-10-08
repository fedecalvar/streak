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

- Repo: **https://github.com/fedecalvar/hoy-si** (público), primer commit subido, 9 Issues creados (#1-#9: duda spec, mockup, scaffold, skills, y las 5 features del MVP).
- Todavía NO existe: tablero de GitHub Projects, scaffold de Vite/código, contenido real de las skills.
- Próximos pasos:
  1. Crear tablero de GitHub Projects y vincular los 9 Issues.
  2. Resolver Issue #1 (duda abierta spec 001) y aprobarla.
  3. Issue #2 (wireframe) y #3 (scaffold Vite+Tailwind) para arrancar el MVP.
