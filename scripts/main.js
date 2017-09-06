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

//click on menu button - moving circles
window.onload = function(){
  var menu = document.querySelector('.menu-box');
  var circleBack = document.querySelector('.circle-back');
  var circleForward= document.querySelector('.circle-forward');

  console.log(menu);

  clickCount = 0;

  menu.onclick = function(){
    if (clickCount === 0){
      circleBack.style.marginLeft = '0vw';
      circleBack.style.WebkitTransition = 'all 2s';
      circleForward.style.marginLeft = '3.7vw';
      circleForward.style.WebkitTransition = 'all 2s';
      clickCount++;
    } else if (clickCount === 1){
      circleBack.style.marginLeft = '3.7vw';
      circleBack.style.WebkitTransition = 'all 2s';
      circleForward.style.marginLeft = '0vw';
      circleForward.style.WebkitTransition = 'all 2s';
      clickCount--;
    }
  };
};
// $('.row').click(function() {
//   alert('działa');
// });