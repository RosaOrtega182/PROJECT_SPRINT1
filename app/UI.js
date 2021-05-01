import { MercadoLibre } from "./mercadoLibre.js";

//MANIPULAR EL DOM
export class UI
{
    constructor()
    {
    
    }


    cargarDatosCategorias(data)
    {
        this.items=document.getElementById('items');
        this.templateCard=document.getElementById ('template-card').content   
        this.fragment=document.createDocumentFragment(); 
        data.results.forEach(producto=>
            {
            //console.log(producto);
            this.templateCard.querySelector('h5').textContent=producto.title;
            this.templateCard.querySelector('p').textContent=producto.price;
            var link= "https://http2.mlstatic.com/D_NQ_NP_"+producto.thumbnail_id+"-V.webp";
            this.templateCard.querySelector('img').setAttribute('src',link);
            const clone= this.templateCard.cloneNode(true);
            this.fragment.appendChild(clone);
            })

        this.items.appendChild(this.fragment);
        console.log(data.results)
    }


 


}