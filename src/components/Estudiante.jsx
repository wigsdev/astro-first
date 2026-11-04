export default function Estudiante ({
    nombre = "Luis Gulcochia",
    carrera = "Ingeneria de Software",
    edad = 28,
    estaMatriculado = false,
    cursos = ["Desarrollo Web con Astro", "Bases de Datos", "Algoritmos"]
}) {
    return (
        <article className={"tarjeta-estudiante " + (estaMatriculado ? "matriculado" : "pendiente")}>
      <h2>{nombre}</h2>
      <p><strong>Carrera:</strong> {carrera}</p>
      <p><strong>Edad:</strong> {edad} años</p>
      {/* Condicional de estado de matrícula */}
      <p className="estado">
        <strong>Estado:</strong>{" "}
        <span className={estaMatriculado ? "badge-activo" : "badge-pendiente"}>
          {estaMatriculado ? "Matrícula activa" : "Matrícula pendiente"}
        </span>
      </p>
      {/* Lista de 3 cursos */}
      <div className="cursos">
        <h3>Cursos inscritos:</h3>
        <ul>
          {cursos.map((curso, index) => (
            <li key={index}>{curso}</li>
          ))}
        </ul>
      </div>
    </article>
    )
}