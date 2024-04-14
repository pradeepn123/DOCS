import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

class CustomCarousel extends HTMLElement {
  constructor() {
    super();
    this.carouselSettings;
    this.currentWidth;
    this.innerHTML;
    this.container;
  }

  connectedCallback() {
    this.initCarousel();
  }

  getCarouselSettings() {
    this.currentWidth = window.innerWidth;
    //default settings
    const defaultSettings = {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1000,
      navigation: false
    }
    let carouselSettings = defaultSettings;
    //end of default settings 

    //handle breakpoint
    const { breakpoints, ...otherSettings } = this.carouselSettings;
    if (breakpoints) {
      this.breakpoints = Object.keys(breakpoints);
      this.breakpoints.forEach((breakpoint, index) => {
        if (this.currentWidth >= breakpoint) {
          if (breakpoints[breakpoint]) {
            this.breakpointSettings = breakpoints[breakpoint];
          }
          else {
            this.breakpointSettings = breakpoints[this.breakpoints[index - 1]];
          }

          const { pagination, navigation, ...otherResponsiveSettings } = this.breakpointSettings;
          this.carouselSettings = { ...otherSettings, ...otherResponsiveSettings, pagination, navigation };
        }
      })
    }
    if (this.carouselSettings && Object.keys(this.carouselSettings).length > 0) {
      debugger;

      const { navigation, pagination, progressPagination, ...otherSwiperSettings } = this.carouselSettings;
      carouselSettings = { ...otherSwiperSettings };
      if (navigation) {
        const navigationNext = this.parent.querySelector('[data-navigation-next]');
        const navigationPrev = this.parent.querySelector('[data-navigation-prev]');
        carouselSettings = {
          ...carouselSettings, navigation: {
            nextEl: navigationNext,
            prevEl: navigationPrev
          }
        }
      }
      if (pagination) {
        const swiperPagination = this.parent.querySelector('[data-pagination]');
        let pagination = {
          el: swiperPagination,
          clickable: true
        }
        if (progressPagination) {
          pagination = {
            el: swiperPagination,
            type: 'progressbar'
          }
        }

        carouselSettings = { ...carouselSettings, pagination }
      }
    }
    return carouselSettings;
  }

  initCarousel() {
    debugger;
    this.parent = this.closest('[data-parent]');
    this.carouselSettings = JSON.parse(this.querySelector('[data-settings]')?.innerHTML || "{}");
    this.placeholders = this.querySelector('[data-carousel-placeholder]')?.innerHTML;
    this.navigations = this.parent.querySelector('[data-navigations]');
    this.currentWidth = window.innerWidth;
    const swiperNavigationElements = `
      <div data-navigation-next data-navigation  class="swiper-navigation swiper-navigation--next ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''} ">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12.4016H11.5H23M23 12.4016L13.8 3M23 12.4016L13.8 21.8032" stroke="currentColor" stroke-width="1.75"></path></svg>
    </div>
    <div data-navigation-prev data-navigation class="swiper-navigation swiper-navigation--prev ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''} ">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12.4016H11.5H23M23 12.4016L13.8 3M23 12.4016L13.8 21.8032" stroke="currentColor" stroke-width="1.75"></path></svg>
    </div>
    `
   this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements;
    this.container = this.querySelector('[data-swiper-container]');
    const carouselSettings = this.getCarouselSettings();
    this.swiper = new Swiper(this.container, {
      on: {
        beforeInit: () => {
          const { navigation, pagination } = carouselSettings || {};
          if (!navigation) {
            this.parent.querySelectorAll('[data-navigation]').forEach(navigation => navigation.classList.add('swiper-navigation--hide'));
          }
          else {
            this.parent.querySelector('.swiper-navigation--hide') && this.querySelectorAll('.swiper-navigation--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }

          if (!pagination) {
            this.parent.querySelectorAll('.swiper-pagination').forEach(navigation => navigation.classList.add('swiper-pagination--hide'));
          }
          else {
            this.parent.querySelector('.swiper-pagination--hide') && this.querySelectorAll('.swiper-pagination--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
        }
      },
      modules: [Navigation, Pagination, Autoplay],
      ...carouselSettings
   
    });

    this.swiper.on('activeIndexChange', (current) => {
      this.parent.querySelector('.swiper-pagination-bullet-active')?.classList.remove('swiper-pagination-bullet-active');
      this.parent.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex]?.classList.add('swiper-pagination-bullet-active');
    })
  }
}
export default CustomCarousel;
