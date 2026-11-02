# Ejemplo Resuelto — Tema 9: Insertar HTML con set:html

## Aviso de matrícula desde el CMS

> **Enunciado:** Marketing escribe en el CMS un aviso con negritas y un enlace. Muéstralo correctamente en el inicio.

- **Componente:** [`src/components/Notificacion.astro`](./src/components/Notificacion.astro)

```astro
---
// Simula el dato que llega del CMS (fuente confiable)
const aviso =
  "<strong>¡Matrícula abierta!</strong> " +
  'Mira <a href="/cursos">los cursos</a>.';
---

<div class="aviso">
  <Fragment set:html={aviso} />
</div>

<style>
  .aviso {
    background-color: #fef3c7; /* fondo amarillo suave tipo alerta */
    border: 1px solid #f59e0b;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: #92400e;
    font-family: system-ui, sans-serif;
    margin-top: 1rem;
  }

  /* Estilo para los enlaces inyectados por el CMS */
  :global(.aviso a) {
    color: #b45309;
    font-weight: 600;
    text-decoration: underline;
  }

  :global(.aviso a:hover) {
    color: #78350f;
  }
</style>
```

### Puntos clave explicados:
1. **Fuente de confianza:** El contenido proviene del equipo interno/CMS, por lo que es seguro renderizarlo sin escapar con `set:html`.
2. **Interpretación HTML:** Con `set:html`, el navegador renderiza negritas reales (`<strong>`) y un enlace funcional (`<a>`) en lugar de mostrar las etiquetas literales como texto plano.
3. **Fragmento sin wrappers:** Al usar `<Fragment set:html={...} />`, el HTML se inyecta directamente dentro de `<div class="aviso">` sin generar etiquetas hijas intermedias innecesarias.
4. **Resultado:** Un banner de aviso con negritas y enlace funcional accesible desde el inicio.
