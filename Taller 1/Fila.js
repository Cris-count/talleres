let cola = [];
const capacidadMaxima = 7;

const agregarCliente = (nombre) => {
    if (cola.length < capacidadMaxima) {
        cola.push(nombre);
        alert(`Cliente ${nombre} agregado a la cola.`);
    } else {
        alert("La cola está llena. No se pueden agregar más clientes.");
    }
};

const atenderCliente = () => {
    if (cola.length > 0) {
        let clienteAtendido = cola.shift();
        alert(`Cliente ${clienteAtendido} ha sido atendido.`);
    } else {
        alert("No hay clientes en la cola para atender.");
    }
};

const mostrarCola = () => {
    if (cola.length > 0) {
        let estadoCola = "Clientes en la cola:\n";
        for (let i = 0; i < cola.length; i++) {
            estadoCola += `${i + 1}. ${cola[i]}\n`;
        }
        alert(estadoCola);
    } else {
        alert("No hay clientes en la cola.");
    }
};

let opcion;
do {
    opcion = prompt("Seleccione una opción:\n1. Agregar cliente\n2. Atender cliente\n3. Mostrar cola\n4. Salir");
    switch (opcion) {
        case "1":
            let nombreCliente = prompt("Ingrese el nombre del cliente:");
            agregarCliente(nombreCliente);
            break;
        case "2":
            atenderCliente();
            break;
        case "3":
            mostrarCola();
            break;
        case "4":
            alert("Saliendo del programa.");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción del 1 al 4.");
    }
} while (opcion !== "4");