import { MercadoLibre } from "./mercadoLibre.js";
import { UI } from "./UI.js";

const ui=new UI();
const merLibre=new MercadoLibre();
const idCat=[["Aves","MLM1100"],
             ["Conejos","MLM189310"],
             ["Equinos","MLM1117"],
             ["Gatos","MLM1081"],
             ["Insectos","MLM429307"],
             ["Peces","MLM1091"],
             ["Perros","MLM1072"],
             ["Reptiles","MLM1111"],
             ["Roedores","MLM1105"],
             ["Otros","MLM1126"]];



//MLM1071  -- CATEGORIA ANIMALES Y MASCOTAS
function fetchCategories()
{
   var queryString = window.location.search;
   var urlParams = new URLSearchParams(queryString);
   var palabra = urlParams.get('idCategoria');
   var valorIdCategoria="";

  

  for(let i=0; i<idCat.length;i++)
  {
    if(idCat[i][0]==palabra)
    {
       valorIdCategoria=idCat[i][1];
       console.log(valorIdCategoria);
    }
  }

merLibre.getItems(valorIdCategoria)
.then(response => 
{
    
   ui.cargarDatosCategorias(response);
   console.log(response);
   
    
}

);






}
//Se dispara cuando el documento HTML ha sido cargado
document.addEventListener('DOMContentLoaded', fetchCategories);