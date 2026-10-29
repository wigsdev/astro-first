# EJERCICIOS SUGERIDOS TEMA 2
## Practica lo aprendido

### 1 Señala las partes
> Abre `src/pages/index.astro` de tu proyecto e indica con comentarios dónde empieza y termina el script y la plantilla.

**Respuesta:**
- **Script (Frontmatter):** Se delimita entre las barras triples `---` (líneas 1 a 6). Se ejecuta en el servidor/build y utiliza comentarios de JS (`//`).
- **Plantilla (Template):** Inicia a partir del segundo `---` hasta el final del archivo. Contiene el HTML que se envía al navegador y usa comentarios HTML (`<!-- -->`).
- **Archivo:** [src/pages/index.astro](file:///home/wigsdev/GitHub/mi-primer-astro/src/pages/index.astro)

---

### 2 Tu ficha
> Crea `Ficha.astro` con 4 variables sobre ti (nombre, ciudad, hobby, lenguaje favorito) y muéstralas en una lista.

**Respuesta:**
- Se creó el componente [src/components/Ficha.astro](file:///home/wigsdev/GitHub/mi-primer-astro/src/components/Ficha.astro) definiendo las 4 variables en el Frontmatter (`nombre`, `ciudad`, `hobby`, `lenguajeFavorito`).
- Se renderizaron en la lista `<ul>` usando expresiones dinámicas `{variable}`.
- Se muestra activo en la página principal [src/pages/index.astro](file:///home/wigsdev/GitHub/mi-primer-astro/src/pages/index.astro).

---

### 3 Tus datos en JSON
> Crea `src/data/libros.json` con 3 libros (título, autor, páginas) y muestra cuántos libros y cuántas páginas suman en total.

**Respuesta:**
- **Archivo JSON:** [src/data/libros.json](file:///home/wigsdev/GitHub/mi-primer-astro/src/data/libros.json) con 3 libros (*El Principito*, *Cien años de soledad*, *Don Quijote*).
- **Página creada:** [src/pages/libros.astro](file:///home/wigsdev/GitHub/mi-primer-astro/src/pages/libros.astro).
- **Total de libros:** **3** (calculado con `libros.length`).
- **Total de páginas:** **1376** (calculado con `libros.reduce((acc, l) => acc + l.paginas, 0)`).
