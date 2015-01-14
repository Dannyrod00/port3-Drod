



$("document").ready(function() {
  $("h1").css("font-style", "Italic");
  $("body").css("text-align", "center");
  $("p").css('color', 'purple');
  $('h1').css("background-color", "blue"); 
  $('h1').css('border', 'solid');
});

//these are my background color/image
$("document").ready(function() {
//    $("body").css("background-color", " grey");
//    $('body').css('background-image',"url(http://www.saidthegramophone.com/images/Deal_with_it_dog_gif.gif)");
//       
});


//$('#replaceWText').bind('click', replaceWText);
//$('#randPara').bind('click', addAPara);
//$('#').bind('click', );

$('#show').bind('visibility', 'visible');

$('#hide').bind('click', hideTheText);
$('#show').bind('click', showTheText);



function hideTheText(){
  $('.h2').hide('slide', {}, 2500);
  
}

function showTheText(){
    $('.h2').show('fold', {}, 2500)
    
}



 
 
 