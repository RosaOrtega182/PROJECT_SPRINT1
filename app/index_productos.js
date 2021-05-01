import { MercadoLibre } from "./mercadoLibre.js";
import { UI } from "./UI.js";

const ui=new UI();
const merLibre=new MercadoLibre();
const idCat=[]
0: {id: "MLM1100", name: "Aves", total_items_in_this_category: 63641}
1: {id: "MLM189310", name: "Conejos", total_items_in_this_category: 1065}
2: {id: "MLM1117", name: "Equinos", total_items_in_this_category: 16140}
3: {id: "MLM1081", name: "Gatos", total_items_in_this_category: 89421}
4: {id: "MLM429307", name: "Insectos", total_items_in_this_category: 1644}
5: {id: "MLM1091", name: "Peces", total_items_in_this_category: 122724}
6: {id: "MLM1072", name: "Perros", total_items_in_this_category: 428550}
7: {id: "MLM1111", name: "Reptiles y Anfibios", total_items_in_this_category: 20709}
8: {id: "MLM1105", name: "Roedores", total_items_in_this_category: 15927}
9: {id: "MLM1126", name: "Otros", total_items_in_this_category: 15983}

//MLM1071  -- CATEGORIA ANIMALES Y MASCOTAS
function fetchCategories()
{
   var queryString = window.location.search;
   var urlParams = new URLSearchParams(queryString);
   var palabra = urlParams.get('idCategoria');
   
merLibre.getItems(palabra)
.then(response => 
{
    
   ui.cargarDatosCategorias(response);
   console.log(response);
   
    
}

);






}
//Se dispara cuando el documento HTML ha sido cargado
document.addEventListener('DOMContentLoaded', fetchCategories);