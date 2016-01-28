var parallaxHeight = $('.parallax').height();

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if(wScroll <= parallaxHeight) {
    $('.logo').css({
      'transform' : 'translate(0px, ' + wScroll /5 +'%)'
    });
    $('.background').css({
      'transform' : 'translate(0px, ' + wScroll /20 +'%)'
    });
  }
});
