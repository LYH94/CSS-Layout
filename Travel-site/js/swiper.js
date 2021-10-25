let bannerSwiper = new Swiper(".bannerSwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

let cardImgSwiper = new Swiper(".cardImgSwiper", {
  loop: true,
  navigation: {
    nextEl: ".cardImgSwiper-button-next",
    prevEl: ".cardImgSwiper-button-prev",
  },
});

let threeCutsSwiper = new Swiper ('.threeCuts-swiper', {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    992: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
  },
  navigation: {
    nextEl: '.threeCuts-swiper-button-next',
    prevEl: '.threeCuts-swiper-button-prev',
  },
})

let threeSwiper = new Swiper(".three-swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".three-swiper-button-next",
    prevEl: ".three-swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

let fourSwiper = new Swiper('.four-swiper', {
  slidesPerView: 1,
  clickable: true,
  navigation: {
    nextEl: '.four-swiper-button-next',
    prevEl: '.four-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    }
  }
})

// 畫面5個照片輪播
let fiveSwiper = new Swiper(".five-swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".five-swiper-button-next",
    prevEl: ".five-swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});

// 子母輪播圖
let smallThumbs = new Swiper(".smallThumbs", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
let bigThumb = new Swiper(".bigThumb", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".bigThumb-swiper-button-next",
    prevEl: ".bigThumb-swiper-button-prev",
  },
  thumbs: {
    swiper: smallThumbs,
  },
});