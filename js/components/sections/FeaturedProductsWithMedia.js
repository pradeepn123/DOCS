import React from "react";
import ImageWithText from "JsComponents/image-with-text";
import ResponsiveImage from 'JsComponents/ResponsiveImage';
import ProductCard from "JsComponents/ProductCard";
import Carousel from "../Carousel";



export default ({ data }) => {
    const blockData = data.blocks;
    const products = data.products;
    blockData.map((block, index) => 
    <ImageWithText data={block} key={index} />
    )

  const desktopImage =  blockData.map((block, index) => {
        return  block.desktopImage;
    })
  const mobileImage =  blockData.map((block, index) => {
        return  block.mobileImage;
    })
    return(
        <> 
            <div className="banner__container kuchVi">
                <div className="banner__header-content">
                    <div>
                     {blockData.map((block, index) => <ImageWithText data={block} key={index} />)}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className="featured-collection__products featured-collection-slider-grid standard-grid-spacing product-item-holder">
                    <div className="scroll-slider__slider">
                        {products.map((product,index) => (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                </div>
        </>
    )
}

