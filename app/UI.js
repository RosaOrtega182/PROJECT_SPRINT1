import {Carrito} from "./carrito.js";


//MANIPULAR EL DOM
export class UI
{
    constructor()
    {
        this.cards=document.getElementById('cards');
        this.templateCard=document.getElementById ('template-card').content  
        this.fragment=document.createDocumentFragment(); 
        this.carrito= new Carrito();
    }




  
cargarDatosCategorias(data)
    {
        
        data.results.forEach(producto=>
            {
            //console.log(producto);
            this.templateCard.querySelector('h5').textContent=producto.title;
            this.templateCard.querySelector('p').textContent=producto.price;
            var link= "https://http2.mlstatic.com/D_NQ_NP_"+producto.thumbnail_id+"-V.webp";
            this.templateCard.querySelector('img').setAttribute('src',link);
            this.templateCard.querySelector('.btn-item').dataset.id=producto.id;
            const clone= this.templateCard.cloneNode(true);
            this.fragment.appendChild(clone);
            })

             this.cards.appendChild(this.fragment);
        console.log(data.results)

        this.cards.addEventListener('click',e=>
        {
            e.preventDefault();
            this.addCarrito(e);
        });
    



    }


 
addCarrito (e)
{
//console.log(e.target);
//console.log(e.target.classList.contains('btn-item'));
if(e.target.classList.contains('btn-item'))
{
   this.carrito.setCarrito(e.target.parentElement);
}
e.stopPropagation();
}





}