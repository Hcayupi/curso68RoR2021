$('document').ready(function() {
    var numClick = 0;
    //CLICK
    $('#idParrafo1').click(function() {
        numClick += 1;
        $('#idParrafo1').text("Haz hecho  " + numClick + "  click sobre mi");
    });
    $('#idClearClick').click(function() {
        numClick = 0;
        $('#idParrafo1').text("Haz click sobre mi");
    });
    //FIN CLICK

    //HIDE
    $('#idHide').click(function() {
        $('#idParrafo2').hide(2000);
    });
    $('#idClearHide').click(function() {

        $('#idParrafo2').show();
    });
    //FIN HIDE

    //SHOW
    $("#idShow").click(function() {
        $("#idParrafo3").text("Es un dinosaurio!!!");
        $("#idDinosaurio").show(2000);
    });
    $("#idClearShow").click(function() {
        $("#idDinosaurio").hide();
        $("#idParrafo3").text("Haz click sobre el botón Show para mostrar la imagen.");
    });
    //FIN SHOW

    //TOGGLE
    $('#idToggle').click(function() {
        $('#idAve').toggle();
    });
    //FIN TOGGLE

    //SLIDEDOWN
    $('#idSlidedown').click(function() {
        $('#idOsoDown').slideDown("slow");
    });
    $('#idClearSlidedown').click(function() {
        $('#idOsoDown').hide();
    });
    //FIN SLIDEDOWN

    //SLIDEUP
    $('#idSlideup').click(function() {
        $('#idOsoUp').slideUp("slow");

    });
    $('#idClearSlideup').click(function() {
        $('#idOsoUp').show();
    });
    //FIN SLIDEUP

    //SLIDETOGGLE
    $('#idSlidetoggle').click(function() {
        $('#idParrafo7').slideToggle();

    });
    //FIN SLIDETOGGLE

    //FADEIN
    $('#idFadein').click(function() {
        $('#idRobot').fadeIn();

    });

    $("#idClearFadeIn").click(function() {
        $('#idRobot').hide();
    });
    //FIN FADEIN

    //FADEOUT
    $('#idFadeout').click(function() {
        $('#idBb8').fadeOut();

    });

    $("#idClearFadeOut").click(function() {
        $('#idBb8').show();
    });
    //FIN FADEOUT

    //ADD CLASS
    $('#idAddClass').click(function() {
        $('#idParrafo10').addClass("red");
    });
    $('#idClearClass').click(function() {
        $('#idParrafo10').removeClass();
    });
    //FIN ADD CLASS

    //BEFORE
    var numParrafoBefore = 2;
    $('#idBefore').click(function() {
        $('#idParrafo11').before("<p class=textoBefore>- Párrafo: " + numParrafoBefore + "</p>");
        numParrafoBefore += 1;
    });
    $('#idClearBefore').click(function() {
        $(".textoBefore").remove();
        numParrafoBefore = 2;
    });
    //FIN BEFORE

    //AFTER
    var numParrafoAfter = 2;
    $('#idAfter').click(function() {
        $('#idParrafo12').after("<p class=textoAfter>- Párrafo: " + numParrafoAfter + "</p>");
        numParrafoAfter += 1;
    });
    $('#idClearAfter').click(function() {
        $(".textoAfter").remove();
        numParrafoAfter = 2;
    });
    //FIN AFTER

    //APPEND
    var numParrafoAppend = 1;
    $('#idAppend').click(function() {
        $('#idParrafo13').append(" texto " + numParrafoAppend);
        numParrafoAppend += 1;
    });
    $('#idClearAppend').click(function() {
        $('#idParrafo13').empty();
        $('#idParrafo13').append("Este texto está dentro de la etiqueta p (párrafo).");
        numParrafoAppend = 1;
    });
    //FIN APPEND

    //HTML:
    $("#idHtml").click(function() {
        $('#idParrafo14').html('<img src=./imagen/joda.png>');
        $('img').attr('width', '400');
        $('img').attr('alt', 'joda');
    });
    $('#idClearHtml').click(function() {
        $('#idParrafo14').html("Este texto está dentro de la etiqueta p (párrafo).");
    });
    //FIN HTML
    var tamagnoImg = 15;
    //ATTR
    $('#idSumarPx').click(function() {
        $('#idImg').attr('width', tamagnoImg);
        tamagnoImg += 5;
    });

    $('#idChangeImg').click(function() {
        $('#idImg').attr('src', "./imagen/leon.png");
        $('#idImg').attr('alt', "leon");
    });
    $('#idClearAttr').click(function() {
        $('#idImg').attr('src', "./imagen/gato.png");
        $('#idImg').attr('alt', "gato");
        $('#idImg').attr('width', "10");
        tamagnoImg = 15;
    });
    //FIN ATTR

    //VAL
    var intervalo;
    $('#idVal').click(function() {
        //.val() retorna un string, con el contenido del input
        var usuario = $('#idUsuario').val();
        var password = $('#idPass').val();
        ocultarMensaje();

        if (usuario.length == 0) {
            setMensajeError("Debe ingresar el nombre de usuario");
            $('#idUsuario').val("");
        } else if (!isNaN(usuario)) {
            setMensajeError("El usuario no pueder ser numérico");
            $('#idUsuario').val("");
        }
        if (password.length == 0) {
            setMensajeError("Debe ingresar una contraseña");
            $('#idPass').val("");

        } else if (usuario != "admin" || password != "1234") {
            setMensajeError("Los datos son incorrectos");
            $('#idUsuario').val("");
            $('#idPass').val("");
        } else {
            setMensajeExito("Los datos son correctos");
        }

    });

    $('#idUsuario').click(function() {
        ocultarMensaje();
        $(this).val("");
    });

    $('#idPass').click(function() {
        ocultarMensaje();
        $(this).val("");
    });

    function setMensajeError(msg) {
        $('#idLogin').after('<p id=idAlerta>' + msg + '</p>');
        $('#idAlerta').addClass('alertaMsg');
    }

    function setMensajeExito(msg) {
        $('#idLogin').after('<p id=idExito>' + msg + '</p>');
        $('#idExito').addClass('exitoMsg');
    }

    function ocultarMensaje() {
        //Verifica si el elemento existe
        if ($('.alertaMsg').length > 0) {
            $('.alertaMsg').remove();
        }
        if ($('.exitoMsg').length > 0) {
            $('.exitoMsg').remove();
        }
    }

    $('#idRestablecerVal').click(function() {
        ocultarMensaje();
        $('#idPass').val("");
        $('#idUsuario').val("");
    });

    //FIN VAL

    // TEXT
    $('#idText').click(function() {
        $('#idParrafo17').text("La piña. xD");
    });
    $('#idClearText').click(function() {
        $('#idParrafo17').text("Tiene escamas pero no es un pez, tiene corona pero no es un rey. ¿Qué es?");
    });

    //FIN TEXT
});