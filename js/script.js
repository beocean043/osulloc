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
        breakpoints: {
    0: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 3.5,
    }
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

    //모바일 - 신제품 슬라이드
    const swiper4 = new Swiper(".mySwiper4", {
      slidesPerView: 2,
      loop: true,
      on: {
        slideChange(swiper) {
          // 모든 슬라이드에서 클래스 제거
          swiper.slides.forEach(slide => {
            slide.classList.remove('remove-border');
          });

          // 현재 보이는 슬라이드 중 오른쪽 슬라이드 감지
          const activeIndex = swiper.activeIndex;
          const rightSlideIndex = (activeIndex + 1) % swiper.slides.length;
          const rightSlide = swiper.slides[rightSlideIndex];

          // 오른쪽 슬라이드에 border 제거 클래스 추가
          if (rightSlide) {
            rightSlide.classList.add('remove-border');
          }

          // 프로그레스 바 업데이트
          const progress = ((swiper.realIndex + 1) / swiper.slides.length) * 100;
          document.getElementById("progressFill4").style.width = `${progress}%`;
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
        
    //모바일 - 베스트제품 슬라이드
    const swiper5 = new Swiper(".mySwiper5", {
      slidesPerView: 2,
      loop: true,
      on: {
        slideChange(swiper) {
          // 모든 슬라이드에서 클래스 제거
          swiper.slides.forEach(slide => {
            slide.classList.remove('remove-border');
          });

          // 현재 보이는 슬라이드 중 오른쪽 슬라이드 감지
          const activeIndex = swiper.activeIndex;
          const rightSlideIndex = (activeIndex + 1) % swiper.slides.length;
          const rightSlide = swiper.slides[rightSlideIndex];

          // 오른쪽 슬라이드에 border 제거 클래스 추가
          if (rightSlide) {
            rightSlide.classList.add('remove-border');
          }

          // 프로그레스 바 업데이트
          const progress = ((swiper.realIndex + 1) / swiper.slides.length) * 100;
          document.getElementById("progressFill5").style.width = `${progress}%`;
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });


});

//신제품
$(function () {
  const $mainImg = $('#new .main img');

  $('#new .thumb').on('mouseenter', function () {
    const newSrc = $(this).find('a').data('bg');
    if (newSrc) {
      $mainImg.attr('src', newSrc).css('opacity', 1);
    }
  });

  $('#new .thumb').on('mouseleave', function () {
    $mainImg.css('opacity', 0);
  });
});
