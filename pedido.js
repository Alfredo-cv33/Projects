const carro = new carrito();
const carrito = document.getElementById('carrito');
const carrito = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');

cargarEventos();

function cargarEventos()
{
    listaProductos.addEventListener('click', (e)=>{carro.comprarProducto(e)});
}