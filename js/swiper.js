const swiper = new Swiper('.news02__slider', {
   direction: 'horizontal',
   loop: false,
   slidesPerView: 1.3,
   centerdSlide: true,
   spaceBetween: 20,
 
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   breakpoints: {
     480: {
       slidesPerView: 1.3,
     },
 
     575: {
       slidesPerView: 1.7,
     },
 
     680: {
       slidesPerView: 2,
     },
 
     840: {
       slidesPerView: 2.5,
     },
 
     991: {
       slidesPerView: 3,
     },
   }
 
});


// -- main-page__slider ---------------------------------------------
const mainPageSlider = new Swiper('.main-page__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centerdSlide: true,
  spaceBetween: 30,
  autoHeight: true,
  speed: 800,

  navigation: {
    nextEl: '.main-page__slider-next',
    prevEl: '.main-page__slider-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
// -- /main-page__slider ---------------------------------------------
