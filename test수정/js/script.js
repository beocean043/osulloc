$(function(){
    //상단 슬라이드
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      autoplay:{
        delay: 3000,
        disableOnInteraction: false,
        loop: true,
      },
    });

    //베스트제품 슬라이드
    const swiper3 = new Swiper(".mySwiper3", {
      slidesPerView: 3.5,
      spaceBetween: 30,
      loop: true,
      on: {
        slideChange(swiper) {
          const progress = ((swiper.realIndex + 1) / swiper.slides.length) * 100;
          document.getElementById("progressFill").style.width = `${progress}%`;
        }
      },
      autoplay:{
        delay: 2500,
            disableOnInteraction: false,
      },
    });
    // 좌우 버튼
    document.getElementById("prevBtn").addEventListener("click", () => swiper3.slidePrev());
    document.getElementById("nextBtn").addEventListener("click", () => swiper3.slideNext());


       //매장 슬라이드
    const swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 2,
      slidesPerGroup: 2,
      centeredSlides: false,
      spaceBetween: 19,
      loop: true,
      on: {
        slideChange(swiper) {
          const progress = ((swiper.realIndex + 2) / swiper.slides.length) * 100;
          document.getElementById("progressFill2").style.width = `${progress}%`;
        }
      },
      autoplay:{
        delay: 3000,
            disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        }
      },
    }); 


});

//신제품
// let newMain = document.querySelector('#new .main');
// let li = document.querySelectorAll('#new .thumb')

// li.forEach(el => {
//     el.addEventListener('mouseover',() => {
//         let bg = el.querySelector('a').getAttribute('data-bg');
//         newMain.style.background = `url(${bg})no-repeat center/cover` ;
//     });
//     el.addEventListener('mouseleave', () => {
//         newMain.style.background = '';
//     });
// })

// 신제품 썸네일 오버시 메인 이미지 변경
$(function () {
  $('#new .thumb').on('mouseenter', function () {
      const newSrc = $(this).find('a').data('bg');
      $('#new .main img').attr('src', newSrc);
  });

  $('#new .thumb').on('mouseleave', function () {
      // 기본 이미지로 복구 (원래 이미지 경로에 맞춰 수정)
      $('#new .main img').attr('src', './images/20241213201444919UC2.webp');
  });
});
