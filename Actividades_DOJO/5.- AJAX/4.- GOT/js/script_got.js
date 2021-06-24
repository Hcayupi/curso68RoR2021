/*author: Hcayupi*/

$(document).ready(function() {
    var arrayGOT = [];
    //Agrega las imágenes de cada casa
    $("#container").append("<img keyword=fury  id=baratheon src=./imagenes/baratheon.png>");
    $("#container").append("<img keyword=roar id=lannister src=./imagenes/lannister.jpg>");
    $("#container").append("<img keyword=coming id=stark src=./imagenes/stark.jpg>");
    $("#container").append("<img keyword=blood id=targaryen src=./imagenes/targaryen.jpg>");

    for (let i = 1; i <= 378; i++) { //Se precarga los 378 registros en un array
        $.ajax({
            url: "https://anapioficeandfire.com/api/houses/" + i,
            async: true,
            beforeSend: function() {
                $('#precarga').addClass('imgLoading');
                console.log("Cargando datos...");
            },
            success: function(respuesta) {
                arrayGOT.push(respuesta); //Se agrega cada registro en un array
                console.log(i + " registro");
            },
            complete: function() {
                $('#precarga').removeClass('imgLoading');
                console.log("Carga completada...");
            }
        });
    }

    $('img').click(function() { // IMG espera el evento Click
        $('#precarga').addClass('imgLoading'); //Se muestra un gif de carga de datos en caso de que el proceso tome más tiempo
        var nombreCasa = $(this).attr('id');
        var palabraClave = $(this).attr('keyword');

        var armadoDePagina = "";

        armadoDePagina += "<thead>";
        armadoDePagina += "<tr>";
        armadoDePagina += "<th>Name</th>";
        armadoDePagina += "<th>Words</th>";
        armadoDePagina += "<th>Titles</th>";
        armadoDePagina += "</tr>";
        armadoDePagina += "</thead>";

        $("#detalleCasaGot").html(armadoDePagina); //limpia y arma nuevamente el contenido de la tabla para mostrar nuevo registro

        /* Búsqueda del registro en el array previamente cargado*/
        for (let i = 0; i < arrayGOT.length; i++) {

            let cadenaNombre = arrayGOT[i].name.toLowerCase(); //Transforma la cadena a minúscula
            let buscaNombre = cadenaNombre.indexOf(nombreCasa); //busca una coincidencia dentro de la cadena
            let cadenaFrase = arrayGOT[i].words.toLowerCase();
            let buscaKeyWord = cadenaFrase.indexOf(palabraClave);

            let armadoDePagina = "";
            if (buscaKeyWord !== -1 && buscaNombre !== -1) {
                /* Arma la filas y columas de la tabla con el o los registros*/
                armadoDePagina += "<tr>";
                armadoDePagina += "<td>" + arrayGOT[i].name + "</td>";
                armadoDePagina += "<td>" + arrayGOT[i].words + "</td>";
                armadoDePagina += "<td>" + arrayGOT[i].titles + "</td>";
                armadoDePagina += "</tr>";
                $("#detalleCasaGot").append(armadoDePagina); // Agrega la nueva fila a la tabla
            } else
                console.log("No encontré lo que estás buscando"); //Seguimiento en consola

            if (i == 377) {
                $('#precarga').removeClass('imgLoading');
            }
            console.log(i); //Seguimiento en consola
        }
    });
});