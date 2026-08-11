const brandLogoSwiper = new Swiper(".brandLogoSwiper", {
        slidesPerView: "auto",
        spaceBetween: 80,
        loop: true,
        speed: 3000,
        allowTouchMove: false,

        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });

      const eventaraSwiper = new Swiper(".eventaraSwiper", {
        slidesPerView: "auto",
        loop: true,
        speed: 8000,
        allowTouchMove: false,

        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });