export class Carrito
{
    constructor()
    {
        this.carrito={}
    
       
    }


   setCarrito(objeto)
   {
    const producto=
    {
        idProducto:objeto.querySelector('.btn-item').dataset.id,
        titulo:objeto.querySelector('h5').textContent,
        precio:objeto.querySelector('p').textContent,
        cantidad: 1
    }
   
    if(this.carrito.hasOwnProperty(producto.idProducto))
    {
        //carrito es toda mi colección de objetos
        producto.cantidad= this.carrito[producto.idProducto].cantidad+1;
    }
    this.carrito[producto.idProducto]={...producto}///con los 3 puntos hago una copia de producto

   // Lo parseamos a texto para guardarlo en el localStorage
localStorage.setItem("carrito", JSON.stringify(this.carrito));
  
    console.log(this.carrito);
   } 

}