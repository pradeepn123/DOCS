
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

export default ({ settings, children }) => {

	const [currentIndex, updateCurrentIndex ] = useState(0);
	let params = {
		slidesPerView: 1
	};
	if (settings) {
		params = { ...params, ...settings };
	}
	
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	function SlideNextButton() {
		const swiper = useSwiper();
		console.log(swiper, "swiper");
		return (
		  <button className={swiper.isEnd ? 'disabled' : ''} onClick={() => swiper.slideNext()}>Slide to the next slide</button>
		);
	  }

	  function SlidePrevButton() {
		const swiper = useSwiper();
		return (
		  <button className={swiper.isBeginning ? 'disabled' : ''} onClick={() => swiper.slidePrev()}>Slide to the prev slide</button>
		);
	  }
	return (
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
			<div ref={prevRef} className='swiper_navigation navigation__prev'>Prev</div>
      		<div ref={nextRef} className='swiper_navigation navigation__next'>Next</div>
		</Swiper>
	);
};