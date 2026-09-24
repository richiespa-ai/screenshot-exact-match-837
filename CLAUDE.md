# CLAUDE.md: landing personal de Ricardo Español Rowe

## Qué es
Landing personal de búsqueda de empleo, publicada en https://screenshot-exact-match-837.lovable.app.
Hecha con Lovable (TanStack Start + React + Tailwind). Ver también `AGENTS.md`.

## Dónde está cada cosa
- Todo el texto está en `src/routes/index.tsx`: al principio del archivo están las listas `tools`, `projects` y `experience`; la portada, "Sobre mí" y "Contacto" están en el JSX.
- Metadatos (título y descripción para buscadores y redes): en el `head` de `src/routes/index.tsx` y en `src/routes/__root.tsx`.
- CV descargable: `public/cv-ricardo-espanol-rowe.pdf`. Mantener siempre ese nombre de archivo.

## Reglas de contenido
- Nunca inventar cifras, fechas, cargos ni logros. Si falta un dato, preguntar antes de escribir.
- La landing debe decir lo mismo que el CV y LinkedIn. Si un cambio toca cifras, fechas, cargos, idiomas o herramientas, avisar a Ricardo de que también hay que actualizar el CV y LinkedIn.
- No añadir volúmenes de solicitudes de la herramienta de bajas (es un dato interno).
- No añadir herramientas que Ricardo no haya usado de verdad.
- Idioma de la web: español. Los cargos se escriben igual que en el CV.
- Cambiar solo el contenido, salvo que se pida expresamente tocar el diseño.

## Flujo de trabajo
1. Antes de empezar: `git checkout main` y `git pull`.
2. Crear una rama nueva para cada cambio. Nunca trabajar directamente en `main`.
3. Antes de cada cambio, explicar en una frase qué se va a tocar y por qué.
4. Probar en local con `bun dev` (http://localhost:8080) y pedir a Ricardo que lo revise.
5. Commits pequeños, uno por bloque lógico, con mensajes en español.
6. Subir la rama y abrir un pull request contra `main`. No hacer merge: lo revisa Ricardo.
7. Después del merge, recordar a Ricardo que pulse **Publish → Update** en Lovable. Si no, la web pública no cambia.
- Nunca hacer force push ni reescribir commits ya subidos (ver `AGENTS.md`).
- `src/routeTree.gen.ts` se genera solo: no incluirlo en commits si solo cambian los saltos de línea.

## Entorno y forma de explicar
- Windows con PowerShell. Paquetes con bun (`bun install`, `bun dev`).
- La identidad de git ya está configurada. Cuenta de GitHub: richiespa-ai.
- `gh` no está instalado: para abrir un pull request, dar el enlace para hacerlo desde el navegador.
- Ricardo está aprendiendo: explicar los pasos técnicos de uno en uno, con el comando exacto y qué hace, y esperar a que confirme antes del siguiente.
