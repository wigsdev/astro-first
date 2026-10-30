Enunciado: Crea Logo.astro y úsalo dentro de Header.astro; luego usa el Header en la página de inicio.
src/components/Header.astro

---

## import Logo from "./Logo.astro";

<header>
<Logo />
<nav>
<a href="/">Inicio</a>
<a href="/sobre-mi">Sobre mí</a>
</nav>
</header>
1. Logo.astro está en la misma
carpeta: se importa con ./.
2. index.astro solo importa Header;
no necesita saber que existe Logo.
3. Si cambias el logo, se actualiza en todas
las páginas.
Resultado: La página muestra el encabezado completo con el logo, todo como HTML estático.
