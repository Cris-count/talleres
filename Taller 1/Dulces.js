let productos = ["Chocolatina", "Galletas", "Chicle", "Caramelo", "Papitas"];
let cantidades = [5, 5, 5, 5, 5]; // Cantidades iniciales de cada producto

const mostrarInventario = () => {
    let inventario = "Inventario de productos:\n";
    for (let i = 0; i < productos.length; i++) {
        inventario += `${i + 1}. ${productos[i]} - Cantidad: ${cantidades[i]}\n`;
    }
    alert(inventario);
};

const procesarPago = () => {
    let moneda = parseFloat(prompt("Inserte una moneda de $1:"));
    if (moneda === 1) {
        return true;
    } else {
        alert("Pago incorrecto. Inserte una moneda de $1.");
        return false;
    }
};

const entregarProducto = (codigo) => {
    if (codigo < 1 || codigo > productos.length) {
        alert("Código de producto inválido. Usa 1-5.");
    } else if (cantidades[codigo - 1] === 0) {
        alert(`El producto ${productos[codigo - 1]} está agotado.`);
        sugerirProducto();
    } else {
        cantidades[codigo - 1]--;
        alert(`Producto entregado: ${productos[codigo - 1]}`);
    }
};

const sugerirProducto = () => {
    for (let i = 0; i < cantidades.length; i++) {
        if (cantidades[i] > 0) {
            alert(`Sugerencia: Puedes comprar ${productos[i]}.`);
            break;
        }
    }
};

let opcion;
do {
    opcion = prompt("Seleccione una opción:\n1. Mostrar inventario\n2. Comprar producto\n3. Salir");
    switch (opcion) {
        case "1":
            mostrarInventario();
            break;
        case "2":
            if (procesarPago()) {
                let codigoProducto = parseInt(prompt("Ingrese el código del producto (1-5):"));
                entregarProducto(codigoProducto);
            }
            break;
        case "3":
            alert("Gracias por usar la máquina expendedora.");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción del 1 al 3.");
    }
} while (opcion !== "3");