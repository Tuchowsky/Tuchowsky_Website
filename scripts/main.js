$(document).ready(function(){
  
  var clickCount = 0;
  $('.menu-box').click(function() {
    if (clickCount === 0){
      $('.circle-back').css({'margin-left': '0vw', 'transition': 'all 1s'});
      $('.circle-forward').css({'margin-left': '3.7vw', 'transition': 'all 1s'});
      clickCount++;
      
    } else if (clickCount === 1){
      $('.circle-back').css({'margin-left': '3.7vw', 'transition': 'all 1s'});
      $('.circle-forward').css({'margin-left':'0vw', 'transition': 'all 1s'});
      clickCount--;
    }
    $('.menu-list').slideDown(1000);
  });
 
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
  });

  var tracklist = [
    '<iframe width="150%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331253335&amp;color=%23c7beb9&amp;inverse=true&amp;auto_play=false&amp;"></iframe>',
    '<iframe width="150%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/286714403&amp;color=%23c7beb9&amp;inverse=true&amp;auto_play=false&amp;show_user=true"></iframe>',
    '<iframe width="150%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/297325018&amp;color=%23c7beb9&amp;inverse=true&amp;auto_play=false&amp;show_user=true"></iframe>',
    '<iframe width="150%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/266022062&amp;color=%23c7beb9&amp;inverse=true&amp;auto_play=false&amp;show_user=true"></iframe>',
    '<iframe width="150%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/269566424&amp;color=%23c7beb9&amp;inverse=true&amp;auto_play=false&amp;show_user=true"></iframe>'
  ];

  setTimeout(function(){
    for(var i = 0; i < tracklist.length; i++){
      $('<ul><li>' + tracklist[i] + '</li></ul>').appendTo('.tracks-list').fadeIn(500);
    }  
  }, 5000);


  var menu = [
    '<a href="#home">HOME</a>', '<a href="#about">ABOUT</a>', '<a href="#music">MUSIC</a>', '<a href="#contact">CONTACT</a>'
  ];


  var click = 0;
  $('.menu-small').click(function(){
    if (click === 0){
      $('.line-forward-small').css({'transform':'rotate(18.5deg)', 'transform-origin':'100%', 'transition':'0.5s'});
      $('.line-back-small').css({'transform':'rotate(-18.5deg)', 'transform-origin':'100%', 'transition':'0.5s'});
      $('.circle-back-small').css({'display':'none'});
      $('.circle-forward-small').css({'display':'none'});
      $('.hidden-nav').css({'display':'block'}).slideDown('slow');
      addSmallMenu()
      click++;
    } else if (click === 1){
      $('.line-forward-small').css({'transform':'rotate(0)', 'transform-origin':'100%', 'transition':'0.5s'});
      $('.line-back-small').css({'transform':'rotate(0)', 'transform-origin':'100%', 'transition':'0.5s'});
      $('.circle-back-small').css({'display':'block'}).fadeIn('slow');
      $('.circle-forward-small').css({'display':'block'});
      $('.hidden-nav').css({'display':'block'});
      $('.overlay-content').remove();
      click--;
    }
  });

  function addSmallMenu(){
    for(var i = 0; i < menu.length; i++){
      $('<ul class="overlay-content"><li>' + menu[i] + '</li></ul>').appendTo('.hidden-nav-overlay');
    }
  }
  
});


$(window).scroll(function () {
    var elem = $('.menu');
    setTimeout(function() {
        elem.css({"opacity":"1","transition":"1s"});
    },1000);        
        elem.css({"opacity":"0","transition":"0.5s"});    
});

$(function() {
        $(this).bind("contextmenu", function(e) {
            e.preventDefault();
        });
}); 
