//CONSUMIENDO APIS

//1. DECLARAR VARIABLE PARA ALMACENAR URL API
let url="https://api.spotify.com/v1/artists/1ZwdS5xdxEREPySFridCfh/top-tracks?market=US"

//2. ALMACENAR EN UNA VARIABLE O VARIAS DATOS DE CONTROL NECESARIOS
 let token="Bearer BQClPOo3JdcD08skkqqQD5qMgYFRNLq6nOpVWl4PTFOSN9vggxJbqbEtxReo7-C9snJUAZd6xsgtHBZzMXnS02Im7ujFHUXTeDFM1hmxgDSTX7MBb5s"

//3. CONSTRUIR LA PETICION QUE SE VA A ENVIAR 
let peticion={
    method: "GET",
    headers:{
        Authorization:token
    } 
}

//4. EJECUTAR EL CONSUMO DEL API

fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})