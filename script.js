// EVENTOS

// opcion 1 (mas recomendada)

/*let boton = document.getElementById('boton1')

                      //nombre del evento (click)
boton.addEventListener("click", () =>{
let contenedor = document.getElementById('contenedor')

let p = document.createElement('p')
p.innerText = 'se apreto el boton'

contenedor.appendChild(p);
})


// opcion 2

boton.onclick = () =>{
    alert('se apreto el boton')
}*/


// CARRITO?


class producto{
    constructor(nombre, categoria, precio){
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    }
    
}


const producto1 = new producto('pan de campo', 'salado', 410)
const producto2 = new producto('pan multicereal', 'salado', 450)
const producto3 = new producto('pan de centeno', 'salado', 500)
const producto4 = new producto('chipa', 'salado', 550)
const producto5 = new producto('medialuna', 'dulce', 110)
const producto6 = new producto('croissant', 'dulce', 200)
const producto7 = new producto('alfajor de maicena', 'dulce', 280)
const producto8 = new producto('porción de torta', 'dulce', 650)
const producto9 = new producto('pizza mozzarella', 'pizza', 950)
const producto10 = new producto('pizza  4 quesos', 'pizza', 1200)
const producto11 = new producto('pizza fugaza', 'pizza', 1100)
const producto12 = new producto('pizza margarita', 'pizza', 1100)


let menu = []

menu.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12)

let contenedor = document.getElementById('contenedor')


// BOTON MOSTRAR DE A 1

let boton = document.getElementById('boton1')

                      //nombre del evento (click)
boton.addEventListener("click", () =>{

if (menu.length > 0){

let producto = menu.pop();

agregarProductosAlHtml(producto)

}else{
    alert('no hay mas productos')

}
})

// BOTON ORDENAR 

let botonOrdenar = document.getElementById('ordenar')

botonOrdenar.addEventListener('click', () =>{
    menu.sort((a, b) => {
        if(a.precio > b.precio){
            return -1;
        }else if(a.precio < b.precio){
            return 1;
        }else {
            return 0
        }
    } )
})

//BOTON MOSTRAR TODOS

let botonMostrarTodos = document.getElementById('mostrar')

botonMostrarTodos.addEventListener('click', () =>{
    menu.forEach((producto) => {
    agregarProductosAlHtml(producto)
    })
})

function agregarProductosAlHtml(producto){
    let ul = document.createElement('ul')

let li1 = document.createElement('li')
li1 = innerText = 'nombre ' + producto.nombre

let li2 = document.createElement('li')
li2 = innerText =  ' categoria ' + producto.categoria

let li3 = document.createElement('li')
li3 = ' precio ' + producto.precio

ul.append(li1, li2, li3)

contenedor.append(ul)
}


let formularioProductos = document.getElementById('formularioProductos')
let botonMostrarProductos = document.getElementById('MostrarProductosAgregados')
let divProductos = document.getElementById('divProductos')

let arrayProductos = []

formularioProductos.addEventListener('submit', (e) =>{ // Esta funcion solo se utiliza con los formularios para simular su comportamiento ya que originalmente la informacion llenada en un formulario es enviada a un servidor(backend)

 e.preventDefault()

let categoriaI = document.getElementById('idCategoria').value // utilizo el .value solo cuando quiero consultar el valor del input 
let productoI = document.getElementById('idProducto').value
let cantidadI = document.getElementById('idCantidad').value

arrayProductos.push({categoria: categoriaI, producto: productoI, cantidad: cantidadI})

formularioProductos.reset()
console.log(arrayProductos)

})

botonMostrarProductos.addEventListener('click', () =>{
divProductos.innerHTML = ""
arrayProductos.forEach(productoEnArray =>{
    divProductos.innerHTML += `
    <div>
    <p> categoria: ${productoEnArray.categoria} </p>
    <p> producto: ${productoEnArray.producto} </p>
    <p> cantidad: ${productoEnArray.cantidad} </p>

    </div>

    `
})

})