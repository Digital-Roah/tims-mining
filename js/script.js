//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

if($(window).width() > 992) {
$('.nav-drop').hover(function() {
    $('.nav-drop .dropdown-content').slideToggle();
 });
} else if($(window).width() <= 992) {
  $('.nav-drop .nav-link').css('width', '90%');
  $('#service-drop').click(function() {
    $(this).toggleClass("down");
    $('.nav-drop .dropdown-content').slideToggle();
 });
}