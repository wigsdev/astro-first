EJERCICIO LARGO RETO 1 DE 3
Landing de tu emprendimiento
Objetivo: Crear la página de inicio de un negocio real o inventado usando solo componentes .astro.
Requisitos

1. Componentes Header, Footer, Hero y Card en
   src/components/.
2. Menú y redes sociales generados con map() desde arreglos.
3. Una sección de productos o servicios desde
   src/data/productos.json, mostrando solo los disponibles.
4. Una insignia condicional (por ejemplo, "Agotado" o "Nuevo").
5. Año dinámico en el footer y un comentario {/\* \*/} en cada
   componente.
6. npm run build sin errores y dist/ sin archivos .js.
   Entregable
   Repositorio en GitHub con al
   menos 5 commits y una captura
   de la página en el README.md.

EJERCICIO LARGO RETO 2 DE 3
Catálogo de cursos
Objetivo: Practicar listas anidadas, fragmentos, etiquetas dinámicas y set:html con un catálogo de cursos.
Requisitos

1. Arreglo de 4 cursos, cada uno con nombre, nivel, horas, módulos (con
   temas) y una descripción en HTML.
2. Por cada curso: título con etiqueta dinámica (h2 si es destacado, h3 si
   no).
3. Lista anidada de módulos y temas con dos map().
4. Ficha técnica en <dl> (nivel, horas, módulos) usando fragmentos.
5. Descripción con <Fragment set:html> (contenido de confianza
   escrito por ti).
6. Mensaje "Pronto más cursos" si el arreglo está vacío (pruébalo).
   Entregable
   Página catalogo.astro
   funcionando y subida a GitHub.

EJERCICIO LARGO RETO 3 · CÓDIGO
Cazador de errores: el código
src/components/Menu.astro

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
• Este componente tiene al
menos 7 errores.
• Algunos detienen el build;
otros producen HTML
incorrecto o no hacen
nada.
• Encuéntralos todos antes
de leer el reto.
