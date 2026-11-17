# Ejemplo Resuelto — Sesión 3 · Tema 05: Slots: pasar HTML a un componente

---

## Componente Alerta (Combinando Props con `<slot />`)

> **Enunciado:** Crea un componente `Alerta.astro` que reciba una prop `tipo` (`info`, `exito` o `error`) con valor por defecto `"info"`, y que reciba el mensaje enriquecido (HTML libre) mediante un `<slot />`.

### Componente: [`src/components/Alerta.astro`](./src/components/Alerta.astro)

```astro
---
// src/components/Alerta.astro
interface Props {
  tipo?: "info" | "exito" | "error";
}

const { tipo = "info" } = Astro.props;

const titulos = {
  info: "Info",
  exito: "Listo",
  error: "Error",
};

const estilos = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  exito: "bg-green-50 border-green-200 text-green-800",
  error: "bg-red-50 border-red-200 text-red-800",
};
---

<div class={`rounded-lg border p-4 mb-4 font-sans ${estilos[tipo]}`} role="alert">
  <strong class="font-bold">{titulos[tipo]}</strong>
  <div class="mt-1">
    <slot />
  </div>
</div>
```

### Uso en la página: [`src/pages/index.astro`](./src/pages/index.astro)

```astro
---
import Layout from "../layouts/Layout.astro";
import Alerta from "../components/Alerta.astro";
---

<Layout>
  <main class="max-w-2xl mx-auto p-6 font-sans">
    <!-- 1. Alerta de información por defecto -->
    <Alerta>
      <p>Este es un aviso informativo con el valor por defecto.</p>
    </Alerta>

    <!-- 2. Alerta de éxito con HTML enriquecido en el slot -->
    <Alerta tipo="exito">
      <p>¡Tu cuenta ha sido creada con éxito! Revisa tu <strong>correo electrónico</strong>.</p>
    </Alerta>

    <!-- 3. Alerta de error -->
    <Alerta tipo="error">
      <p>Ups: ocurrió un problema al procesar el pago. <a href="/ayuda" class="underline font-medium">Contactar soporte</a>.</p>
    </Alerta>
  </main>
</Layout>
```

### Puntos clave explicados:
1. **Combinación perfecta de Prop + Slot:**
   * La prop `tipo` define la apariencia visual y el título predeterminado.
   * El `<slot />` permite inyectar cualquier estructura HTML interna (`<p>`, `<strong>`, `<a>`, etc.) sin escapar las etiquetas.
2. **Accesibilidad:** Uso del atributo `role="alert"` para lectores de pantalla.
3. **Resiliencia:** Si no se pasa `tipo`, toma `"info"` por defecto.

---

## Práctica de Clase: Tarjeta de Perfil de Estudiantes (`Perfil.astro`)

> **Enunciado:** Desarrolla una aplicación que muestre perfiles diferentes de estudiantes. Todos los perfiles deben tener:
> - Una estructura visual común
> - Borde y un fondo
> - Contenido personalizado
> - Botón
> 
> *Restricción:* Evitar crear un componente diferente para cada estudiante y utilizar `<slot />` sin props innecesarias para dar flexibilidad total al contenido.

### Componente: [`src/components/Perfil.astro`](./src/components/Perfil.astro)

```astro
---
// src/components/Perfil.astro
// ¡Cero props! El componente solo provee el contenedor visual y su acción fija
---

<article class="flex max-w-xs flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
  <!-- Aquí entra TODO el contenido personalizado: nombre, párrafos, insignias, etc. -->
  <div class="space-y-3">
    <slot />
  </div>

  <!-- Estructura común fija: el botón -->
  <button class="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
    Ver perfil
  </button>
</article>
```

### Uso en la página: [`src/pages/index.astro`](./src/pages/index.astro)

```astro
---
import Layout from "../layouts/Layout.astro";
import Perfil from "../components/Perfil.astro";
---

<Layout>
  <main class="mx-auto max-w-5xl p-6 font-sans">
    <h1 class="mb-6 text-2xl font-bold text-gray-900">Perfiles de Estudiantes</h1>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <!-- Perfil 1: Párrafo con texto y ubicación -->
      <Perfil>
        <h2 class="text-lg font-bold text-gray-900">Wilmer</h2>
        <p class="text-sm text-gray-600">Especialista en Frontend y Astro.</p>
        <p class="text-sm font-medium text-gray-800">📍 Uchiza, Perú</p>
      </Perfil>

      <!-- Perfil 2: Lista de tecnologías -->
      <Perfil>
        <h2 class="text-lg font-bold text-gray-900">Ana</h2>
        <p class="text-sm text-gray-600">Diseñadora UI/UX.</p>
        <div class="flex flex-wrap gap-1 pt-1">
          <span class="rounded bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-700">
            Figma
          </span>
          <span class="rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
            Tailwind
          </span>
        </div>
      </Perfil>

      <!-- Perfil 3: Estado de curso -->
      <Perfil>
        <h2 class="text-lg font-bold text-gray-900">Carlos</h2>
        <p class="text-sm text-gray-600">Estudiante de JavaScript Moderno.</p>
        <span class="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">
          Matriculado
        </span>
      </Perfil>
    </div>
  </main>
</Layout>
```

### Puntos clave explicados:
1. **Marco común reutilizable:** El componente define el borde (`border border-gray-200`), el fondo (`bg-white`), la sombra (`shadow-sm`) y el botón invariable.
2. **Contenido 100% libre vía `<slot />`:** Cada perfil inyecta su propia jerarquía de elementos (títulos, párrafos, badges con colores variados, ubicación, etc.) sin depender de un esquema rígido de props.
