$(document).ready(function() {
    placeKeyRandomly()
})

function placeKeyRandomly() {
    var topMax = 300;  
    var leftMax = 1200;  
    
    var randomTop =  Math.floor(Math.random() * (topMax)) + 1;
    var randomLeft =  Math.floor(Math.random() * (leftMax)) + 1; 

    $(".key").css({top: randomTop, left: randomLeft});
}