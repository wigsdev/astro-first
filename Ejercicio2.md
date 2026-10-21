Practica lo aprendido
1 Otro puerto.  Inicia el servidor en el puerto 3000 con apertura automática del navegador.

pnpm exec astro dev --port 3000 --open
pnpm run dev --port 3000 --open

2 Explora dist/.  Ejecuta npm run build y revisa dist/. ¿Cuántos .html hay? ¿Hay algún .js?
4 archivos .html
0 archivos .js

3 Preview desactualizado.  Con preview corriendo, cambia el texto de una página. ¿Se ve el cambio? 
¿Qué debes hacer para verlo?

El cambio no se ve al editar el archivo mientras preview sirve el build anterior; para verlo, ejecuta pnpm build y recarga el navegador.

4 Pide ayuda como un pro.  Ejecuta npx astro info y copia el resultado: es lo que se pega al reportar 
un problema.

npx astro info
Astro                    v7.4.1
Node                     v24.20.0
System                   Linux (x64)
Package Manager          unknown
Output                   static
Adapter                  none
Integrations             none