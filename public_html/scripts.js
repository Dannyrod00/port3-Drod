



$("document").ready(function() {
  $("h1").css("font-style", "italic");
  $(".1").css("text-align", "center");
  $("p").css('color', 'purple');
  $('h1').css("background-color", "blue"); 
  $('h1').css('border', 'solid');
});

//these are my background color/image
$("document").ready(function() {
    $("body").css("background-color", " grey");
    $('body').css('background-image',"url(http://www.saidthegramophone.com/images/Deal_with_it_dog_gif.gif)");
    $("body").css("background-size","cover");
    
    });  
    
    
    $("document").ready(function() {
        $('h1').bind('mouseOver', AboutMe);
        
    });
    
    function AboutMe(){
        $("p")("this is my about me page");
        
    }
    
 
 
 