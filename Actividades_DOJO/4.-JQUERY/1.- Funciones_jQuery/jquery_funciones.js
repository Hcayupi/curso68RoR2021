$('document').ready(function() {
    var numClick = 0;
    //CLICK
    $('#parrafo1').click(function() {
        numClick += 1;
        $('#parrafo1').text("Haz hecho  " + numClick + "  click sobre mi");
    });
    $('#idClearClick').click(function() {
        numClick = 0;
        $('#parrafo1').text("Haz click sobre mi");
    });
    //FIN CLICK

    //HIDE
    $('#idhide').click(function() {
        $('#parrafo2').hide();
    });
    $('#idreestablecerHide').click(function() {

        $('#parrafo2').show();
    });
    //FIN HIDE

    //SHOW
    $("#idshow").click(function() {
        $("#parrafo3").text("Es un dinosaurio!!!");
        $("#iddinosaurio").show();
    });
    $("#idHide").click(function() {
        $("#iddinosaurio").hide();
        $("#parrafo3").text("Haz click sobre el botón Show para mostrar la imagen.");
    });
    //FIN SHOW

    //TOGGLE
    $('#idtoggle').click(function() {
        $('#idave').toggle();
    });
    //FIN TOGGLE

    //SLIDEDOWN
    $('#idslidedown').click(function() {
        $('#idosoDown').slideDown("slow");
    });
    $('#idreestablecerSlidedown').click(function() {
        $('#idosoDown').hide();
    });
    //FIN SLIDEDOWN

    //SLIDEUP
    $('#idslideup').click(function() {
        $('#idosoUp').slideUp("slow");

    });
    $('#idreestablecerSlideup').click(function() {
        $('#idosoUp').show();
    });
    //FIN SLIDEUP

    //SLIDETOGGLE
    $('#idslidetoggle').click(function() {
        $('#parrafo7').slideToggle();

    });
    //FIN SLIDETOGGLE

    //FADEIN
    $('#idfadein').click(function() {
        $('#idrobot').fadeIn();

    });

    $("#idreestablecerFadeIn").click(function() {
        $('#idrobot').hide();
    });
    //FIN FADEIN

    //FADEOUT
    $('#idfadeout').click(function() {
        $('#idbb8').fadeOut();

    });

    $("#idreestablecerfadeout").click(function() {
        $('#idbb8').show();
    });
    //FIN FADEOUT

    //ADD CLASS
    $('#idaddClass').click(function() {
        $('#parrafo10').addClass("red");
    });
    $('#idremoveClass').click(function() {
        $('#parrafo10').removeClass();
    });
    //FIN ADD CLASS

    //BEFORE
    var numParrafoBefore = 2;
    $('#idbefore').click(function() {
        $('#parrafo11').before("<p class='textoBefore'>- Párrafo: " + numParrafoBefore + "</p>");
        numParrafoBefore += 1;
    });
    $('#idreestablecerbefore').click(function() {
        $(".textoBefore").remove();
        numParrafoBefore = 2;
    });
    //FIN BEFORE

    //AFTER
    var numParrafoAfter = 2;
    $('#idafter').click(function() {
        $('#parrafo12').after("<p class='textoAfter'>- Párrafo: " + numParrafoAfter + "</p>");
        numParrafoAfter += 1;
    });
    $('#idreestablecerafter').click(function() {
        $(".textoAfter").remove();
        numParrafoAfter = 2;
    });
    //FIN AFTER
});