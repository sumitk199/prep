$(document).ready(function () {
  $(".slides ul").slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    arrows: false,
  });
});

// preloader
$(document).ready(function () {
  $(".preloader").fadeOut(4000);

  // pop-up-open
  $("#login-btn").click(function () {
    $(".login-popup-wrap, .overlay").fadeIn(500);
  });
  // pop-up-close
  $(".close, .overlay").click(function () {
    $(".login-popup-wrap, .overlay, .create-account-wrap").fadeOut(500);
  });
  // creat account
  $("#login-popup-register").click(function () {
    $(".create-account-wrap").fadeIn(500);
    // $(".login-popup-wrap").fadeout(500);
  });
  // login
  $(".create-btn").click(function () {
    $(".login-popup-wrap").fadeIn(500);
    // $(".create-account-wrap").fadeout(500);
  });
});
// navbar

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 1000000) {
//       $("header").css("background", "none");
//     } else {
//       $("header").css("background", "#fff");
//     }
//   });
// });
$(function () {
  $(document).scroll(function () {
    var $nav = $(".menu ul");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// whatsapp hover
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip({ delay: { show: 300, hide: 100 } });
// });
