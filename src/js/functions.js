
/* Calls jquery functions */
$(document).ready(function() {
  nice = $("html").niceScroll();
}
);



/**
* @author: Deglier Amorim
**/
/* parallax effect */
function parallax(){
  var el			=		document.querySelectorAll(".parallax-item");
  var scroll	=		window.pageYOffset;
  for (var i = 0; i < el.length; i++) {
    if(scroll < el[i].offsetHeight){
      el[i].style.transform = 'translate(0%,' + scroll/((i+1)*10) + '%)';
    }
  }

}

/* create event for parallax */
document.addEventListener("scroll", parallax);
