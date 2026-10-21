## Practica lo aprendido

1 Más páginas.  Crea contacto.astro y blog/index.astro. ¿Qué URL tiene cada una? Enlázalas desde el inicio.

/contacto
/blog

2 Un PDF público.  Coloca un PDF en public/ y enlázalo desde la página "Sobre mí" con <a href="/archivo.pdf">.

Guardé el PDF en public/archivo.pdf y lo enlacé desde la página “Sobre mí” con <a href="/archivo.pdf">Ver archivo PDF</a>. Astro sirve los archivos de public/ desde la raíz del sitio, por eso el enlace no incluye public/.

3 Experimento.  En una copia del proyecto, renombra src/pages/ a src/paginas/. ¿Qué pasa al visitar /? Explica por qué.

Astro busca las páginas en src/pages/. Al renombrarla a src/paginas/, ya no encuentra la página de inicio ni genera esa ruta. El nombre y la ubicación de la carpeta determinan qué archivos Astro reconoce como páginas.