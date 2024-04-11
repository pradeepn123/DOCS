
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

export default ({ settings, children }) => {
	
	let params = {
		slidesPerView: 1
	};
	if (settings) {
		params = { ...params, ...settings };
	}
	
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<>
			<Swiper
				{...settings}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination, A11y]}
				onSwiper={(swiper) => console.log(swiper)}>
				{children.map((slide, index) => {
					return <SwiperSlide key={index}>
						{slide}
					</SwiperSlide>
				})}
			</Swiper>
			<div ref={prevRef} className='swiper_navigation navigation__prev'></div>
			<div ref={nextRef} className='swiper_navigation navigation__next'></div>
		</>
	);
};