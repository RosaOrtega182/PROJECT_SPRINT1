export class MercadoLibre
{
    constructor()
    {
        
    }


    
   


    getItems(id_categoria)
    {


        const url=`https://api.mercadolibre.com/sites/MLM/search?category=${id_categoria}`;

       return  fetch(url)
        .then(response =>response.json())
        .then(data =>
        {
         return data;
        })
        .catch(err=>console.log(err))
    
    }
} 