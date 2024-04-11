import React from "react";
import ImageWithText from "JsComponents/image-with-text";
import ProductCard from "JsComponents/ProductCard"; 

export default ({ data }) => {
    const blockData = data.blocks;
    const products = data.products;
    return (
        <>
            <div className="section-inner">
                <div className="featured-products-with-image">
                    <div className="featured-collection__products">
                    {blockData.map((block, index) => <ImageWithText data={block} key={block.name + index} />)} 
                    </div>
                    <div className="featured-collection__products product-item-holder featured-products-grid">
                        {products.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
