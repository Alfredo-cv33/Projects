class Carrito
{
    //añadir producto al carrito 
    comprarProducto(e)
    {
        if(e.target.class.classList.contains('agregar-carrito'))
        {
            const producto = e.target.parentElement.parentElement;
           // this.leerDatosProducto(producto);
           console.log(producto);
        }
    }
}