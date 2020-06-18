
$(document).ready(function(){
  // 배너 이미지 슬라이드
  var swiper = new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },loop: true
  });

  // 영화차트 이미지 슬라이드
  var swiper = new Swiper('.swiper-container2',{
    slidesPerView: 4,
    spaceBetween: 25,
    // mousewheel: {
    // invert: true,
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 4000,
    },
    loop: true,
    breakpoints: {
      600: {
          slidesPerView: 1.4,
          spaceBetween: 20
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      960: {
          slidesPerView: 3,
          spaceBetween: 20
      }
    }
  });
  // 영화차트 탭 메뉴
  var movBtn = $('.movie_title > ul > li');
  var movCont = $('.movie_chart > div');
  movCont.hide().eq(0).show()
  movBtn.click(function(e){
    e.preventDefault();
    var target = $(this)
    var index = target.index();
    movBtn.removeClass('active');
    target.addClass('active');
    movCont.hide().eq(index).show()
  });


  // 공지사항 탭 메뉴
  var notBtn = $('.notice > ul > li');
  var notCont = $('.notice > ul > li > ul');
  notCont.hide().eq(0).show()
  notBtn.click(function(e){
    e.preventDefault();
    var target = $(this)
    var index = target.index();
    notBtn.removeClass('active');
    target.addClass('active');
    notCont.hide().eq(index).show()
  });

  $(".notice").find("ul > li > a").click(notBtn).focus(notBtn);

  $(window).resize(function(){  
    $('body').removeClass('open');
    $('.ham').removeClass('on');
      if ( $(window).width() >= 752 ){
       
        
      }
  });

  // 모바일 햄버거 버튼
  $('.ham').click(function(){
  $('.ham').stop().toggleClass('on');
  $('body').toggleClass('open');
  });
  $(window).scroll(function(){
    var $num = $(this).scrollTop();
    if($num >= 1){
      $('#header').addClass('on');
    }else{
      $('#header').removeClass('on');
    }
  });
});