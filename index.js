//Variable usar let
// recordar que el prompt te da texto 
//  para castear (number(string)) si me equivoco me da nan
//let eleccion = prompt("Ingrese su eleccion")

// Esto es solo para el programador

//console.log(eleccion)

// costante 
const permisoCambio = 3219

// typeof nombreVariable nos da el tipo 
// ejemplo nombre == "string"
//alert ("Su eleccion es "+ eleccion)
//let confirmar = confirm ("Es correcto")



// Objetos literales
// let producto = {id: 1, nombre: "arroz", precio: 10 }

// array de productos , esto lo ingreso para ya tener productos en la BD
const productos = [
    {id: 1, nombre: "arroz", precio: 10, cantidad: 10},
    {id: 2, nombre: "fideo", precio: 1, cantidad: 10},
    {id: 3, nombre: "polenta", precio: 20, cantidad: 10},
    {id: 4, nombre: "papa", precio: 100, cantidad: 10},
];

// Para el programador
for (const producto of productos) {
    console.log(producto);
}

const addProduct = () => {
    const id = parseInt(prompt("Ingrese ID producto"));
    const nombre = prompt("Ingrese Nombre del producto");
    const precio = parseFloat(prompt("Ingrese Precio del producto"));
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
    const producto = {id: id, nombre: nombre, precio: precio, cantidad: cantidad};
    productos.push(producto);
    alert("Producto agregado:  id:"+ producto.id +"   nombre :"+ producto.nombre);
    console.log("Lista actualizada de productos:", productos);
    return productos
}

const getProductIndexByName = (nombre) => {
    return productos.findIndex(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

const venderProducto = () => {
    const productoBuscado = prompt("¿Qué producto quiere comprar?");
    const index = getProductIndexByName(productoBuscado);
    if (index !== -1) {
        const producto = productos[index];
        alert(`La venta es de $${producto.precio}`);
    } else {
        alert("Lo lamentamos, no tenemos este producto");
    }
}

const cambiarPrecio = () => {
    const productoBuscado = prompt("Ingrese el nombre del producto para cambiar el precio");
    const index = getProductIndexByName(productoBuscado);
    if (index !== -1) {
        const nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio del producto"));
        productos[index].precio = nuevoPrecio;
        alert(`El nuevo precio de ${productoBuscado} es $${productos[index].precio}`);
    } else {
        alert("Producto no encontrado");
    }
}
const imprimirArrayProductos = () => {  
    for (const producto of productos) {
        console.log(producto);
     document.write(producto.nombre + "<hr><hr> ");
    }
}
function processOption() {
    let eleccion = prompt("Ingrese su elección");
    alert("Su elección es " + eleccion);
    let confirmar = confirm("¿Es correcto?");
    if (confirmar) {
        switch (eleccion) {
            case '1':
                alert("Opción 1 seleccionada: Ingresar producto");
                addProduct();
                imprimirArrayProductos();
                break;
            case '2':
                alert("Opción 2 seleccionada: Procesar una venta");
                venderProducto();
                break;
            case '3':
                alert("Opción 3 seleccionada: Cambiar de precio");
                cambiarPrecio();
                break;
            case 'S':
            case 's':
                alert("Opción S seleccionada: Salir");
                // Lógica para salir
                break;
            default:
                alert("Opción no válida. Por favor ingrese una opción válida.");
        }
    } else {
        alert("Por favor, ingrese su opción nuevamente.");
        processOption();
    }
}




processOption();
