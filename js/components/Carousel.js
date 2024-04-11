
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

	const navigationPrevRef = useRef(null)
  	const navigationNextRef = useRef(null)

	return (
		<Swiper
			{...settings}
			navigation={{
				prevEl: navigationPrevRef.current,
				nextEl: navigationNextRef.current,
			  }}
			modules={[Navigation, Pagination, A11y]}
			onSwiper={(swiper) => console.log(swiper)}>
			{children.map((slide, index) => {
				return <SwiperSlide key={index}>
					{slide}
				</SwiperSlide>
			})}
			<div ref={navigationPrevRef} >Prev</div>
      		<div ref={navigationNextRef} >Next</div>
		</Swiper>
	);
};