EJEMPLO RESUELTO TEMA 6
Cafetería abierta o cerrada
Enunciado: Muestra "Abierto" entre las 8 y las 20 horas y "Cerrado" el resto del tiempo, con un color para
cada caso.
src/components/Horario.astro

---

const hora = new Date().getHours();
const abierto = hora >= 8 && hora < 20;

---

<p class={abierto ? "verde" : "rojo"}>
{abierto ? "Abierto" : "Cerrado"}
</p>
{!abierto && <p>Abrimos a las 8 a. m.</p>}
1. La condición se calcula una vez en el
script.
2. El ternario cambia el texto y la clase.
3. Ojo: en un sitio estático, la hora es la
del build, no la del visitante.
Resultado: Para la hora real del visitante:
<script> o página bajo demanda.
