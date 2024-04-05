import React from "react";
import ImageWithText from "JsComponents/image-with-text";
import ResponsiveImage from 'JsComponents/ResponsiveImage';
import ProductCard from "JsComponents/ProductCard";


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
    const imageObjDesktop= {
        id: Date.now(),
        ...desktopImage
      }  
    const imageObjMobile= {
        id: Date.now(),
        ...mobileImage
    }  
    return(
        <> 
            <div className="banner__container kuchVi">
                <div className="banner__header-content">
                    {/* <div>
                     {blockData.map((block, index) => <ImageWithText data={block} key={index} />)}
                    </div> */}
                    <div>
                    <ResponsiveImage image={imageObjDesktop} image_aspect_ratio={mobileratio} />
                    </div>
                </div>
            </div>
            {/* <div className="featured-collection__products featured-collection-slider-grid standard-grid-spacing product-item-holder"
            data-standard-grid-spacing-type="product-list" data-grid-style="default" data-product-item-alignment="left" data-has-slider="true" data-slider-desktop="true" data-slider-mobile="true">
                <div className="scroll-slider scroll-slider--full-width-below-1024 scroll-slider--peek-and-full-width-below-1024 scroll-all-sizes"
                style={{"--columns": "2", "--columns-above-720": "4", "--columns-above-1024": "5", "--peek": "24px", "--peek-above-1024": "0px","--gap": "12px", 
                "--gap-above-1024": "16px", "--gap-above-1200": "24px"}}>
                    <div className="scroll-slider__slider">
                        {products.map((product,index) => (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div> */}
        </>
    )
}

