//------------- Boton de menu
$(document).ready(function(){
    $('.menu-icon').on('click', function(){
        $('nav ul').toggleClass('showing');
    });
});
//----------- Efecto scrolling
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('blue');
    }
    else{
        $('nav').removeClass('blue');
    }
})
// ------------- animacion de las secciones al hacer scroll----------------

AOS.init({
    offset: 200,
    duration: 2000,
});