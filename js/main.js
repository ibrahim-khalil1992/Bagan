jQuery(document).ready(function ($) {
    /*==================
    counter up jq plugin
    ==================*/
    jQuery(document).ready(function ($) {
      $(".counter").counterUp({
        delay: 10,
        time: 2000,
      });
    });
    /*==================
    menu toggle menu
    ==================*/
    $(".menu-toggle-bar").click(function () {
      $(".main_menu").toggleClass("open-menu");
    });
    /*==================
    search box toggle jq
    ==================*/
    $(".search-box-open").click(function () {
      $(".search-box").toggleClass("search-box-show");
    });
    /*==================
    active color changing
    ==================*/
    $('.main_menu_ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});

