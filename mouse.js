$(document).ready(function(){
    var x, y;
    var originalBG = $("#clickLayer").css("background-color");
    var lightColor = $(".light").css("background-color");
    var gradientSize = 30;

    $('#clickLayer').mousemove(function(e) {
        x  = e.pageX - this.offsetLeft;
        y  = e.pageY - this.offsetTop;
        xy = x + " " + y; 
        
        bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " + originalBG;
        bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

        $(this)
            .css({ background: bgWebKit })
            .css({ background: bgMoz });

    }).mouseleave(function() {			
        // remove gradient
        $(this).css({ background: originalBG });
    });
  
});