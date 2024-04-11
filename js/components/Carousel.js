
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
	let navigation = {}

	return (
		<Swiper
			{...settings}
			navigation={navigation}
			modules={[Navigation, Pagination, A11y]}
			onSwiper={(swiper) => console.log(swiper)}
			onBeforeInit={(swiper) => {
				swiper.navigation = {
					// prevEl: navigationPrevRef.current,
					// nextEl: navigationNextRef.current,
				  }
			}}>
			{children.map((slide, index) => {
				return <SwiperSlide key={index}>
					{slide}
				</SwiperSlide>
			})}
			<div ref={navigationPrevRef} > <button>Prev</button></div>
      		<div ref={navigationNextRef} ><button>Next</button></div>
		</Swiper>
	);
};