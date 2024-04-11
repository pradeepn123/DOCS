
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

	const navigationPrevRef = useRef(null)
  	const navigationNextRef = useRef(null)
	let navigation = {}

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
			onSwiper={(swiper) => console.log(swiper)}
			onAfterInit={(swiper) => {
				swiper.navigation = {
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				  }
			}}
			onSlideChange={(swiper) => { 
				updateCurrentIndex(swiper.activeIndex);
			}}
			>
			{children.map((slide, index) => {
				return <SwiperSlide key={index}>
					{slide}
				</SwiperSlide>
			})}
		</Swiper>
	);
};