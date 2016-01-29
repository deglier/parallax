(function($){
$.fn.scrollParallax = function(settings) {
    return this.each(function() {
      var config = {
          'speed': 20,
          'mobile': false,
          'mobileWidth': 480
      };
      if (settings){$.extend(config, settings);}

      var parallax      =   $(this);
      var height        =   parallax.height();
      var width         =   parallax.width();
      var mobileWidth   =   config.mobileWidth;
      var speed         =   config.speed;

      $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        if(width > mobileWidth) {
          if(wScroll <= height) {
            parallax.css({
              'transform' : 'translate(0px, ' + wScroll / speed +'%)'
            });
          }
        }
    });
 };
})(jQuery);
/*
(function($){
    $.scrollParallax = function(selector, settings){
        var config = {
            'speed': 20,
            'mobile': false,
            'mobileWidth': 480
        };
        if (settings){$.extend(config, settings);}

        var parallax      =   $(selector);
        var height        =   parallax.height();
        var width         =   parallax.width();
        var mobileWidth   =   config.mobileWidth;
        var speed         =   config.speed;

        $(window).scroll(function(){
          var wScroll = $(this).scrollTop();

          if(width > mobileWidth) {
            if(wScroll <= height) {
              parallax.css({
                'transform' : 'translate(0px, ' + wScroll / speed +'%)'
              });
            }
          }
        });
        console.log(mobileWidth);

        return this;
    };
})(jQuery);
*/
$(document).ready(function() {
    nice = $("html").niceScroll();
    //$.scrollParallax(".background",{'speed': 10});
    //$.scrollParallax(".logo",{'speed': 20});
    logo = $(".logo").scrollParallax();
  }
);
