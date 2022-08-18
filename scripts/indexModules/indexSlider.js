import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';
export const indexSwiper = (elem) => {
    const swiper = new Swiper(elem, {
        slidesPerView: 'auto',
        spaceBetween: 12,
        autoplay: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
