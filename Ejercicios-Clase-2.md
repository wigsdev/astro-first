# Ejercicios Sugeridos — Tema 2

## Practica lo aprendido

---

### 1. Señala las partes

> Abre `src/pages/index.astro` de tu proyecto e indica con comentarios dónde empieza y termina el script y la plantilla.

**Respuesta:**

- **Script (Frontmatter):** Delimitado entre las barras triples `---` (líneas 1 a 6). Se ejecuta en el servidor durante el _build_ y utiliza comentarios de JavaScript (`//`).
- **Plantilla (Template):** Comprende desde el cierre de las segundas barras `---` hasta el final del archivo. Define el HTML enviado al navegador y utiliza comentarios estándar de HTML (`<!-- -->`).
- **Archivo:** [`src/pages/index.astro`](src/pages/index.astro)

---

### 2. Tu ficha

> Crea `Ficha.astro` con 4 variables sobre ti (nombre, ciudad, hobby, lenguaje favorito) y muéstralas en una lista.

**Respuesta:**

- **Componente creado:** [`src/components/Ficha.astro`](src/components/Ficha.astro)
- **Variables declaradas:** `nombre`, `ciudad`, `hobby`, `lenguajeFavorito`.
- **Renderizado:** Se interpolaron los datos dentro de una lista `<ul>` utilizando la sintaxis de llaves `{variable}`.
- **Visualización:** Se importó y renderizó dentro de la página principal [`src/pages/index.astro`](src/pages/index.astro).

---

### 3. Tus datos en JSON

> Crea `src/data/libros.json` con 3 libros (título, autor, páginas) y muestra cuántos libros y cuántas páginas suman en total.

**Respuesta:**

- **Archivo de datos:** [`src/data/libros.json`](src/data/libros.json) (contiene 3 libros con título, autor y páginas).
- **Página de visualización:** [`src/pages/libros.astro`](src/pages/libros.astro)
- **Total de libros:** `3` (obtenido mediante `libros.length`).
- **Total de páginas acumuladas:** `1376` (calculado dinámicamente con `libros.reduce((acc, libro) => acc + libro.paginas, 0)`).
