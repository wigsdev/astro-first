# EJEMPLO RESUELTO TEMA 12

## PASO 0: Estructura del proyecto

```text
cafe-andino/
├── src/
│   ├── components/
│   │   ├── Header.astro ← paso 1
│   │   ├── Footer.astro ← paso 2
│   │   └── Card.astro   ← paso 3
│   └── pages/
│       └── index.astro  ← paso 4
└── package.json
```

- Crea un proyecto nuevo con la plantilla mínima: `npm create astro@latest cafe-andino`.
- Crea la carpeta `src/components/` y los tres archivos vacíos.
- Inicia el servidor con `npm run dev` y ve construyendo paso a paso.

---

## PASO 1: `Header.astro`

> **Enunciado:** Encabezado con el nombre de la cafetería y un menú generado desde un arreglo.

**`src/components/Header.astro`**

```astro
---
const enlaces = [
  { texto: "Inicio", url: "/" },
  { texto: "Carta", url: "/carta" },
  { texto: "Contacto", url: "/contacto" },
];
---

<header>
  <a href="/" class="logo">Café Andino</a>
  <nav>
    {enlaces.map((e) => <a href={e.url}>{e.texto}</a>)}
  </nav>
</header>
```

1. Los enlaces viven en un arreglo: agregar uno es agregar un objeto.
2. `map()` genera un `<a>` por enlace con `href` dinámico.
3. Es HTML estático: 0 KB de JS.

*Resultado:* Logo y 3 enlaces, listo para todas las páginas.

---

## PASO 2: `Footer.astro`

> **Enunciado:** Pie de página con el año actual, la dirección y las redes sociales.

**`src/components/Footer.astro`**

```astro
---
const anio = new Date().getFullYear();
const redes = [
  { nombre: "Instagram", url: "#" },
  { nombre: "TikTok", url: "#" },
];
---

<footer>
  <p>Jr. Amalia Puga 123, Cajamarca</p>
  <p>{redes.map((r) => <a href={r.url}>{r.nombre}</a>)}</p>
  <p>© {anio} Café Andino</p>
</footer>
```

1. `anio` se calcula en el build: cambia cuando vuelves a construir.
2. Cambia `#` por tus enlaces reales.
3. La dirección es un ejemplo ficticio.

*Resultado:* Año, dirección y enlaces a redes.

---

## PASO 3: `Card.astro`

> **Enunciado:** Tarjeta de producto con imagen, nombre, precio y una insignia condicional.

**`src/components/Card.astro`**

```astro
---
const nombre = "Café de Cajamarca";
const precio = 35;
const nuevo = true;
---

<article class="card">
  <img src="/img/cafe.jpg" alt={nombre} />
  {nuevo && <span class="insignia">Nuevo</span>}
  <h3>{nombre}</h3>
  <p>S/ {precio.toFixed(2)}</p>
</article>
```

1. Variables, atributo dinámico, `&&` y expresiones.
2. Pon una imagen en `public/img/cafe.jpg`.
3. Etiquetas cerradas y bien anidadas.

*Resultado:* Imagen, insignia "Nuevo", nombre y S/ 35.00.

---

## PASO 4: `index.astro`: unimos todo

**`src/pages/index.astro`**

```astro
---
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
import Card from "../components/Card.astro";
---

<html lang="es">
  <head>
    <title>Café Andino</title>
  </head>
  <body>
    <Header />
    <main>
      <h1>Café de altura de Cajamarca</h1>
      <Card /><Card /><Card />
    </main>
    <Footer />
  </body>
</html>
```

- Tres import con rutas relativas desde `src/pages/`.
- Cada componente se usa como etiqueta en PascalCase.
- `<Card />` se repite 3 veces.
- *Resultado:* la landing funciona y, tras `npm run build`, `dist/` no tiene archivos `.js`.
