# Astro 7.3 con JavaScript · Semana 2 · Sesión 3

## 05. Slots: pasar HTML a un componente

### Cuando lo que quieres pasar no es un dato, sino contenido

---

### Definición

> Un **slot** es un espacio reservado dentro de un componente donde se inserta el contenido HTML que escribes entre su etiqueta de apertura y de cierre. Se marca con `<slot />`.
>
> Por defecto, todos los elementos hijos (*children*) que pasas al componente se renderizan dentro de su `<slot />`.

---

### Concepto de Slot

* **Definición:** Marcador `<slot />` que indica dónde se inyectará el contenido hijo del componente.
  * El componente define el **marco** (estructura, diseño, clases).
  * Quien lo usa decide **qué va adentro** (contenido libre).
* **Analogía:** Un marco de fotos: el marco (componente) siempre es el mismo; la foto (contenido del slot) la eliges tú en cada uso.

#### Ejemplo básico:
```astro
---
// src/components/Caja.astro
---

<div class="caja">
  <slot />
</div>
```

```astro
<!-- Uso en la página: -->
<Caja>
  <h2>Hola</h2>
  <p>Este contenido va en el slot.</p>
</Caja>
```

---

### Hijos (*children*) y etiquetas de cierre

* **Hijos (*children*):** Elementos que escribes entre la etiqueta de apertura y la de cierre de un componente.  
  * En `<Caja><p>Hola</p></Caja>`, el `<p>` es hijo de `Caja`.
* **Autocierre vs. Cierre:**
  * `<Card />` tiene etiqueta de autocierre porque no recibe hijos.
  * Para pasar contenido hijo, necesitas etiquetas de apertura y cierre explícitas: `<Caja> ... </Caja>`.
* **Regla:** Si un componente tiene `<slot />`, úsalo siempre con etiqueta de apertura y cierre.

---

### ¿Cuándo usar Prop y cuándo usar Slot?

| Usa una **Prop** para... | Usa un **Slot** para... |
| :--- | :--- |
| **Datos simples:** texto corto, números, booleanos. | **Contenido HTML:** párrafos, listas, imágenes, otros componentes. |
| Valores que el componente procesa o calcula: formatear un precio, elegir una clase CSS. | Contenido libre, enriquecido o que cambia radicalmente en cada uso. |
| *Ejemplos:* `nombre`, `precio`, `tipo`, `variante`. | *Ejemplos:* El cuerpo de un modal, el contenido de una alerta o una página completa. |

> **Combinación:** Muchos componentes combinan ambos:  
> `<Alerta tipo="error">...contenido HTML...</Alerta>`.

---

### Error común: Pasar HTML dentro de una prop

* ❌ **MAL (el HTML se escapa y se ve como texto plano):**
  ```astro
  <!-- index.astro -->
  <Aviso mensaje="<strong>¡Oferta!</strong> 2x1" />
  <!-- En pantalla se lee literalmente: <strong>¡Oferta!</strong> 2x1 -->
  ```
* ✅ **BIEN (el HTML se pasa en el slot y se interpreta):**
  ```astro
  <!-- index.astro -->
  <Aviso>
    <strong>¡Oferta!</strong> 2x1
  </Aviso>
  <!-- En pantalla: ¡Oferta! (en negrita) 2x1 -->
  ```

> Las props de texto se escapan con `{ }` por seguridad contra XSS. Para renderizar contenido con etiquetas HTML, utiliza siempre un `<slot />`.
