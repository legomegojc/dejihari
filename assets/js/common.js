// JavaScript Document
$(function () {

  /*** 上に戻るボタン ***/
  let topBtn = $('#scroll-top');
  topBtn.hide();

  // ある程度スクロールされたら、上に戻るボタンを表示する
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      topBtn.fadeIn(); // フェードインで表示
    } else {
      topBtn.fadeOut(); // フェードアウトで非表示
    }
  });

  topBtn.on("click", function (event) {
    event.preventDefault(); // ページ内リンクの挙動をキャンセル
    $('body,html').animate({ // スムーズにスクロールする設定
      scrollTop: 0
    }, 500);
  });
  

  (function ($) {
    var $nav = $('.header-content-wrapper');
    var $btn = $('.toggle_btn');
    var $mask = $('#mask');
    var open = 'open'; // class
    // menu open close
    $btn.on('click', function () {
      if (!$nav.hasClass(open)) {
        $nav.addClass(open);
      } else {
        $nav.removeClass(open);
      }
    });
    // mask close
    $mask.on('click', function () {
      $nav.removeClass(open);
    });
  })(jQuery);
  
  document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
//$(function () {
//  var $header = $(".header");
//  var scrollSize = 50; //超えると表示
//  $(window).on("load scroll", function () {
//    var value = $(this).scrollTop();
//    if (value > scrollSize) {
//      $header.addClass("scroll");
//    } else {
//      $header.removeClass("scroll");
//    }
//  });
//});
});
