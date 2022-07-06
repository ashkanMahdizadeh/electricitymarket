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
  items:3,
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
$('.productslider').owlCarousel({
  items:5,
  mouseDrag:true,
  loop:true,
  nav:true,
  rewind:true,
  autoplay:false,
  rtl:true,
});
$('.lampslider').owlCarousel({
  items:6,
  mouseDrag:true,
  loop:false,
  nav:true,
  rewind:true,
  autoplay:false,
  rtl:true,
});
$('.multislider').owlCarousel({
  items:3,
  mouseDrag:true,
  loop:true,
  nav:true,
  rewind:true,
  autoplay:true,
  autoplayTimeout:4000,
  rtl:true,
});
$('.bannerslider').owlCarousel({
  items:1,
  mouseDrag:true,
  loop:true,
  nav:true,
  rewind:true,
  autoplay:false,
  rtl:true,
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


