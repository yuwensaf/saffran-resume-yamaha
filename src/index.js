import $ from "jquery/dist/jquery"; // 引入 jQuery
import "bootstrap/dist/js/bootstrap.bundle"; // 引入 bootstrap.js 和 popper.js

$(document).ready(function () {
  var showAnimated = false;

  // 滑動到特定區塊
  $(".scrollTop").click(function (e) {
    var target = $(this).attr("href");
    var targetPos = $(target).offset().top;
    e.preventDefault();

    $("html, body").animate({ scrollTop: targetPos - 67 }, 500);
  });

  // 漢堡選單收起來
  $(".scrollTop").click(function () {
    $(".navbar-collapse").removeClass("show");
  });
  $(document).click(function (e) {
    e.stopPropagation();
    $(".navbar-collapse").removeClass("show");
  });

  $(window).scroll(function (e) {
    // navbar 固定
    var bannerHeight = $("#banner-container").outerHeight();
    var scrollPos = $(window).scrollTop();

    var windowWidth = $(window).outerWidth();

    // 一定要先寫這個 if
    if (scrollPos + 88 >= bannerHeight) {
      $(".navbar").css({
        "background-color": "#1b232f",
        position: "fixed",
        width: "100%",
        "border-bottom": "3px solid #51d2cf",
      });
    } else {
      $(".navbar").css({
        "background-color": "transparent",
        position: "static",
        "border-bottom": "3px solid transparent",
      });
    }

    // 再寫這個 if
    // 手機版時，navbar 和漢堡選單都要有底色
    if (windowWidth <= 991) {
      $(".navbar").css({ "background-color": "rgba(27, 35, 47)" });
      $(".navbar-collapse").css({
        "background-color": "rgba(27, 35, 47)",
        "z-index": "20",
      });
    }

    // navbar 選單改變字體顏色
    $(".scrollTop").each(function (e) {
      var scrollPos = $(window).scrollTop();
      var target = $(this).attr("href");
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();

      if (
        scrollPos >= targetPos - 125 &&
        scrollPos <= targetPos + targetHeight
      ) {
        $(".scrollTop").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    // 物件的 .animated 效果
    // 先讀取出「.animated」的頂端位置
    var thisPos = $(".animated").offset().top;
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollPos + windowHeight / 1.4 >= thisPos && !showAnimated) {
      showAnimated = true;

      $(".animated").each(function (e) {
        $(this).addClass("fadeIn");
      });
    }
  });
});
