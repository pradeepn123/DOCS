import React from "react";
import ProductCarousel from "JsComponents/ProductCarousel";

export default ({ data }) => {
	
	const {products = []} = data || {};
	return (
		<>
			<div className="featured-collection-react section"
				style={{ "--section-style-spacing-top": "36px", "--section-style-spacing-bottom": "36px" }}>
				<div className="section-inner">
					<div className="section-header section-blocks">
						<h3 className="ff-body fs-body-50 fs-accent section-header__preheading">{data.preheading}</h3>
						<h2 className="ff-heading section-header__heading fs-heading-3-base">{data.heading}</h2>
					</div>
					<div className="featured-collection__products featured-collection-slider-grid standard-grid-spacing product-item-holder">
						<div className="carousel">
								 <ProductCarousel products={products}/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
