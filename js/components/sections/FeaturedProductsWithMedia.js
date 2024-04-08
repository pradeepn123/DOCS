import React from "react";
import ImageWithText from "JsComponents/image-with-text";
import ProductCard from "JsComponents/ProductCard";

export default ({ data }) => {
	const cssMedia = {
		"--media-width": "50%",
		"--media-height": "350px",
		"--media-height-mobile": "360px"
	}
	const blockData = data.blocks;
	const products = data.products;
	return (
		<>
			<div className="featured-collection-with-media__inner featured_products_with_image" style={{ cssMedia }} data-media-position="left" data-media-position-mobile="above">
				<div className="featured-collection__products">
					{blockData.map((block, index) => <ImageWithText data={block} key={index} />)}
				</div>
				<div className="featured-collection__products  product-item-holder">
					{products.map((product, index) => (
						<ProductCard product={product} key={index} />
					))}
				</div>
			</div>
		</>
	)
}
