import React from "react";
import Carousel from "./Carousel";
import ProductCard from './ProductCard';

export default ({ products = [] }) => {
	const carouselSettings = {
		"slidesPerView": 2.5 ,
		"spaceBetween": "12px",
		"breakpoints": {
			"768": {
				"slidesPerView": 4.2,
				"spaceBetween": "16px",
			},
			"1024": {
				"slidesPerView": 5,
				"spaceBetween": "24px",
			}
		}
	}
  
	return <div className="product-carousel">
				<Carousel settings={carouselSettings}>
				{(products).map((product, index) => (
					<ProductCard product={product} key={index} />
				))}
				</Carousel>
			</div>
}