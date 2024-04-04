
import React, { useEffect } from 'react';
import { register } from 'swiper/element/bundle'


export default ({ slides , settings}) => {
    register();
    useEffect(() => {
        const swiperEl = document.querySelector("swiper-container");

        let params = {
            slidesPerView: 1
        };

        if(settings) {
            params = {...params,...settings};
        }

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