var swiper = new Swiper(".goods_swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".arrwRight",
      prevEl: ".arrwLeft",
    },
    mousewheel: {
        sensitivity: 1,
    },
    speed: 500,
  });

