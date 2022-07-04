const swiperBanner = new Swiper(".banner", {
  // Navigation arrows

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperBrands = new Swiper(".brands", {
  // Navigation arrows

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },

  slidesPerView: 1,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});

const swiperKit = new Swiper(".kit", {
  // Navigation arrows

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//MENU MOBILE

const btnMobile = document.querySelector(
  ".header__container__shortcuts__button--mobile"
);

function toggleMenu() {
  const nav = document.querySelector(".header__container__menu");
  const list = document.querySelector(".header__container__menu__nav__list");
  const item = document.querySelectorAll(
    ".header__container__menu__nav__list__item"
  );
  nav.classList.toggle("active");
  list.classList.toggle("active");
  item.forEach((element) => {
    element.classList.toggle("active");
  });
}

btnMobile.addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    const nav = document.querySelector(".header__container__menu");
    const list = document.querySelector(".header__container__menu__nav__list");
    const item = document.querySelectorAll(
      ".header__container__menu__nav__list__item"
    );
    nav.classList.remove("active");
    list.classList.remove("active");
    list.classList.remove("active");
    item.forEach((element) => {
      element.classList.remove("active");
    });
  }
});
