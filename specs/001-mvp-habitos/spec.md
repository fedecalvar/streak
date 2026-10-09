# Spec 001 — MVP de hábitos

Estado: aprobado

## Qué y por qué
Primera versión funcional de "Streak": crear hábitos, marcarlos como cumplidos día a día, y ver la racha actual. Sin backend ni cuentas — todo en `localStorage` del navegador.

## Historias de usuario
- Crear un hábito con un nombre.
- Marcar/desmarcar un hábito como cumplido hoy.
- Ver la racha actual (días consecutivos cumplidos) de cada hábito.
- Que los hábitos persistan al recargar la página.
- Borrar un hábito.

## Reglas clave
- Racha = días consecutivos cumplidos incluyendo hoy; se corta si se saltea un día.
- No se permite marcar días pasados en este MVP (solo "hoy").
- Nombre de hábito no puede estar vacío.

## Fuera de alcance
Edición retroactiva, backend/multiusuario, notificaciones, gamificación — quedan para specs futuras.
Frecuencia personalizada (ej. 3x/semana) — en este MVP los hábitos son diarios. Se descarta por ahora para no sumar complejidad al cálculo de racha (ya identificado como el punto más propenso a bugs) antes de tener el MVP funcionando; queda para una spec futura si se decide agregarla.
