// window.onload = function(){
//    alert('insomnia');
// }

//smooth scrolling on click & fading in/out menu
$(document).ready(function(){
  
  $("a").on('click', function(event) {
       
    
   
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        window.location.hash = hash;
        // $('.menu').fadeIn(2500);
      });
    }
  });
});

$(window).scroll(function () {
    var elem = $('.menu');
    setTimeout(function() {
        elem.css({"opacity":"1","transition":"1s"});
    },1000);        
        elem.css({"opacity":"0","transition":"0.5s"});    
});

//right click on website
$(function() {
        $(this).bind("contextmenu", function(e) {
            e.preventDefault();
        });
}); 