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
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:1,
          nav:true,
      }
    }
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
  responsive:{
    0:{
        items:3,
        nav:true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:4,
        nav:true,
    }
  }
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
  responsive:{
    0:{
        items:4,
        nav:true
    },
    600:{
        items:4,
        nav:false
    },
    1000:{
        items:11,
        nav:true,
    }
  }
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
  responsive:{
    0:{
        items:2,
        nav:true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:6,
        nav:true,
    }
  }
});
$('.productslider').owlCarousel({
  items:5,
  mouseDrag:true,
  loop:true,
  nav:true,
  rewind:true,
  autoplay:false,
  rtl:true,
  responsive:{
    0:{
        items:2,
        nav:true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:5,
        nav:true,
    }
  }
});
$('.lampslider').owlCarousel({
  items:6,
  mouseDrag:true,
  loop:false,
  nav:true,
  rewind:true,
  autoplay:false,
  rtl:true,
  responsive:{
    0:{
        items:2,
        nav:true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:6,
        nav:true,
    }
  }
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
  responsive:{
    0:{
        items:2,
        nav:true
    },
    600:{
        items:2,
        nav:false
    },
    1000:{
        items:3,
        nav:true,
    }
  }
});
$('.bannerslider').owlCarousel({
  items:1,
  mouseDrag:true,
  loop:true,
  nav:true,
  rewind:true,
  autoplay:false,
  rtl:true,
  responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:1,
        nav:false
    },
    1000:{
        items:1,
        nav:true,
    }
  }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var countDownDate = new Date("Jan 30, 2023 00:00:00").getTime();

var myfunc = setInterval(function() {

  var now = new Date().getTime();
  var timeleft = countDownDate - now;
      
  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      
  // Result is output to the specific element
  document.getElementById("days").innerHTML = days 
  document.getElementById("hours").innerHTML = hours 
  document.getElementById("mins").innerHTML = minutes  
  document.getElementById("secs").innerHTML = seconds  
      
  // Display the message when countdown is over
  if (timeleft < 0) {
      clearInterval(myfunc);
      document.getElementById("days").innerHTML = ""
      document.getElementById("hours").innerHTML = "" 
      document.getElementById("mins").innerHTML = ""
      document.getElementById("secs").innerHTML = ""
      document.getElementById("end").innerHTML = "TIME UP!!";
  }
  }, 1000);


