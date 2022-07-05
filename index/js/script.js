function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
  }


  $('.contentslider').owlCarousel({
    items:1,
    mouseDrag:true,
    loop:true,
    nav:true,
    rewind:true,
    autoplay:false,
    rtl:true,
});
$('.footerslider').owlCarousel({
  items:4,
  mouseDrag:true,
  loop:true,
  nav:true,
  rewind:true,
  autoplay:true,
  autoplayTimeout:4000,
  rtl:true,
});
$('.logoslider').owlCarousel({
  items:11,
  mouseDrag:true,
  loop:true,
  nav:true,
  rewind:true,
  autoplay:true,
  autoplayTimeout:5000,
  rtl:true,
});
$('.mainslider').owlCarousel({
  items:4,
  mouseDrag:true,
  loop:true,
  nav:true,
  rewind:true,
  autoplay:true,
  autoplayTimeout:5000,
  rtl:true,
});
$('.categoryslider').owlCarousel({
  items:6,
  mouseDrag:true,
  loop:true,
  nav:true,
  rewind:true,
  autoplay:true,
  autoplayTimeout:4000,
  rtl:true,
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


