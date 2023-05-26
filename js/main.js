alert("Bienvendio a la Clínica de la Cañada");

const turnosDisponibles = [
  {
    especialidad: "Oftalmología",
    fecha: "07/06/2023",
    doctor: "Garnero",
  },
  {
    especialidad: "Oftalmología",
    fecha: "10/06/2023",
    doctor: "Bono",
  },
  {
    especialidad: "Oftalmología",
    fecha: "21/06/2023",
    doctor: "Cejas",
  },
  {
    especialidad: "Gastroenterología",
    fecha: "17/06/2023",
    doctor: "Schaigorodsky",
  },
  {
    especialidad: "Gastroenterología",
    fecha: "18/06/2023",
    doctor: "Lunaklick",
  },
  {
    especialidad: "Gastroenterología",
    fecha: "28/06/2023",
    doctor: "Gerber",
  },
  {
    especialidad: "Neurología",
    fecha: "13/06/2023",
    doctor: "Luna",
  },
  {
    especialidad: "Neurología",
    fecha: "19/06/2023",
    doctor: "Perrone",
  },
  {
    especialidad: "Neurología",
    fecha: "02/06/2023",
    doctor: "Tramontina",
  },
  {
    especialidad: "Dermatología",
    fecha: "05/06/2023",
    doctor: "López",
  },
  {
    especialidad: "Dermatología",
    fecha: "09/06/2023",
    doctor: "Villablanca",
  },
  {
    especialidad: "Dermatología",
    fecha: "22/06/2023",
    doctor: "Tita",
  },
];

let solicitar = prompt("Desea solicitar un turno?");

while (!solicitar) {
  console.log("Tenes que ingresar una respuesta.");
  solicitar = prompt("Desea solicitar un turno?");
}
if (solicitar == "si" || solicitar == "Si") {
  function mostrarTurnos() {
    for (let i = 0; i < turnosDisponibles.length; i++) {
      console.log(
        "Especialidad: " + turnosDisponibles[i].especialidad,
        "Fecha: " + turnosDisponibles[i].fecha,
        "Doctor: " + turnosDisponibles[i].doctor
      );
    }
  }
  console.log("Turnos disponibles actualmente:");
  mostrarTurnos();

  let filtrar = prompt("Desea filtrar por especialidad?");
  while (!filtrar) {
    console.log("Tenes que ingresar una respuesta.");
    filtrar = prompt("Desea filtrar por especialidad?");
  }
  if (filtrar == "si" || filtrar == "Si") {
    function filtrarEspecialidad() {
      let especialidad = prompt("Ingrese la especialidad a filtrar:");
      let turnosFiltrados = turnosDisponibles.filter(function (turno) {
        return (
          turno.especialidad.toLowerCase() === especialidad.toLocaleLowerCase()
        );
      });

      console.log("Turnos filtrados por especialidad:");
      turnosFiltrados.forEach(function (turno) {
        console.log(
          "Especialidad: " +
            turno.especialidad +
            ", Fecha: " +
            turno.fecha +
            ", Doctor: " +
            turno.doctor
        );
      });
    }
    filtrarEspecialidad();
  } else if (filtrar == "No" || filtrar == "no") {
    console.log("Hasta la próxima");
  } else if (solicitar == "No" || solicitar == "no") {
    console.log("Hasta la próxima");
  }
}
