var swiper = new Swiper(".mySwiper_product_container", {
  slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true, // فعال کردن داینامیک بولت‌ها
    },
    autoplay: {
                delay: 2100,  // 2100۰۰ میلی‌ثانیه یا ۱ ثانیه
                disableOnInteraction: false,
            },
  breakpoints: {
    
      1000: {
          slidesPerView: 5,
      },
      768: {
          slidesPerView: 3,
      },
      550: {
          slidesPerView: 3,
      },
      0: {
          slidesPerView: 1,
      }
  }
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true, // فعال کردن داینامیک بولت‌ها
    },
    autoplay: {
                delay: 1700,  // ۱۰۰۰ میلی‌ثانیه یا ۱ ثانیه
                disableOnInteraction: false,
            },
  breakpoints: {
    
      1000: {
          slidesPerView: 4,
      },
      768: {
          slidesPerView: 2,
      },
      480: {
          slidesPerView: 1,
      },
      0: {
          slidesPerView: 1,
      }
  }
});