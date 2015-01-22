


//this is every thing that has to do with the style of the page
$("document").ready(function() {
    $("h1").css("font-style", "Italic");
    $("body").css("text-align", "center");
    $("p").css('color', 'purple');
    $('h1').css("background-color", "blue");
    $('h1').css('border', 'solid');
    $('h1').css('border-color', 'grey');
    $('.3').css('text-align', 'center');
    $('img').css('position', 'center');
    $('img').css('width', '200');
    $('img').css('height', 'auto');
    $('#tabs').css('opacity', '1');
    $('#hide').bind('click', hideThePage);
    $('#image').css('width', '1000');
    $('#image').css('height', 'auto');
});

//these are my background color/image
$("document").ready(function() {
    $("body").css("background-color", " grey");
    $('body').css('background-image', "url(http://www.aliciargomez.com/images/background.jpg)");

});









function hideThePage() {
    $('div').hide('slide', {}, 2500);
    $('#hide').css('visibility', 'visible');
    $('div').show('slide', {}, 2500);

}


// accordion hoverment


$(function() {

    $('.2').css('opacity', '0.5');
    $("#accordion").accordion({
        event: "click hoverintent"
    });
});

$.event.special.hoverintent = {
    setup: function() {
        $(this).bind("mouseover", jQuery.event.special.hoverintent.handler);
    },
    teardown: function() {
        $(this).unbind("mouseover", jQuery.event.special.hoverintent.handler);
    },
    handler: function(event) {
        var currentX, currentY, timeout,
                args = arguments,
                target = $(event.target),
                previousX = event.pageX,
                previousY = event.pageY;

        function track(event) {
            currentX = event.pageX;
            currentY = event.pageY;
        }
        ;

        function clear() {
            target
                    .unbind("mousemove", track)
                    .unbind("mouseout", clear);
            clearTimeout(timeout);
        }

        function handler() {
            var prop,
                    orig = event;

            if ((Math.abs(previousX - currentX) +
                    Math.abs(previousY - currentY)) < 7) {
                clear();

                event = $.Event("hoverintent");
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[ prop ] = orig[ prop ];
                    }
                }

                delete event.originalEvent;

                target.trigger(event);
            } else {
                previousX = currentX;
                previousY = currentY;
                timeout = setTimeout(handler, 100);
            }
        }

        timeout = setTimeout(handler, 100);
        target.bind({
            mousemove: track,
            mouseout: clear
        });
    }
};

  $(function() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
      icons: icons
    });
    $( "#toggle" ).button().click(function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }
    });
  });





