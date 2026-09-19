function actualizarFechaHora(){
    const ahora = new Date();

    const opcionesFecha = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const fecha = ahora.toLocaleDateString("es-SV",opcionesFecha);
    const hora = ahora.toLocaleTimeString("es-SV", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    document.getElementById("fecha").textContent = fecha;
    document.getElementById("hora").textContent = hora;
}
actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);


const materias = [
    {
       Asignatura: "Programacion",
       Recursos: "Material de estudio",
       Actividad: "Ejercicios practicos",
    },
    {  
       Asignatura: "Matematicas",
       Recursos: "Ejemplos explicados",
       Actividad: "Ejercicios",
    },
    {
       Asignatura: "Contabilidad",
       Recursos: "Material de apoyo",
       Actividad: "actividad",
    },
    {
       Asignatura: "Mercadotecnia",
       Recursos: "Material de apoyo",
       Actividad: "actividad",
    },
]

function crearTabla(){

    const contenedor = document.getElementById("contenedorTabla");

    const tabla = document.createElement("table");

    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");

    const encabezadoAsignatura = document.createElement("th");
    encabezadoAsignatura.textContent = "Asignatura";

    const tituloRecursos = document.createElement("th");
    tituloRecursos.textContent = "Recursos disponibles";

    const tituloActividad = document.createElement("th");
    tituloActividad.textContent = "Tipo de actividad";

    filaEncabezado.appendChild(encabezadoAsignatura);
    filaEncabezado.appendChild(tituloRecursos);
    filaEncabezado.appendChild(tituloActividad);

    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);

    const cuerpo = document.createElement("tbody");

    materias.forEach(materia => {
        const fila = document.createElement("tr");

        const celdaAsignatura = document.createElement("td");
        celdaAsignatura.textContent = materia.Asignatura;

        const celdaRecursos = document.createElement("td");
        celdaRecursos.textContent = materia.Recursos;

        const celdaActividad = document.createElement("td");
        celdaActividad.textContent = materia.Actividad;

        fila.appendChild(celdaAsignatura);
        fila.appendChild(celdaRecursos);
        fila.appendChild(celdaActividad);

        cuerpo.appendChild(fila);
    });
    tabla.appendChild(cuerpo);

    contenedor.appendChild(tabla);
}
crearTabla();