import React from "react";
import ProductCard from './ProductCard';
import CarouselItems from "./carousel-items";

export default ({ products = [], parentRef }) => {
	const carouselSettings = JSON.stringify({
		"slidesPerView": 2.5 ,
		"spaceBetween": "12px",
		"navigation": false,
		"overflowNagivation": true,
		"speed": 600,
		"autoplay": {
			"delay": 3000
		},
		"breakpoints": {
			"768": {
				"slidesPerView": 3.2,
				"spaceBetween": "16px",
				"pagination": true
			},
			"1024": {
				"slidesPerView": 4,
				"spaceBetween": "24px",
				"pagination": true,
				"navigation": true
			}
		}
	})

	const sliderSettings = {
		paginationWrapperClass: 'swiper-pagination--dot',
		parentRef
		//pass navigationWrapperClassas for a custom navigation class
	}

  
	return <div className="product-carousel">
				<custom-carousel>
					<CarouselItems settings={sliderSettings}>
						{(products).map((product, index) => (
							<ProductCard product={product} key={index} />
						))}
					</CarouselItems>
					<script data-settings type="text/json">
						{carouselSettings}
					</script>
				</custom-carousel>
			</div>
}