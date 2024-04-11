import React, { useEffect, useState, Component,useRef } from "react";
import ResponsiveImage from './ResponsiveImage';

export default ({ product }) => {    
    const {title, link, vendor, variants=[] } = product || {};
    const productParent = useRef();
    const variantData = variants.map((variant) => {        
        return{
            price: variant.price,
            variant_id: variant.id,
            compare_at_price: variant.compare_at_price
        }
    }) 

    const imageObj= {
        id: Date.now(),
        ...product.image
    }

    useEffect(() => {
        window.initProductItem(productParent.current);
    },[])

    const [{ price, variant_id, compare_at_price }] = variantData || []
    const originalPrice = price;
    const convertedPrice = (originalPrice / 100).toFixed(2);    

    return(
        <>
        <div className="product__container" ref={productParent}>
            <div className="product-item animation--item" data-input-item="" data-id="8091513782403" data-title={product.title} data-url={product.link} data-variant-id={variant_id} data-quantity-in-cart="0" data-product-has-single-variant="true" data-quick-add-style="icon" data-product-item-alignment="left" data-price-position="below_title" data-show-inventory="false" data-ratings-visible="false">
                <div className="product-item__inner">
                    <div className="product-item__media-wrapper">
                        <div className="product-item__media" data-aspect-ratio="square">
                            <a className="product-item__image-link" href={link} aria-label={title}>
                                <div className="image product-item__image aspect-ratio--square animation--lazy-load loaded" style={{"--object-fit": "contain"}}>                                    
                                    <ResponsiveImage image={imageObj} />
                                </div>
                            </a>
                            {product.discountPercentage > 0 ?
                                <div className="product-badges" data-badge-shape="pill" data-badge-vertical-position="bottom" data-badge-horizontal-position="left">
                                    <div className="product-badge" data-type="sale">
                                        <span className="product-badge__inner badge-shape" data-badge-shape="pill">
                                            <span className="displayed-discount-wrapper">
                                                <span data-badge-shape="pill">Sale</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                : null 
                            }
                            <div data-product-item-element-visible-only-for-mode="grid">
                                <div className="product-item__floating-action-buttons">
                                    <button className="product-item__quick-view-button btn btn--rounded show-product-quick-view product-item__disc-button" href={product.link} title="Quick View" aria-label="Quick View">
                                        <span className="icon icon-quick-view">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0875 15.6805C13.9032 15.6805 15.375 14.2086 15.375 12.393C15.375 10.5773 13.9032 9.10547 12.0875 9.10547C10.2719 9.10547 8.80005 10.5773 8.80005 12.393C8.80005 14.2086 10.2719 15.6805 12.0875 15.6805Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M22.489 11.7954C21.3901 10.5555 17.0224 6 11.8 6C6.57759 6 2.20992 10.5555 1.11096 11.7954C1.03921 11.8827 1 11.9923 1 12.1053C1 12.2184 1.03921 12.3279 1.11096 12.4153C2.20992 13.6552 6.57759 18.2107 11.8 18.2107C17.0224 18.2107 21.3901 13.6552 22.489 12.4153C22.5608 12.3279 22.6 12.2184 22.6 12.1053C22.6 11.9923 22.5608 11.8827 22.489 11.7954V11.7954Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-item__meta">
                        <div data-product-item-element-visible-only-for-mode="grid"></div>
                        <div className="product-item__text ta-l">
                            <div className="product-item__text_group_primary">
                                <span className="ff-body fs-body-60 product-item__product-vendor">
                                    {vendor}
                                </span>
                                <h3 className="product-item__product-title fs-product-title ff-body" data-line-limit="2" data-base-size-setting="16">
                                    <a href={link}>{title}</a>
                                </h3>
                                <div data-product-item-element-visible-only-for-mode="grid">
                                    <div className="product-item__price-wrap" data-position="below_title">
                                        <p className="product-item__price ff-product-price" data-position="below_title" data-enlarged-prices="false">
                                            <span className="product-item__price-main">
                                                {compare_at_price > convertedPrice ? <s className="t-subdued">{compare_at_price}</s> : null}
                                                <span className={compare_at_price > convertedPrice ? 'sale' : ''}>${convertedPrice}</span>
                                            </span>
                                            <span className="displayed-discount-wrapper" data-hidden="false" data-has-discount="true">
                                                {product.discountPercentage > 0 ?
                                                    <span className="displayed-discount badge-shape fs-body-60" data-badge-shape="pill">
                                                        Save {product.discountPercentage}%
                                                    </span>
                                                    : null
                                                }
                                            </span>
                                        </p>
                                        <dl className="unit-price" data-unit-price-container="" data-unit-price-available="false">
                                            <dt>
                                                <span className="visually-hidden visually-hidden--inline">Unit price</span>
                                            </dt>
                                            <dd className="unit-price__price">
                                                <span data-unit-price=""></span>
                                                <span aria-hidden="true">/</span>
                                                <span className="visually-hidden">per</span>
                                                <span data-unit-base="">
                                                <span data-unit-price-base-unit=""></span>
                                                </span>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
 
}

