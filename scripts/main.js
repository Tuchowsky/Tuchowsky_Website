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
      });
    }
//POWIĘKSZANIE LITER
  // $('a').click(function() {
  //   this.style.fontSize = '30px';
  //   $(this).siblings().css('font-size', '10px');
  // });
  });
//MOVING CIRCLES
  var clickCount = 0;
  $('.menu-box').click(function() {
    if (clickCount === 0){
      $('.circle-back').css({'margin-left': '0vw', 'transition': 'all 1s'});
      $('.circle-forward').css({'margin-left': '3.7vw', 'transition': 'all 1s' });
      clickCount++;
      
    } else if (clickCount === 1){
      $('.circle-back').css({'margin-left': '3.7vw', 'transition': 'all 1s'});
      $('.circle-forward').css({'margin-left':'0vw', 'transition': 'all 1s' });
      clickCount--;
    }
    $('.menu-list').slideDown(1000);
  });


  setTimeout(function(){
    $('.tracks-list').fadeIn(500);
  }, 5000);

});

$(window).scroll(function () {
    var elem = $('.menu');
    setTimeout(function() {
        elem.css({"opacity":"1","transition":"1s"});
    },1000);        
        elem.css({"opacity":"0","transition":"0.5s"});    
});

//right click on website
// $(function() {
//         $(this).bind("contextmenu", function(e) {
//             e.preventDefault();
//         });
// }); 
