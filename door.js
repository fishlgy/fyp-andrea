$(document).ready(function() {
    $("#ivDoorClick").click(function () {
        if(!$("#tvLineOne").hasClass("hide")) {
            $("#tvLineOne").addClass("titleFadeOut");
            $("#tvLineOne").removeClass("titleFadeIn");
            $("#tvLineOne").addClass("hide");
            $("#tvLineTwo").removeClass("hide"); 
            $("#tvLineTwo").addClass("titleFadeInFast"); 
            addScript()
        } else if(!$("#tvLineTwo").hasClass("hide")) {
            $("#tvLineTwo").addClass("titleFadeOut");
            $("#tvLineTwo").removeClass("titleFadeInFast");
            $("#tvLineTwo").addClass("hide");
            $("#tvLineThree").removeClass("hide"); 
            $("#tvLineThree").addClass("titleFadeInFast"); 
        }
      });
  });


  function addScript() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'mouse.js');
    document.head.appendChild(script);
  }