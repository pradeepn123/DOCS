import React from "react";
import ProductCard from "./ProductCard";

export default ({ data }) => {
    return(
        <>
            <div class="featured-collection section"
            style={{"--section-style-spacing-top": "36px", "--section-style-spacing-bottom": "36px"}}
            data-section-id="{{ section.id }}"
            data-section-type="featured-collection"
            data-products-per-view="{{ section.settings.num_columns }}"
            data-mobile-products-per-view="{{ section.settings.num_columns_mobile }}">
                <div class="section-inner">
                    <div className="featured-collection__inner">
                        <div className="section-header section-blocks">
                            <h3 className="ff-body fs-body-50 fs-accent section-header__preheading">{data.preheading}</h3>
                            <h2 className="ff-heading section-header__heading fs-heading-3-base">{data.heading}</h2>
                        </div>
                        <div className="featured-collection__products featured-collection-slider-grid standard-grid-spacing product-item-holder">
                            <scroll-slider-component class="scroll-slider scroll-slider--full-width-below-1024 scroll-slider--peek-and-full-width-below-1024 scroll-all-sizes"
                            style={{"--columns": "2", "--columns-above-720": "4", "--columns-above-1024": "5", "--peek": "24px", "--peek-above-1024": "0px","--gap": "12px", 
                            "--gap-above-1024": "16px", "--gap-above-1200": "24px"}}>
                                <div className="scroll-slider__slider">
                                    {(data.products).map((product,index) => (
                                      <ProductCard product={product} key={index} />
                                    ))}
                                </div>
                            </scroll-slider-component>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
