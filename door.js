$(document).ready(function() {
    $("#ivDoorClick").click(function () {
        if(!$("#tvLineOne").hasClass("hide")) {
            $("#tvLineOne").addClass("titleFadeOut");
            $("#tvLineOne").removeClass("titleFadeIn");
            $("#tvLineOne").addClass("hide");
            $("#tvLineTwo").removeClass("hide"); 
            $("#tvLineTwo").addClass("titleFadeInFast"); 
            addKeySearchScript();
            showHoverEffect();
            changeText();
        }
      });
  });

  function changeText(){ 
      setTimeout(function(){
               $("#tvLineTwo").addClass("titleFadeOut");
               $("#tvLineTwo").removeClass("titleFadeInFast");
               $("#tvLineTwo").addClass("hide");
               $("#tvLineThree").removeClass("hide"); 
               $("#tvLineThree").addClass("titleFadeInFast"); 
      }, 2000);
  }

  function showHoverEffect(){ 
      setTimeout(function(){
          addKeyFoundScript();
          addKeyHoverEffect();
      },8000);
  }

  function addKeySearchScript() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'mouse.js');
    document.head.appendChild(script);
  }

  function addKeyFoundScript() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'key.js');
    document.head.appendChild(script);
  }

  function addKeyHoverEffect() {
      $(".key").addClass("effect-hover");
  }
