# EJERCICIOS SUGERIDOS TEMA 12

## Practica lo aprendido

---

### 1. Componente Nav

> Saca el `<nav>` del Header a su propio componente `Nav.astro` e impórtalo dentro de `Header.astro`.

**Respuesta:**

- **Componente:** [`src/components/Nav.astro`](./src/components/Nav.astro)

  ```astro
  ---
  const enlaces = [
    { texto: "Inicio", url: "/" },
    { texto: "Carta", url: "/carta" },
    { texto: "Contacto", url: "/contacto" },
  ];
  ---

  <nav>
    {enlaces.map((e) => <a href={e.url}>{e.texto}</a>)}
  </nav>
  ```

- **Actualización en `Header.astro`:** [`src/components/Header.astro`](./src/components/Header.astro)

  ```astro
  ---
  import Nav from "./Nav.astro";
  ---

  <header>
    <a href="/" class="logo">Café Andino</a>
    <Nav />
  </header>
  ```

- **Explicación técnica:**
  1. **Modularidad y reutilización:** Al separar la navegación en `Nav.astro`, el menú se convierte en un componente independiente que puede reutilizarse en cualquier sección (móvil, barra lateral, etc.) sin duplicar código ni lógica.
  2. **Composición de componentes:** `Header.astro` importa e instancia a `<Nav />` mediante sintaxis PascalCase. La iteración con `.map()` genera enlaces HTML 100% estáticos en el servidor, sin enviar JavaScript al cliente.

---

### 2. Banner condicional

> Agrega un `Banner.astro` que muestre "Hoy 2x1 en capuchinos" solo si la variable `promoActiva` es `true`.

**Respuesta:**

- **Componente:** [`src/components/Banner.astro`](./src/components/Banner.astro)

  ```astro
  ---
  const promoActiva = true;
  ---

  {promoActiva && <aside class="banner">Hoy 2x1 en capuchinos</aside>}
  ```

- **Explicación técnica:**
  1. **Evaluación por cortocircuito (`&&`):** Astro evalúa la expresión en el servidor durante la construcción. Si `promoActiva` es `true`, renderiza el elemento `<aside>`; si es `false`, se ignora por completo y no se emite ninguna etiqueta HTML.
  2. **Cero sobrecarga en el DOM:** A diferencia de manipular visibilidad con CSS (`display: none`), el renderizado condicional de Astro no envía el nodo al cliente cuando la condición no se cumple.

---

### 3. Sección de beneficios

> En `index.astro`, genera con `map()` una lista de 4 beneficios (envío gratis, café de altura…) usando fragmentos `<dt>` y `<dd>`.

**Respuesta:**

- **Archivo:** [`src/pages/index.astro`](./src/pages/index.astro)

  ```astro
  ---
  import Header from "../components/Header.astro";
  import Footer from "../components/Footer.astro";
  import Card from "../components/Card.astro";
  import Banner from "../components/Banner.astro";

  const beneficios = [
    { titulo: "Envío gratis", desc: "Por compras mayores a S/ 80" },
    { titulo: "Café de altura", desc: "Cosechado a más de 1800 msnm" },
    { titulo: "Tueste fresco", desc: "Tostado semanalmente" },
    { titulo: "Comercio justo", desc: "Trato directo con caficultores" },
  ];
  ---

  <html lang="es">
    <head>
      <title>Café Andino</title>
    </head>
    <body>
      <Banner />
      <Header />
      <main>
        <h1>Café de altura de Cajamarca</h1>
        <Card /><Card /><Card />

        <h2>Beneficios</h2>
        <dl>
          {
            beneficios.map((b) => (
              <>
                <dt>{b.titulo}</dt>
                <dd>{b.desc}</dd>
              </>
            ))
          }
        </dl>
      </main>
      <Footer />
    </body>
  </html>
  ```

- **Explicación técnica:**
  1. **Uso de fragmentos (`<>...</>`):** La etiqueta `<dl>` (lista de descripción) exige por estándar HTML5 que sus hijos directos sean pares `<dt>` y `<dd>`. El fragmento vacío de Astro agrupa ambos elementos en el retorno de `.map()` sin inyectar un `<div>` intermediario que rompería la semántica del árbol HTML.
  2. **Renderizado dinámico de listas:** Se itera sobre el arreglo de objetos para proyectar de forma limpia cada par término-descripción, manteniendo el código declarativo y mantenible.
