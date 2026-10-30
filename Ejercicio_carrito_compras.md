EJEMPLO RESUELTO TEMA 6
Carrito vacío o con productos
Enunciado: Si el carrito está vacío, muestra un mensaje; si tiene productos, muestra cuántos hay y el total.
src/components/Carrito.astro

---

const carrito = [35, 42.5, 18];
const total = carrito.reduce((s, p) => s + p, 0);
const vacio = carrito.length === 0;

---

{vacio
? <p>Tu carrito está vacío</p>
: <p>
{carrito.length} productos ·
S/ {total.toFixed(2)}

</p>}
1. vacio deja la condición legible.
2. Cada rama del ternario devuelve
un elemento.
3. Prueba cambiando carrito a [].
Resultado: 3 productos · S/ 95.50
