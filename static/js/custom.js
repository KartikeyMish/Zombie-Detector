
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

/*Dropdown Menu*/
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


// $('.dropdown-menu li').click(function () {
// var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
// msg = '<span class="msg">Hidden input value: ';
// $('.msg').html(msg + input + '</span>');
// }); 

$('.dropdown-menu li').click(function() {
  var selectedGender = $(this).text();
  var genderValue = selectedGender.toLowerCase() === "male" ? "1" : "0";
  $('#sex').val(genderValue);
});

document.addEventListener("DOMContentLoaded", function() {
  var predictions = "{human}"; // Replace "predictions" with the correct Flask object or variable name

  // Get the container element by its ID or any other appropriate selector
  var containerElement = document.getElementById("outz"); // Replace "outz" with the actual ID of your container element

  // Check the value of predictions and change the CSS accordingly
  if (predictions === "Zombie") {
    containerElement.style.color = "red";
  } else if (predictions === "Human") {
    containerElement.style.color = "green";
  }
});




  
  



