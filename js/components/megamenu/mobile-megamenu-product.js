import React from "react";

export default ({ shopifyData }) => {
    const {data:{proheading, product_list: products}} = shopifyData;
    return (
        <>  
            <div className="mobile_menu__promo_block mobile-menu-block-promoted-products">
                <h2 className="mobile-menu-block-title fs-accent-bold">{proheading}</h2>

                <div className="mobile-menu-block-promoted-products__inner" data-layout="list">
                {(products).map((product, index) => { 
                    const { title, subtitle, handle, image = [], price = [] } = product
                    return <a href={handle} aria-label={title} className="mobile-menu-promoted-products-item" key={index}>
                        <div className="mobile-menu-promoted-products-item-image-wrap" style={{width:'79px'}}>
                            <div className="image aspect-ratio--square animation--lazy-load loaded">
                                <img alt={title} className="image__img" loading="lazy" width="2500" height="2500" src={image.src} />
                            </div>
                        </div>

                        <div className="mobile-menu-promoted-products-item-text-wrap">                    
                            <h3 className="ff-body fs-body-100 mobile-menu-promoted-products-item-text-title">{title}</h3>
                            <p className="fs-body-60 mobile-menu-promoted-products-item-text-price">
                                { price.compare_at_price ?
                                    <span className="ff-product-price ">
                                        <span className="product-item__price-main">
                                            <span className="visually-hidden">Regular price</span>
                                            <s className="t-subdued">{price.compare_at_price}</s>
                                            <span className="sale" data-price="">{price.originalPrice}</span>
                                        </span>
                                    </span>
                                :
                                    <span className="ff-product-price ">
                                        <span className="product-item__price-main">
                                            <span>{price.originalPrice}</span>
                                        </span>
                                    </span>
                                }
                            </p>
                            
                            <dl className="unit-price" data-unit-price-container="" data-unit-price-available="false">
                                <dt><span className="visually-hidden visually-hidden--inline">Unit price</span></dt>

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
                    </a>
                })}
                </div>
            </div>
        </>
    )
}