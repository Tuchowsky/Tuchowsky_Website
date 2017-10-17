$(document).ready(function(){
  
  var circleBack = $('.circle-back');
  var lineBack = $('.line-back');
  var circleForward = $('.circle-forward');
  var lineForward = $('.line-forward');
  var lineUnder = $('.line-under-container');
  var lineUnderRotate = $('.line-under-rotate');
  var menuLink = $('.menu-link');
  var menuBox = $('.menu');
  var clickCount = 0;

  function showMenuButton(){
    setTimeout(function(){ 
      $('.menu-list').slideUp(1000);
      circleBack.fadeTo(1000, 1);
      lineBack.fadeTo(1000, 1);
      circleForward.fadeTo(1000, 1);
      lineForward.fadeTo(1000, 1);
      removeLineAnimation();
      lineUnder.css({'display': 'none'});
    }, 20000);
  }

  function rotateLine(){
    setTimeout(function(){
      lineUnderRotate.css({'transform': 'rotate(0deg)'});
    }, 17000);
  }

  function underLineFade(){
    lineUnder.delay(19000).fadeTo(1000, 0);
  }

  function linesFadeOut(){
    lineBack.delay(1000).fadeTo(1000, 0);
    lineForward.delay(1000).fadeTo(1000, 0);
  }

  function underLineShow(){
    lineUnder.fadeTo(1000, 1);
  }

  function underLineAnimation(){
    lineUnder.addClass('anim-line');
    lineUnderRotate.addClass('anim-line-rot');
  }

  function removeLineAnimation(){
    lineUnder.removeClass('anim-line');
    lineUnderRotate.removeClass('anim-line-rot');
  }

  // $('.menu-list').click(function(){
  //   children(this).css({'font-weight': 'bold'});
  // });

  $('.menu-box').click(function() {
    if (clickCount === 0){
      circleBack.css({'margin-left': '0vw', 'transition': 'all 1s'}).delay(1000).fadeTo(500, 0);
      circleForward.css({'margin-left': '3.7vw', 'transition': 'all 1s'}).delay(1000).fadeTo(500, 0);
      lineUnder.css({'display': 'block'});
      linesFadeOut();
      clickCount++;
      underLineAnimation();
      underLineShow();
    } else if (clickCount === 1){
      circleBack.css({'margin-left': '3.7vw', 'transition': 'all 1s'}).delay(1000).fadeTo(500, 0);
      circleForward.css({'margin-left':'0vw', 'transition': 'all 1s'}).delay(1000).fadeTo(500, 0);
      lineUnder.css({'display': 'block'});
      linesFadeOut();
      clickCount--;
      underLineAnimation();
      underLineShow();
    }

    $('.menu-list').slideDown(1000);
    setTimeout(function(){
      lineUnderRotate.css({'transform': 'rotate(-70deg)'});
    });
  });
 
  function clearTimer(){
    clearTimeout();
  }

  menuBox.mouseleave(function(){
    showMenuButton();
    rotateLine();
    underLineFade();
    clearTimer();
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
      addSmallMenu();
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


// $(window).scroll(function () {
//     var elem = $('.menu');
//     setTimeout(function() {
//         elem.css({"opacity":"1","transition":"1s"});
//     },1000);        
//         elem.css({"opacity":"0","transition":"0.5s"});    
// });

// $(function() {
//         $(this).bind("contextmenu", function(e) {
//             e.preventDefault();
//         });
// }); 
