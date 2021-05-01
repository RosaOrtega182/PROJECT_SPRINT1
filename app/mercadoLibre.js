export class MercadoLibre
{
    constructor()
    {
        
    }


    
   


    getItems(keyword)
    {


        const url=`https://api.mercadolibre.com/sites/MLM/search?q=${keyword}&limit=10&include_filters=true`;

       return  fetch(url)
        .then(response =>response.json())
        .then(data =>
        {
         return data;
        })
        .catch(err=>console.log(err))
    
    }
} 