import React from "react";
import ImageWithText from "JsComponents/image-with-text";
import ProductCard from "JsComponents/ProductCard";
import Carousel from "JsComponents/Carousel";
// import Banner from "JsComponents/Carousel";


export default ({ data }) => {
    let f = data.blocks;
    let slides = f.map((g) => {
        return Object.values(g).map((eachData, index) => (
            <ImageWithText data={eachData} key={eachData.name + index} wrapperclass="slideshow-slide__text_wrapper" />
        ));
    });
    console.log(data.srcDesktop)
    const settings = {
        "slidesPerView": 1
    }    
    return(
        <>      
      
        {slides}
            <div className="banner__container">
                <div className="banner__header-content">
                    <div>
                        <Carousel slides={slides} settings={settings} />
                    </div>
                </div>
            </div>
            {/* <Banner  data={data}/> */}
            {/* <ImageWithText  data={eachData} key={eachData.name + index} wrapperclass="slideshow-slide__text_wrapper" /> */}
            <div className="featured-collection__products featured-collection-slider-grid standard-grid-spacing product-item-holder"
            data-standard-grid-spacing-type="product-list" data-grid-style="default" data-product-item-alignment="left" data-has-slider="true" data-slider-desktop="true" data-slider-mobile="true">
                <div className="scroll-slider scroll-slider--full-width-below-1024 scroll-slider--peek-and-full-width-below-1024 scroll-all-sizes"
                style={{"--columns": "2", "--columns-above-720": "4", "--columns-above-1024": "5", "--peek": "24px", "--peek-above-1024": "0px","--gap": "12px", 
                "--gap-above-1024": "16px", "--gap-above-1200": "24px"}}>
                    <div className="scroll-slider__slider">
                        {(data.products).map((product,index) => (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

