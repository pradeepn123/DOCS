import React, { useEffect, useState, Component } from "react";


export default ({ shopifyData }) => {
    console.log('Data', shopifyData);
    return(
        <>
            <div className="featured-collection section">
                <div className="section-header section-blocks">
                    <h3 className="ff-body fs-body-50 fs-accent section-header__preheading">{shopifyData.heading}</h3>
                    <h2 className="ff-heading section-header__heading fs-heading-3-base">{shopifyData.heading}</h2>
                </div>
                <div className="featured-collection__products featured-collection-slider-grid standard-grid-spacing product-item-holder">
                    <scroll-slider-component class="scroll-slider scroll-slider--full-width-below-1024 scroll-slider--peek-and-full-width-below-1024 scroll-all-sizes"
                    style={{"--columns": "2", "--columns-above-720": "4", "--columns-above-1024": "5", "--peek": "24px", "--peek-above-1024": "0px","--gap": "12px", 
                    "--gap-above-1024": "16px", "--gap-above-1200": "24px"}}>
                        <div className="scroll-slider__slider">
                            {(shopifyData.products).map((product) => (
                                <div className="product-item">
                                    <div className="product-item__inner">
                                        <div className="product-item__media-wrapper">
                                            <div className="product-item__media">
                                                <a className="product-item__image-link" href={product.link}>
                                                    <div className="image product-item__image aspect-ratio--square">
                                                        <img className="image__img" src={product.image.src} alt={product.title} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-item__meta">
                                            <div className="product-item__text ta-l">
                                                <div className="product-item__text_group_primary">
                                                    <span className="ff-body fs-body-60 product-item__product-vendor">{product.vendor}</span>
                                                    <h3 className="product-item__product-title fs-product-title ff-body">
                                                        <a href={product.link}>
                                                            {product.title}
                                                        </a>
                                                    </h3>
                                                    <div data-product-item-element-visible-only-for-mode="grid">
                                                        <div className="product-item__price-wrap">
                                                            <p className="product-item__price ff-product-price">
                                                                <span className="product-item__price-main">
                                                                    {
                                                                        product.variants[0].compare_at_price > product.variants[0].price ? 
                                                                        <s className="t-subdued">{product.variants[0].compare_at_price}</s> : null
                                                                    }
                                                                    <span className={product.variants[0].compare_at_price > product.variants[0].price ? 'sale' : ''}>${product.variants[0].price}</span>
                                                                </span>
                                                                <div className="displayed-discount-wrapper">
                                                                    <span className="displayed-discount badge-shape fs-body-60">
                                                                        Save {product.discountPercentage}%
                                                                    </span>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </scroll-slider-component>
                </div>
            </div>
        </>
    )
}
