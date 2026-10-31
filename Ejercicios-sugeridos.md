# Ejercicios Sugeridos — Tema 5: Expresiones y Atributos Dinámicos

## Practica lo aprendido

---

### 1. Conversor

> Con una variable `soles`, muestra el monto en dólares y euros usando tasas fijas en el script. Redondea a 2 decimales.

**Respuesta:**

- **Componente:** [`src/components/Conversor.astro`](file:///home/wigsdev/GitHub/mi-primer-astro/src/components/Conversor.astro)
- **Implementación:** Se definieron las tasas en el Frontmatter (`tasaDolar = 3.75`, `tasaEuro = 4.10`) y se calcularon los montos dividiendo el valor base.
- **Formato:** Se utilizó el método `.toFixed(2)` en la plantilla para redondear a exactamente dos decimales (ejemplo con `100` soles: `$26.67` USD y `€24.39` EUR).

---

### 2. Enlace inteligente

> Crea un enlace que abra en otra pestaña solo si la variable `externo` es `true` (usa `target` y `undefined`).

**Respuesta:**

- **Componente:** [`src/components/EnlaceInteligente.astro`](file:///home/wigsdev/GitHub/mi-primer-astro/src/components/EnlaceInteligente.astro)
- **Implementación:** Se utilizó la propiedad de Astro con valores `undefined` en atributos HTML:
  ```astro
  <a
    href={url}
    target={externo ? "_blank" : undefined}
    rel={externo ? "noopener noreferrer" : undefined}
  >
    Astro build
  </a>
  ```
- **Comportamiento:** Si `externo` es `true`, Astro genera `target="_blank"`. Si es `false`, Astro omite por completo los atributos `target` y `rel` del HTML resultante.

---

### 3. Corrige

> Reescribe `{ for (const n of numeros) { <li>{n}</li> } }` usando solo expresiones.

**Respuesta:**

- **Componente:** [`src/components/ListaNumeros.astro`](file:///home/wigsdev/GitHub/mi-primer-astro/src/components/ListaNumeros.astro)
- **Explicación:** Dentro de las llaves `{ }` en Astro solo se permiten **expresiones** que devuelvan valores. Los bucles tradicionales como `for (...)` son **sentencias** (*statements*) que no devuelven nada y provocan un error de sintaxis.
- **Solución corregida con `.map()`:**
  ```astro
  <ul>
    {numeros.map((n) => <li>{n}</li>)}
  </ul>
  ```
