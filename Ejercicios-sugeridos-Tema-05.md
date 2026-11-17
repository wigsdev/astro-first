# Ejercicios Sugeridos — Sesión 3 · Tema 05: Slots: pasar HTML a un componente

Guía de práctica y resolución paso a paso de los 3 ejercicios sugeridos del Tema 5.

---

## 1. Contenedor (`Seccion.astro`)

> **Enunciado:** Crea `Seccion.astro` con una etiqueta `<section>` y un `<slot />`. Úsalo para envolver 3 bloques distintos en la página.

### Componente: [`src/components/Seccion.astro`](./src/components/Seccion.astro)

```astro
<section class="rounded-lg border border-gray-200 bg-white p-6 mb-6 shadow-xs">
  <slot />
</section>
```

---

## 2. Bloque de Cita (`Cita.astro`)

> **Enunciado:** Crea `Cita.astro` con la prop `autor` y el texto de la cita en el `<slot />`. Muestra 2 citas con contenido distinto.

### Componente: [`src/components/Cita.astro`](./src/components/Cita.astro)

```astro
---
const { autor } = Astro.props;
---

<blockquote class="my-6 border-l-4 border-blue-500 pl-4 italic text-gray-700">
  <div>
    <slot />
  </div>
  <footer class="mt-2 not-italic font-semibold text-gray-900">— {autor}</footer>
</blockquote>
```

---

## 3. Análisis Conceptual: Prop o Slot en un componente `Modal`

> **Enunciado:** Para un componente `Modal` que consta de: título, contenido con formulario y botón de cerrar, decide qué elemento sería una **prop** y qué elemento sería un **slot**, justificando técnicamente la elección.

### Criterio de Decisión:

| Elemento del Modal  | ¿Prop o Slot? | Justificación Técnica                                                                                                                                                             |
| :------------------ | :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **título**          | **Prop**      | Suele ser un dato simple de texto plano (`titulo="Llenar formulario"`).                                                                                                           |
| **contenido**       | **Slot**      | Contiene etiquetas HTML complejas (`<form>`, `<input>`, `<label>`, `<button>`), validaciones y estructura personalizada que cambia radicalmente en cada uso.                      |
| **botón de cerrar** | **Prop**      | Es estructura interna fija con su lógica JS para cerrar. Como prop solo se pasa un booleano para mostrarlo u ocultarlo (`mostrarCerrar={true}`); no debe ser slot para no reprogramar el cierre. |
