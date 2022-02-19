//Bx Slider
jQuery(document).ready(function () {
  jQuery(".slider_area").bxSlider({
    slideWidth: 960,
    moveSlides: 1,
    auto: true,
  });
  jQuery("#main_menu").meanmenu({
    meanMenuContainer: "#mobile_menu",
    meanScreenWidth: 1025,
  });
});
