EJEMPLO RESUELTO TEMA 5
Precio con IGV y descuento
Enunciado: Muestra un producto con su precio sin IGV, el precio con 18% de IGV y un 10% de descuento, con
2 decimales.
src/components/Precio.astro

---

const producto = "Polo Nómada";
const base = 40;
const conIgv = base _ 1.18;
const final = conIgv _ 0.9;

---

<article>
<h3>{producto}</h3>
<p>Base: S/ {base.toFixed(2)}</p>
<p>Con IGV: S/ {conIgv.toFixed(2)}</p>
<strong>Final: S/ {final.toFixed(2)}</strong>
</article>
1. Los cálculos se hacen en el script,
no en la plantilla.
2. toFixed(2) es una expresión:
devuelve un texto con 2
decimales.
3. 40 × 1.18 = 47.20 → × 0.9 = 42.48.
Resultado: Final: S/ 42.48
