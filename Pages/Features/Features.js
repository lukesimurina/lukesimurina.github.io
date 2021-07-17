function section1() {
    var elmnt = document.getElementById("sec1");
    elmnt.scrollIntoView();
}

function section2() {
    var elmnt = document.getElementById("sec2");
    elmnt.scrollIntoView();
}

function section3() {
    var elmnt = document.getElementById("sec3");
    elmnt.scrollIntoView();
}


function scrolltotop() {
    window.scrollTo(0,0);
}

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }
  
  function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

window.addEventListener("scroll", function() {
    if (window.scrollY >= (vh(40))) {
            $ ("#navbar1").fadeIn();
            $ ("#scrolltop").fadeIn();
        
    }

    if (window.scrollY < (vh(40))) {
        $ ("#navbar1").fadeOut("fast");
        $ ("#scrolltop").fadeOut("fast");
    }
  });

  