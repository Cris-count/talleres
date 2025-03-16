let saldo = 1000; // Saldo inicial
let transacciones = []; // Arreglo para almacenar las últimas 5 transacciones

const consultarSaldo = () => {
    alert(`Su saldo actual es: $${saldo}`);
};

const depositar = (monto) => {
    if (monto > 0) {
        saldo += monto;
        registrarTransaccion(monto);
        alert(`Depósito exitoso. Su nuevo saldo es: $${saldo}`);
    } else {
        alert("El monto a depositar debe ser positivo.");
    }
};

const retirar = (monto) => {
    if (monto > saldo) {
        alert("Fondos insuficientes.");
    } else if (monto > 500) {
        alert("No se pueden retirar montos mayores a $500 en una sola transacción.");
    } else if (monto > 0) {
        saldo -= monto;
        registrarTransaccion(-monto);
        alert(`Retiro exitoso. Su nuevo saldo es: $${saldo}`);
    } else {
        alert("El monto a retirar debe ser positivo.");
    }
};

const registrarTransaccion = (monto) => {
    if (transacciones.length >= 5) {
        transacciones.shift(); // Eliminar la transacción más antigua
    }
    transacciones.push(monto);
};

const mostrarTransacciones = () => {
    let historial = "Últimas 5 transacciones:\n";
    transacciones.forEach((transaccion, index) => {
        historial += `${index + 1}. ${transaccion > 0 ? "Depósito" : "Retiro"}: $${Math.abs(transaccion)}\n`;
    });
    alert(historial);
};

let opcion;
do {
    opcion = prompt("Seleccione una opción:\n1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Ver últimas 5 transacciones\n5. Salir");
    switch (opcion) {
        case "1":
            consultarSaldo();
            break;
        case "2":
            let montoDepositar = parseFloat(prompt("Ingrese el monto a depositar:"));
            depositar(montoDepositar);
            break;
        case "3":
            let montoRetirar = parseFloat(prompt("Ingrese el monto a retirar:"));
            retirar(montoRetirar);
            break;
        case "4":
            mostrarTransacciones();
            break;
        case "5":
            alert("Gracias por usar el cajero automático.");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
    }
} while (opcion !== "5");