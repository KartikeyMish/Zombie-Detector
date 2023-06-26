
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

  
  function toggleCard() {
    const innerCard = document.querySelector('.innerCard');
    innerCard.style.transform = innerCard.style.transform === 'rotateY(180deg)' ? 'none' : 'rotateY(180deg)';
  }

  // display none to visible
  const showButton = document.getElementById('showButton');
  const myDiv = document.getElementById('myDiv');





  


  
  



