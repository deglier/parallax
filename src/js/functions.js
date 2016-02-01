function parallax(){
  var el			=		document.querySelectorAll(".parallax-item");
  var scroll	=		window.pageYOffset;
  for (var i = 0; i < el.length; i++) {
    if(scroll < el[i].offsetHeight){
      console.log("continua: "+ i);
      el[i].style.transform = 'translate(0%,' + scroll/((i+1)*10) + '%)';
    }else{
      console.log("nao continua :)");
    }
    //console.log('elemento: "' + el[i] + '"');
    //console.log(el[i].style.transform = 'translate(0%,' + scroll/((i+10)*10) + '%)');
  }
  //fundo.style.transform = 'translate(0%,' + scroll/speed + '%)';

}
	document.addEventListener("scroll", parallax);

$(document).ready(function() {
    nice = $("html").niceScroll();
    //$.scrollParallax(".background",{'speed': 10});
    //$.scrollParallax(".logo",{'speed': 20});
    //logo = $(".logo").scrollParallax();
  }
);
