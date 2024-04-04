
import React, { useEffect } from 'react';
import { register } from 'swiper/element/bundle'


export default ({ slides }) => {
    register();
    useEffect(() => {
        const swiperEl = document.querySelector("swiper-container");
        const params = {
            slidesPerView: 1
        };

        Object.assign(swiperEl, params);
        swiperEl.initialize();

        swiperEl.addEventListener('swiperafterinit', () => {
            console.log("swiper init");
        });
    }, [])

    return (
        <swiper-container init="false">
            {slides.map((slide, index) => {
                return <swiper-slide key={index}>
                    {slide}
                </swiper-slide>
            })}
        </swiper-container>
    )
}