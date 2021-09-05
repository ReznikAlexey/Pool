var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".ourWork-slider__arrowRight",
      prevEl: ".ourWork-slider__arrowLeft",
    },
    mousewheel: {
        sensitivity: 1,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,
    centeredSlides: true,
  });





