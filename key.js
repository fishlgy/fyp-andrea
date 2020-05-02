$(document).ready(function() {
    $(".key").click(function(){
        $("#tvLineThree").addClass("titleFadeOut");
        $("#tvLineThree").removeClass("titleFadeInFast");
        $("#tvLineThree").addClass("hide");
        $("#tvLineFour").removeClass("hide"); 
        $("#tvLineFour").addClass("titleFadeInFast"); 
        $("#ivDoor").attr("src", "img/door.gif");
        fadeOutText();
        zoomIntoDoor();
    });
});

function fadeOutText(){
    setTimeout(function(){
        $("#tvLineFour").addClass("titleFadeOut");
        $("#tvLineFour").removeClass("titleFadeInFast");
        $("#tvLineFour").addClass("hide"); 
    }, 500);
}

function zoomIntoDoor() {
    setTimeout(function(){
        $("#ivDoor").addClass("zoom"); 
    }, 2000);
}

