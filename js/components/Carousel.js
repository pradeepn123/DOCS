
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default ({ settings, children }) => {
	let params = {
		slidesPerView: 1
	};
	if (settings) {
		params = { ...params, ...settings };
	}

	return (
		<Swiper
			{...settings}
			onSwiper={(swiper) => false}>
			{children.map((slide, index) => {
				return <SwiperSlide key={index}>
					{slide}
				</SwiperSlide>
			})}
		</Swiper>
	);
};