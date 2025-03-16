let habitaciones = [0, 0, 0, 0, 0, 0, 0];

const mostrarEstadoHabitaciones = () => {
    let estado = "Estado de habitaciones:\n";
    for (let i = 0; i < habitaciones.length; i++) {
        estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
    }
    alert(estado);
};

const contarHabitacionesLibres = () => {
    let libres = habitaciones.filter(habitacion => habitacion === 0).length;
    alert(`Habitaciones libres: ${libres}`);
};

const reservarHabitacion = (num) => {
    if (num < 1 || num > 7) {
        alert("Número de habitación inválido. Usa 1-7.");
    } else if (habitaciones[num - 1] === 1) {
        alert("Habitación ya ocupada.");
    } else {
        habitaciones[num - 1] = 1;
        alert(`Habitación ${num} reservada con éxito.`);
    }
    contarHabitacionesLibres();
};

const liberarHabitacion = (num) => {
    if (num < 1 || num > 7) {
        alert("Número de habitación inválido. Usa 1-7.");
    } else if (habitaciones[num - 1] === 0) {
        alert("Habitación ya está libre.");
    } else {
        habitaciones[num - 1] = 0;
        alert(`Habitación ${num} liberada con éxito.`);
    }
    contarHabitacionesLibres();
};

let opcion;
do {
    opcion = prompt("\n1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
    switch (opcion) {
        case "1":
            mostrarEstadoHabitaciones();
            contarHabitacionesLibres();
            break;
        case "2":
            let numReservar = parseInt(prompt("Ingresa el número de habitación (1-7):"));
            reservarHabitacion(numReservar);
            break;
        case "3":
            let numLiberar = parseInt(prompt("Ingresa el número de habitación (1-7):"));
            liberarHabitacion(numLiberar);
            break;
        case "4":
            alert("Saliendo...");
            break;
        default:
            alert("Opción inválida.");
    }
} while (opcion !== "4");