new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    effect: 'flip',
    flipEffect: {
        slideShadows: true,
        
        limitRotation: true
    },
  },
});
