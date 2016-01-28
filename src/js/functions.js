var nice            =   false;
var parallaxHeight  =   $('.parallax').height();
var parallaxWidth   =   $('.parallax').width();
var mobileWidth    =   '480';
$(document).ready(
  function() {
    nice = $("html").niceScroll();
  }
);

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if(parallaxWidth > mobileWidth) {
    if(wScroll <= parallaxHeight) {
      $('.logo').css({
        'transform' : 'translate(0px, ' + wScroll /3 +'%)'
      });
      $('.background').css({
        'transform' : 'translate(0px, ' + wScroll /20 +'%)'
      });
    }
  }
});
