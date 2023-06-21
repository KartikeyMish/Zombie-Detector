
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
    // $(document).ready(function() {
    //   $('#myForm').submit(function(e) {
    //     e.preventDefault(); // Prevent the default form submission behavior
    
    //     // Get the form data
    //     var formData = $(this).serialize();
    
    //     // Send the form data using AJAX
    //     $.ajax({
    //       type: 'POST',
    //       url: '/submit', // Replace with your server-side endpoint
    //       data: formData,
    //       success: function(response) {
    //         // Handle the response from the server
    //         $('#result').html(response);
    //       }
    //     });
    //   });
    // });
  
  
