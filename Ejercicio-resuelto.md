# Ejemplo Resuelto — Tema 8: Fragmentos y Etiquetas Dinámicas

## Encabezado reutilizable por nivel

> **Enunciado:** Genera el índice de un artículo donde cada sección use `h2` o `h3` según su nivel.

- **Componente:** [`src/components/Indice.astro`](./src/components/Indice.astro)

```astro
---
const secciones = [
  { titulo: "Introducción", nivel: 2 },
  { titulo: "¿Qué es una isla?", nivel: 3 },
  { titulo: "Directivas", nivel: 3 },
  { titulo: "Conclusión", nivel: 2 },
];
---

{
  secciones.map(({ titulo, nivel }) => {
    const H = nivel === 2 ? "h2" : "h3";
    return <H>{titulo}</H>;
  })
}
```

### Puntos clave explicados:

1. **Bloque antes del return:** Con llaves `{ }` en la función de `.map()`, puedes declarar la variable `const H` antes del `return`.
2. **Regla de mayúscula:** `H` empieza con mayúscula para que Astro lo reconozca como una **etiqueta dinámica** y no como un tag HTML literal.
3. **Accesibilidad:** Respeta automáticamente la jerarquía del documento (`h2` para secciones principales y `h3` para subsecciones).
4. **Resultado:** Se generan dinámicamente dos `<h2>` y dos `<h3>` según el nivel asignado.
