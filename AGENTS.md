# AGENTS.md — Hoy sí

Tracker de hábitos personal. Proyecto de estudio y portfolio, pensado para que crear un hábito, marcarlo cumplido y ver la racha sea simple y agradable de usar.

## Principios del proyecto
- Frontend-only por ahora: React (Vite) + Tailwind CSS, sin backend ni base de datos.
- Persistencia en `localStorage` (no hay sincronización entre dispositivos ni multiusuario en esta fase). Backend real (auth, DB) es una fase futura explícita, no implícita.
- Evitar el look genérico "hecho por IA" en el diseño.
- Gestión de trabajo en GitHub: un Issue por feature/tarea grande, movido en el tablero de Projects, referenciado en los commits, cerrado al mergear.
- Para features grandes, documentar brevemente en `specs/NNN-nombre/spec.md` (qué y por qué, sin entrar en stack/arquitectura) antes de programar — liviano, no un proceso formal de varias fases. Features chicas no necesitan spec.

## Stack y estructura

- React (Vite) + Tailwind CSS. Por ahora **solo frontend**, sin backend ni base de datos.
- Persistencia en `localStorage` (no hay sincronización entre dispositivos ni multiusuario en esta fase).
- Estructura del repo:
  - `specs/NNN-nombre/spec.md` — documentación liviana de features grandes (qué y por qué).
  - `tests/` — tests (`node --test`).
  - `.claude/skills/` — skills vendorizadas.
  - Código de la app (se genera con el scaffold de Vite, convive en la raíz):
    - `src/components` — componentes de UI, organizados por dominio (`habits/`, `calendar/`, `ui/`).
    - `src/hooks` — lógica reutilizable (ej. cálculo de racha, persistencia).
    - `src/utils` — funciones puras (fechas, formateo).

## Comandos

A confirmar una vez inicializado el proyecto con Vite. Esperados:

- `npm run dev` — levantar en desarrollo.
- `npm run build` — build de producción.
- `npm run lint` — linter.

## Convenciones

- Componentes funcionales con hooks, sin clases.
- Nombres de componentes/variables en inglés; textos de UI (lo que ve el usuario) en español.
- Tailwind utility-first; evitar CSS custom salvo necesidad puntual.
- **Diseño**: evitar el look genérico "hecho por IA". Antes de tocar estilos o layout, usar la skill `frontend-design` (ya disponible, no requiere instalación) para tomar decisiones intencionales de tipografía, paleta y layout.

## Reglas de dominio / trampas conocidas

- El cálculo de **racha** (streak) es lo más propenso a bugs de fecha/zona horaria — probar con cuidado los bordes de día (medianoche, cambio de mes).
- No asumir persistencia entre dispositivos ni multiusuario: todo vive en `localStorage` del navegador hasta que haya backend.

## Skills del proyecto

Vendorizadas en `.claude/skills/<nombre>/SKILL.md` (copiadas al repo, no solo instaladas globalmente), originadas en skills.sh:

- **Vendorizadas** (contenido real pendiente de traer, ver `MEMORY.md`):
  - `.claude/skills/web-design-guidelines/` ← `vercel-labs/agent-skills`
  - `.claude/skills/tdd/` ← `mattpocock/skills`
  - `.claude/skills/code-review/` ← `mattpocock/skills`
- **Ya disponible, no se instala**: `frontend-design` (anthropics/skills) — usar al diseñar UI.
- **Descartadas** (no instalar sin volver a evaluar): `improve-codebase-architecture` y `vercel-react-best-practices` — pensadas para codebases grandes/Next.js, no para este proyecto.

## Forma de trabajar

- El foco es tener el MVP funcionando: priorizar código y producto terminado sobre proceso/documentación.
- Planificar antes de tocar código en cambios grandes (features nuevas, cambios de estructura de datos). Cambios chicos (fixes, ajustes de estilo) se pueden hacer directo.
- **Flujo de GitHub**: toda feature/tarea grande arranca con un Issue, se referencia en los commits (ej. `Closes #4`), se mueve en el tablero de GitHub Projects, y se cierra al mergear.
- Actualizar `MEMORY.md` al final de cada sesión de trabajo, manteniendo el archivo en **máximo 50 líneas** — si se pasa, resumir/eliminar lo viejo antes de agregar lo nuevo.
- Al terminar una tarea, explicar qué se hizo y por qué, en términos simples (es un proyecto de aprendizaje).

## Límites

- ✅ Siempre: ajustes de estilo, componentes nuevos dentro de la estructura definida, fixes de bugs, crear/actualizar Issues.
- ⚠️ Pregunta antes: agregar dependencias nuevas, decidir cuándo pasar a backend real, cambiar el formato de datos en `localStorage`, instalar skills no listadas arriba.
- 🚫 Nunca: borrar datos de usuario sin confirmación, hacer commit/push sin que lo pidan, cerrar Issues sin que la tarea esté realmente terminada.

## Verificación

Correr `npm run dev` y probar a mano: crear un hábito, marcarlo cumplido/no cumplido, recargar la página y confirmar que el estado persiste.
