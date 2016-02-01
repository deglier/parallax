
/* Calls jquery functions */
$(document).ready(function() {
  nice = $("html").niceScroll();
});

/**
* @author: Deglier Amorim
**/
/* parallax effect */
function parallax(seletor, velocidade, limite, mobileWidth) {
  var scroll = window.pageYOffset;
  var el     = document.querySelectorAll(seletor);
  var width  = document.body.offsetWidth;
  if(width < mobileWidth){
  }else{
    for (var i = 0; i < el.length; i++) {
      if(scroll < limite){
        el[i].style.transform = 'translate(0%,' + scroll/(velocidade*(i+1)) + '%)';
      }
    }
  }
}
/* create event for parallax */
window.onscroll = function(){
  parallax('.background', 10, 1000, 480);
  parallax('.logo', 8, 1200, 480);
};
//document.addEventListener("scroll", parallax);
