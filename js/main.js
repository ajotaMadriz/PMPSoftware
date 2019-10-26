//******************** swiper ******************
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
// ---------- boton scrollTop-------------
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('.boton-top').fadeIn();
        }else{
            $('.boton-top').fadeOut();
        }
    });
});