import { headerCatalog, headerMobile, scrollToLinks } from "./indexModules/functions.js";
import { indexSwiper } from "./indexModules/indexSlider.js";

indexSwiper(document.querySelector('.swiper'));

headerMobile(document.querySelector('.header__button-moble'), document.querySelector('.catalog__mobile'));

headerCatalog(document.querySelector('.header__input-btn'), document.querySelector('.catalog'));

scrollToLinks(document.querySelectorAll('a[href*="#"]'))
