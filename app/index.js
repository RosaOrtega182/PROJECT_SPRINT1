//import { MercadoLibre } from "./mercadoLibre.js";
//import { UI } from "./UI.js";

//const ui=new UI();
//const merLibre=new MercadoLibre();




var eventoUno= document.getElementsByClassName('btn-categoria1');

for(var i = 0; i < eventoUno.length; i++){

eventoUno[i].addEventListener("click",function()
{
  
 // alert(this.value);
   window.open(`productos.html?idCategoria=${this.value}`,'_self');
 
}
);

}