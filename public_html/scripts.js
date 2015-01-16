



$("document").ready(function() {
  $("h1").css("font-style", "Italic");
  $("body").css("text-align", "center");
  $("p").css('color', 'purple');
  $('h1').css("background-color", "blue"); 
  $('h1').css('border', 'solid');
  $('h1').css('border-color', 'grey');
  $('.3').css('text-align', 'center');
});



//these are my background color/image
$("document").ready(function() {
    $("body").css("background-color", " grey");
    $('body').css('background-image',"url(http://www.aliciargomez.com/images/background.jpg)");
       
});



//$('#replaceWText').bind('click', replaceWText);
//$('#randPara').bind('click', addAPara);
//$('#').bind('click', );

$('.h3').bind('visibility', 'visible');

$('.h3').bind('click', hideTheText);
$('.h3').bind('click', showTheText);
$('.2').css('opacity', '0.5');




function hideTheText(){
  $('.h2').hide('slide', {}, 2500);
  
}

function showTheText(){
    $('.h2').show('fold', {}, 2500)
    
}



 
 
 $(function() {
    $( "#accordion" ).accordion({
      event: "click hoverintent"
    });
  });
  
  $.event.special.hoverintent = {
    setup: function() {
      $( this ).bind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    teardown: function() {
      $( this ).unbind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    handler: function( event ) {
      var currentX, currentY, timeout,
        args = arguments,
        target = $( event.target ),
        previousX = event.pageX,
        previousY = event.pageY;
 
      function track( event ) {
        currentX = event.pageX;
        currentY = event.pageY;
      };
 
      function clear() {
        target
          .unbind( "mousemove", track )
          .unbind( "mouseout", clear );
        clearTimeout( timeout );
      }
 
      function handler() {
        var prop,
          orig = event;
  
  if ( ( Math.abs( previousX - currentX ) +
            Math.abs( previousY - currentY ) ) < 7 ) {
          clear();
 
          event = $.Event( "hoverintent" );
          for ( prop in orig ) {
            if ( !( prop in event ) ) {
              event[ prop ] = orig[ prop ];
            }
          }
        
          delete event.originalEvent;
 
          target.trigger( event );
        } else {
          previousX = currentX;
          previousY = currentY;
          timeout = setTimeout( handler, 100 );
        }
      }
 
      timeout = setTimeout( handler, 100 );
      target.bind({
        mousemove: track,
        mouseout: clear
      });
    }
  };
  
  
  
  
//  extendy thing
  
  $(function() {
    var state = true;
    $( "#button" ).click(function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "purple",
          color: "blue",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "blue",
          color: "purple",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  });
