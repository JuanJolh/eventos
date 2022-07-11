// Tienda de Consolas de Videojuegos

function Bienvenida(){
    alert("Bienvenido a GamerZone");
    nombre = prompt("Ingrese su nombre");
    while (nombre === "") {
        nombre = prompt("Ingrese su nombre");
    }
    return nombre;
}

/* function opciones(){
    let opcion = prompt("Seleccione una Opcion" + "\nVer Marcas = 1" + "\nComprar = 2")
    switch(opcion){
        case "1":
            productos();
        case "2":
            comprar();
        default:
            break;
    }
    total();
} */

/* function productos(){
    let marcas = prompt("Seleccione una marca: " + "\nMicrosoft = 1" + "\nSony = 2" + "\nNintendo = 3")
    switch(marcas){
        case "1":
            const marca1 = consolas.filter((el) => el.marca.includes("Microsoft"));
            for (let consola of marca1){
                alert("\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nMarca: " + consola.marca)
            }
            break;
        case "2":
            const marca2 = consolas.filter((el) => el.marca.includes("Sony"));
            for (let consola of marca2){
                alert("\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nMarca: " + consola.marca)
            }
            break;
        case "3":
            const marca3 = consolas.filter((el) => el.marca.includes("Nintendo"));
            for (let consola of marca3){
                alert("\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nMarca: " + consola.marca)
            }
            break;
        default:
            
    }
    opciones();
} */

function comprar(){
    for (let consola of consolas){
        respuesta = prompt("Desea comprar la Consola:" + "\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nMarca: " + consola.marca + "\nIngrese: Si o NO ").toUpperCase();
        while (respuesta == ""){
            respuesta = prompt("Desea comprar la Consola:" + "\nNombre: " + consola.nombre + "\nPrecio: " + consola.precio + " USD" + "\nCapacidad: " + consola.capacidad + " GB" + "\nMarca: " + consola.marca + "\nIngrese: Si o NO ").toUpperCase();
        }
        switch(respuesta) {
            case "SI":
                consolas_seleccionadas.push(consola);
                break;
            default:
                break;
        }
    }
}
function listar_compras(){
    for (let consola of consolas_seleccionadas){
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `Nombre: ${consola.nombre}
                                <p> Precio: ${consola.precio}<br>
                                Capacidad: ${consola.capacidad} GB<br>
                                Marca: ${consola.marca}</p>`
        document.getElementById("productos").appendChild(contenedor);
    }
}
function total(){
    for (let consola of consolas_seleccionadas){
        total_precio += consola.precio;
    }
    return total_precio;
}

let nombre = "";
let respuesta = "";
let total_precio = 0;

Bienvenida();
document.getElementById('nombre').innerHTML = nombre ;
comprar();
listar_compras();
total();

let boton = document.getElementById("total");
boton.addEventListener("click", totalm);

function totalm(){
    document.getElementById('tcompra').innerHTML = total_precio ;
}