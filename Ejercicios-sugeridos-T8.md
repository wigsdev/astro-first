# Ejercicios Sugeridos — Tema 8: Fragmentos y Etiquetas Dinámicas

## Practica lo aprendido

---

### 1. Preguntas frecuentes

> Con un arreglo de 4 preguntas y respuestas, genera una lista `<dl>` usando fragmentos.

**Respuesta:**

- **Componente:** [`src/components/Preguntas.astro`](./src/components/Preguntas.astro)
- **Implementación:**

  ```astro
  ---
  const preguntas = [
    { pregunta: "¿Qué es astro?", respuesta: "un framework diseñado para la velocidad." },
    { pregunta: "¿Qué son las islas?", respuesta: "componentes interactivos aislados en un mar de HTML estático" },
    { pregunta: "¿Usa JavaScript en el cliente?", respuesta: "Cero JavaScript por defecto, solo cuando lo necesitas." },
    { pregunta: "¿Qué es un fragmento?", respuesta: "Una forma de agrupar elementos sin agregar etiquetas extra al DOM." },
  ];
  ---

  <dl class="faq-lista">
    {
      preguntas.map(({ pregunta, respuesta }) => (
        <>
          <dt>{pregunta}</dt>
          <dd>{respuesta}</dd>
        </>
      ))
    }
  </dl>
  ```

- **Explicación:** Una lista de definición `<dl>` exige semánticamente que sus hijos directos sean pares de `<dt>` y `<dd>`. El fragmento `<> ... </>` agrupa ambos elementos para la iteración de JavaScript sin añadir ningún `<div>` contenedor que rompa la semántica HTML.

---

### 2. Lista configurable

> Con una variable `ordenada`, muestra los datos en `<ol>` si es `true` o en `<ul>` si es `false`, usando una etiqueta dinámica.

**Respuesta:**

- **Componente:** [`src/components/ListaConfigurable.astro`](./src/components/ListaConfigurable.astro)
- **Implementación:**

  ```astro
  ---
  let ordenada = false;
  const Lista = ordenada ? "ol" : "ul";
  const items = ["Astro", "HTML", "TypeScript", "Javascript"];
  ---

  <Lista>
    {items.map((item) => <li>{item}</li>)}
  </Lista>
  ```

- **Explicación:** Al asignar el nombre de la etiqueta (`"ol"` o `"ul"`) a una variable que comience con mayúscula (`Lista`), Astro la interpreta como una **etiqueta dinámica**, evitando duplicar el bucle `.map()` dentro de un bloque `if/else`.

---

### 3. Sin envoltorio

> Muestra un `<h2>` y un `<p>` solo si `hayOferta` es `true`, sin agregar ningún `div` al HTML.

**Respuesta:**

- **Componente:** [`src/components/Oferta.astro`](./src/components/Oferta.astro)
- **Implementación:**

  ```astro
  ---
  let hayOferta = true;
  ---

  {
    hayOferta && (
      <>
        <h2>Oferta Especial</h2>
        <p>Obtén un 20% de descuento en tu primera compra</p>
      </>
    )
  }
  ```

- **Explicación:** Dentro de la expresión `{ hayOferta && ... }`, JavaScript exige devolver un único nodo. El fragmento `<> ... </>` cumple con esa regla sintáctica, pero al compilarse en el navegador, Astro lo suprime por completo, insertando directamente `<h2>` y `<p>` sin ningún contenedor extra en el DOM.
