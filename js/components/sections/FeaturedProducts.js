import React, { useEffect, useRef, useState } from "react";
import ProductCarousel from "JsComponents/ProductCarousel";

export default ({ data }) => {
	const parentRef = useRef('');
	const {products = []} = data || {};
	const [parentEl, setParentEl] = useState(false);

	useEffect(() => {
		setParentEl(parentRef.current);
	},[])
	return (
		<>
			<div className="featured-collection-react section featured-product" 
			    data-parent
				style={{ "--section-style-spacing-top": "36px", "--section-style-spacing-bottom": "36px" }}
				ref={parentRef}
				>
				<div className="section-inner">
					<div className="section-header section-blocks">
						<div className="featured-collection-header__wrapper">
							<h3 className="ff-body fs-body-50 fs-accent section-header__preheading">{data.preheading}</h3>
							<h2 className="ff-heading section-header__heading fs-heading-3-base">{data.heading}</h2>
						</div>
						<div className="product-carousel__pagination" data-pagination-wrapper></div>
					</div>
					{parentEl && <ProductCarousel products={products} parentRef={parentEl}/>}
				</div>
			</div>
		</>
	)
}
