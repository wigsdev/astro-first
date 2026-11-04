# Ejemplo Resuelto — Tema 10

## Traduce un componente de React a Astro

### Original en React (.jsx)

**Alerta.jsx**

```jsx
export default function Alerta() {
  const tipo = "error";
  return (
    <div className={"alerta " + tipo} tabIndex={0}>
      {/* aviso */}
      <p>Revisa el formulario</p>
    </div>
  );
}
```

### Versión en Astro (.astro)

**Alerta.astro**

```astro
---
const tipo = "error";
---

<div class={"alerta " + tipo} tabindex="0">
  {/* aviso */}
  <p>Revisa el formulario</p>
</div>
```

**Claves del cambio:**
Lógica al script · `className` → `class` · `tabIndex` → `tabindex` · sin función ni return.
