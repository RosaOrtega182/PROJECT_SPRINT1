//import { MercadoLibre } from "./mercadoLibre.js";
//import { UI } from "./UI.js";

//const ui=new UI();
//const merLibre=new MercadoLibre();




var eventoUno= document.getElementById('btn-categorias');
eventoUno.addEventListener("click",function()
{

   alert("Hola");
   window.open('productos.html?idCategoria=Aves','_self')
  /* var palabra="Aves";
   merLibre.getItems(palabra)
   .then(response => 
   {
       
      ui.cargarDatosCategorias(response);
      console.log(response);
      
       
   }
   
   );*/
}

);  







//Se dispara cuando el documento HTML ha sido cargado
//document.addEventListener('DOMContentLoaded', fetchCategories);