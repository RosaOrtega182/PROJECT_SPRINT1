const items= document.getElementById('items')
const footer =document.getElementById('footer')
const templateFooter=document.getElementById('template-footer').content
const templateCarrito=document.getElementById('template-carrito').content
const fragment= document.createDocumentFragment();


document.addEventListener('DOMContentLoaded',()=>
{
    pintarCarrito();
    localStorage.clear();

})

const pintarCarrito=() =>
{
   
    
    // Lo parseamos a un objeto cuando lo queremos traer para
// tratar de nuevo con el archivo script2.js
var dataCarrito = JSON.parse(localStorage.getItem("carrito"));

   // items.innerHTML='';
    Object.values(dataCarrito).forEach(producto=>
        {
            console.log(producto.idProducto);
            templateCarrito.querySelector('th').textContent =producto.idProducto;
            templateCarrito.querySelectorAll('td')[0].textContent=producto.titulo;
            templateCarrito.querySelectorAll('td')[1].textContent=producto.cantidad;
            //templateCarrito.querySelector('.btn-info').dataset.id=producto.idProducto;
            //templateCarrito.querySelector('.btn-danger').dataset.id=producto.idProducto;
            templateCarrito.querySelector('span').textContent=producto.cantidad*producto.precio;
            const clone=templateCarrito.cloneNode(true);
            fragment.appendChild(clone);
            //const clone= this.templateCarrito.cloneNode(true);
          //  fragment.appendChild(clone)
        })

        items.appendChild(fragment);
        //localStorage.removeItem(carrito );
       // storage.clear();
    }