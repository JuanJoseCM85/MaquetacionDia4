$(document).ready(function(){

    let myArrayPrecios = [];
    let myArrayArticulos = [];
    let total = 0;

    let camisetas = [
        {
            "producto": "Camiseta Morada",
            "descripcion": "Descripción 1",
            "precio": 120.10,
            "urlImg": "./images/Camiseta1.jpg"
        },
        {
            "producto": "Camiseta Negra",
            "descripcion": "Descripción 2",
            "precio": 10.10,
            "urlImg": "./images/Camiseta2.jpg"
        },
        {
            "producto": "Camiseta BlancaNegra",
            "descripcion": "Descripción 3",
            "precio": 20.10,
            "urlImg": "./images/Camiseta3.jpg"
        },
        {
            "producto": "Camiseta Morada2",
            "descripcion": "Descripción 4",
            "precio": 50.10,
            "urlImg": "./images/Camiseta1.jpg"
        },
        {
            "producto": "Camiseta Negra2",
            "descripcion": "Descripción 5",
            "precio": 40.10,
            "urlImg": "./images/Camiseta2.jpg"
        },
        {
            "producto": "Camiseta Negra2",
            "descripcion": "Descripción 6",
            "precio": 5.10,
            "urlImg": "./images/Camiseta3.jpg"
        }

    ];

    let pantalones = [
        {
            "producto": "Pantalon 1",
            "descripcion": "Descripción 1",
            "precio": 120.10,
            "urlImg": "./images/pantalon1.jpg"
        },
        {
            "producto": "Pantalon 2",
            "descripcion": "Descripción 2",
            "precio": 10.10,
            "urlImg": "./images/pantalon2.jpg"
        },
        {
            "producto": "Pantalon 3",
            "descripcion": "Descripción 3",
            "precio": 20.10,
            "urlImg": "./images/pantalon3.jpg"
        },
        {
            "producto": "Pantalon 4",
            "descripcion": "Descripción 4",
            "precio": 50.10,
            "urlImg": "./images/pantalon1.jpg"
        },
        {
            "producto": "Pantalon 5",
            "descripcion": "Descripción 5",
            "precio": 40.10,
            "urlImg": "./images/pantalon2.jpg"
        },
        {
            "producto": "Pantalon 6",
            "descripcion": "Descripción 6",
            "precio": 5.10,
            "urlImg": "./images/pantalon3.jpg"
        }

    ];
    let productos = camisetas;
    introContenido();

    function introContenido(){
        let contenido ="";
        for(let i=0; i< productos.length; i++){

            contenido += "<div id=card"+ (i+1) +"  class='col-4 mt-5 d-flex flex-row justify-content-center align-items-center'>\
            <div class='card' style='width: 18rem;'>\
                <img src='"+ productos[i].urlImg +"' class='card-img-top' alt='...'></img>\
                <div class='card-body d-flex flex-column justify-content-center'> \
                  <h5 id='articulo"+ (i+1) +"'class='card-title'>"+productos[i].producto+"</h5> \
                  <p class='card-text'>"+ productos[i].descripcion +"</p> \
                  <button id='boton"+ (i+1) +"' type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>Comprar</button>\
                  <div class='d-flex flex-row justify-content-center mt-2'><p id='precio"+ (i+1) +"'>"+ productos[i].precio +"</p><p>€</p></div>\
                </div>\
                </div>\
            </div>";
    
            $("#galeria").html(contenido);
         }
    }

     $("#pantalones").click(function(){
        
        productos = pantalones;
        introContenido();

     });

     $("#camisetas").click(function(){
        
        productos = camisetas;
        introContenido();

     });

     $(document).on('click','#boton1',function() {
     myArrayPrecios.push(parseFloat(($("#precio1").text())));
     myArrayArticulos.push($("#articulo1").text());
     $("#mensajeInsertadoCesta").html("Se ha insertdo " + $("#articulo1").text());
     total += parseFloat($("#precio1").text());
     $("#total").html(total.toFixed(2) + "€");

    });
    
    $(document).on('click','#boton2',function(){
        myArrayPrecios.push(parseFloat(($("#precio2").text())));
        myArrayArticulos.push($("#articulo2").text());
        $("#mensajeInsertadoCesta").html("Se ha insertdo " + $("#articulo2").text());
        total += parseFloat($("#precio2").text());
        $("#total").html(total.toFixed(2) + "€");
    });
    
    $(document).on('click','#boton3',function(){
        myArrayPrecios.push(parseFloat(($("#precio3").text())));
        myArrayArticulos.push($("#articulo3").text());
        $("#mensajeInsertadoCesta").html("Se ha insertdo " + $("#articulo3").text());
        total += parseFloat($("#precio3").text());
        $("#total").html(total.toFixed(2) + "€");
    });
       
    $(document).on('click','#boton4',function(){
        myArrayPrecios.push(parseFloat(($("#precio4").text())));
        myArrayArticulos.push($("#articulo4").text());
        $("#mensajeInsertadoCesta").html("Se ha insertdo " + $("#articulo4").text());
        total += parseFloat($("#precio4").text());
        $("#total").html(total.toFixed(2) + "€");
    });

    
    $(document).on('click','#boton5',function(){
        myArrayPrecios.push(parseFloat(($("#precio5").text())));
        myArrayArticulos.push($("#articulo5").text());
        $("#mensajeInsertadoCesta").html("Se ha insertdo " + $("#articulo5").text());
        total += parseFloat($("#precio5").text());
        $("#total").html(total.toFixed(2) + "€");
    });
           
    // $("#boton6").click(function() {
    //     myArrayPrecios.push(parseFloat(($("#precio6").text())));
    //     myArrayArticulos.push($("#articulo6").text());
    //     $("#mensajeInsertadoCesta").html("Se ha insertdo " + $("#articulo6").text());
    //     total += parseFloat($("#precio6").text());
    //     $("#total").html(total.toFixed(2) + "€");
    // });

    $(document).on('click','#boton6',function(){
        myArrayPrecios.push(parseFloat(($("#precio6").text())));
        myArrayArticulos.push($("#articulo6").text());
        $("#mensajeInsertadoCesta").html("Se ha insertdo " + $("#articulo6").text());
        total += parseFloat($("#precio6").text());
        $("#total").html(total.toFixed(2) + "€");
    });

    $("#verCarrito").click(function(){
        if (myArrayArticulos.length > 0){
            //Si hay articulos en la cesta;
            let mensaje = "<ul>";

            for(let i=0; i< myArrayArticulos.length; i++){
                mensaje += "<li>"+ myArrayArticulos[i] +" - "+ myArrayPrecios[i]+"€</li>"
            }
            mensaje += "</ul><p>Total: "+ total.toFixed(2) +"€</p>";
            $("#mensajeInsertadoCesta2").html(mensaje);
        }else{
            //No hay articulos en la cesta
            $("#mensajeInsertadoCesta2").html("<p>No hay articulos en la cesta</p>");
        }
        
        
    });

    $("#vaciarCarrito").click(function(){
        myArrayPrecios = [];
        myArrayArticulos = [];
        total = 0;

        $("#mensajeInsertadoCesta2").html("<p>No hay articulos en la cesta</p>");
        $("#total").html("0.00€");

    });



});