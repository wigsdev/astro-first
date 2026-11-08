# 🕵️ Reto 3: Cazador de Errores en `Menu.astro`

Auditoría técnica y resolución estricta de los errores del componente `src/components/Menu.astro`, limitándose exactamente al código presentado en el ejercicio.

---

## 📋 Código Original con Errores

```astro
---
const platos = [
  { n: "Café", p: 6 },
  { n: "Humita", p: 4.5 },
];
const abierto = true;
function pedir() { alert("Pedido") }
---

<section className="menu">
<h2>Menú
{ if (abierto) { <p>Abierto</p> } }
<p><ul>
{platos.map((x) =>
<li>{x.n}</li><li>S/ {x.p}</li>)}
</ul></p>
<span>Total:</span>
<strong>{platos.length}</strong>
<button onClick={pedir}>Pedir</button>
<img src="/menu.jpg">
</section>
```

---

## 🔍 Análisis de los Errores Encontrados

1. **`className="menu"`:**
   - *Error:* Sintaxis de React. Astro compila a HTML estándar, por lo que el atributo correcto es `class="menu"`.
2. **`<h2>Menú` sin cerrar:**
   - *Error:* Falta la etiqueta de cierre `</h2>`. El compilador de Astro es estricto y detiene el build con `[CompilerError] Unexpected token`.
3. **`{ if (abierto) { <p>Abierto</p> } }`:**
   - *Error:* Las sentencias de control como `if` no son válidas dentro de expresiones `{}` en la plantilla de Astro. Se debe usar una expresión lógica de cortocircuito: `{abierto && <p>Abierto</p>}`.
4. **`<p><ul>...</ul></p>`:**
   - *Error:* Violación del estándar HTML5 (W3C). Un elemento `<p>` solo puede contener elementos en línea (*phrasing content*), nunca un elemento de bloque como `<ul>`. Se eliminan las etiquetas `<p>` envolventes.
5. **`{platos.map((x) => <li>{x.n}</li><li>S/ {x.p}</li>)}`:**
   - *Error:* En el callback de `.map()` no se pueden retornar dos etiquetas hermanas sin un contenedor o fragmento `<>...</>`. Además, semánticamente el plato y su precio corresponden al mismo ítem: `<li>{x.n} - S/ {x.p}</li>`.
6. **`<span>Total:</span>` y `<strong>{platos.length}</strong>` en líneas distintas:**
   - *Error:* Astro colapsa los saltos de línea entre etiquetas contiguas en el marcado, mostrándose pegado como `Total:2`. Se corrige agregando un espacio explícito: `<span>Total:</span>{" "}<strong>{platos.length}</strong>`.
7. **`<button onClick={pedir}>Pedir</button>` y función `pedir()` en el Frontmatter:**
   - *Error:* Astro no usa `onClick` estilo React, y el código en el Frontmatter (`---`) se ejecuta únicamente en el **servidor** durante la compilación. En el navegador esa función no existe. Se asigna un identificador al botón y la interactividad se traslada a una etiqueta `<script>` del cliente.
8. **`<img src="/menu.jpg">`:**
   - *Error:* En Astro las etiquetas vacías deben autocerrarse explícitamente (`<img ... />`) y llevar el atributo `alt` obligatorio por accesibilidad.

---

## ✅ Código Corregido (`src/components/Menu.astro`)

```astro
---
// src/components/Menu.astro
const platos = [
  { n: "Café", p: 6 },
  { n: "Humita", p: 4.5 },
];
const abierto = true;
---

<section class="menu">
  <h2>Menú</h2>
  {abierto && <p>Abierto</p>}
  <ul>
    {
      platos.map((x) => (
        <li>
          {x.n} - S/ {x.p}
        </li>
      ))
    }
  </ul>
  <span>Total:</span>{" "}
  <strong>{platos.length}</strong>
  <button id="btn-pedir">Pedir</button>
  <img src="/menu.jpg" alt="Menú" />
</section>

<script>
  document.getElementById("btn-pedir")?.addEventListener("click", () => {
    alert("Pedido");
  });
</script>
```

---

## 🛠️ Comprobación del Build

```bash
npm run build
```
Resultado: **0 errores**, compilación estática exitosa en `dist/`.
