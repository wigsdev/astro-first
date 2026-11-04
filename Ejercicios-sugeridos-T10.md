# Ejercicios Sugeridos — Tema 10: Astro no es JSX

## Practica lo aprendido

---

### 1. Encuentra los errores

> Corrige: `<label htmlFor="email" className="campo">Correo</label>`.

**Respuesta:**

- **Componente:** [`src/components/CampoTexto.astro`](./src/components/CampoTexto.astro)
- **Código corregido:**

  ```astro
  <label for="email" class="campo">Correo</label>
  ```

- **Explicación técnica de los errores:**
  1. **`htmlFor` → `for`:** En JSX (React) se inventó `htmlFor` porque la palabra `for` es reservada en JavaScript para los bucles `for (...)`. En cambio, la plantilla de Astro es **HTML estándar nativo**, por lo que se utiliza el atributo estándar de la web: `for="email"`.
  2. **`className` → `class`:** En JSX se utiliza `className` porque `class` es una palabra reservada en JavaScript para definir clases. En Astro se usa el atributo HTML estándar: `class="campo"`.

---

### 2. Comentarios

> Agrega un comentario de cada tipo a tu página, haz `npm run build` y busca ambos en el HTML de `dist/`.

**Respuesta:**

- **Componente:** [`src/components/Comentarios.astro`](./src/components/Comentarios.astro)
- **Implementación de ambos tipos de comentarios:**

  ```astro
  <!-- NOTA PÚBLICA: Comentario HTML nativo -->
  <p>Hola mundo</p>

  {/* NOTA PRIVADA: Expresión de JavaScript en la plantilla */}
  <p>Hola mundo</p>
  ```

- **Verificación en el archivo compilado de producción (`dist/index.html`):**
  Al ejecutar `npm run build` e inspeccionar el HTML resultante:
  1. **Comentario HTML (`<!-- ... -->`):**
     ```bash
     grep -i "NOTA PÚBLICA" dist/index.html
     ```
     **Resultado:** ✅ **Encontrado**. Astro lo respeta como HTML estándar y **SÍ llega al navegador** (visible para cualquier usuario con <kbd>Ctrl</kbd> + <kbd>U</kbd>).
  2. **Comentario JS/JSX (`{/* ... */}`):**
     ```bash
     grep -i "NOTA PRIVADA" dist/index.html
     ```
     **Resultado:** 🚫 **No encontrado**. Astro lo procesa como una expresión de servidor y lo **elimina por completo** durante la compilación, garantizando que notas internas, TODOs o lógica privada no se filtren al cliente.

---

### 3. Traduce

> Busca un componente sencillo de React en internet (una tarjeta o un botón) y pásalo a `.astro`.

**Respuesta:**

- **Componente original en React (`TarjetaUsuario.jsx`):**

  ```jsx
  export default function TarjetaUsuario({ nombre, rol, avatar, activo }) {
    return (
      <article className={"tarjeta-usuario " + (activo ? "activo" : "inactivo")}>
        <img src={avatar} alt={"Foto de " + nombre} className="avatar" />
        <div className="info">
          <h3 tabIndex={0}>{nombre}</h3>
          <p className="rol">{rol}</p>
          <span className="estado">
            {/* Indicador de disponibilidad */}
            {activo ? "🟢 Disponible" : "🔴 Ocupado"}
          </span>
        </div>
      </article>
    );
  }
  ```

- **Componente traducido a Astro:** [`src/components/TarjetaUsuario.astro`](./src/components/TarjetaUsuario.astro)

  ```astro
  ---
  interface Props {
    nombre?: string;
    rol?: string;
    avatar?: string;
    activo?: boolean;
  }

  const {
    nombre = "Ana Martínez",
    rol = "Diseñadora UI/UX",
    avatar = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    activo = true,
  } = Astro.props;
  ---

  <article class={`tarjeta-usuario ${activo ? "activo" : "inactivo"}`}>
    <img src={avatar} alt={`Foto de ${nombre}`} class="avatar" />
    <div class="info">
      <h3 tabindex="0">{nombre}</h3>
      <p class="rol">{rol}</p>
      <span class="estado">
        {/* Comentario privado de Astro: se descarta en el HTML final */}
        {activo ? "🟢 Disponible" : "🔴 Ocupado"}
      </span>
    </div>
  </article>
  ```

- **Diferencias clave aplicadas en la traducción:**
  1. **Sin función contenedora ni return:** Se elimina `export default function` y el bloque `return (...)`. El propio archivo `.astro` es el componente.
  2. **Props en el Frontmatter:** Las propiedades y valores por defecto se reciben mediante `Astro.props` dentro del bloque `---`.
  3. **Atributos estándar:** `className` se traduce a `class`, y `tabIndex` (camelCase) se traduce a `tabindex` (minúsculas nativas de HTML).
  4. **Cero JavaScript enviado al cliente:** Mientras que React enviaría su runtime para montar el componente en el navegador, Astro lo compila como HTML y CSS puros y ultrarrápidos.
