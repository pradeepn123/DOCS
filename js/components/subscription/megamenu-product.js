import React from "react";

export default ({ shopifyData }) => {
    const {data:{proheading, product_list: products}} = shopifyData;
    
    return (
        <>  
            <h4 className="meganav__secondary--heading fs-accent fs-accent-bold">{proheading}</h4>
            <div className="meganav__secondary--inner meganav-promoted-products-inner" data-layout="list">
                {(products).map((product, index) => { 
                    const { title, vendor, subtitle, handle, image = [], price = [] } = product
                    return <a href={handle} aria-label="[pt]" className="meganav-promoted-products-item">
                        <div className="meganav-promoted-products-item-image-wrap">
                            <div className="image aspect-ratio--square animation--lazy-load loaded">
                                <img alt={title} className="image__img" loading="lazy" width="2500" height="2500" src={image.src} />
                            </div>
                        </div>

                        <div className="meganav-promoted-products-item-text-wrap">
                            <h5 className="ff-body fs-body-60 meganav-promoted-products-item-text-vendor">{vendor}</h5>
                            <h3 className="ff-body fs-body-100 meganav-promoted-products-item-text-title">{title}</h3>
                            <p className="fs-body-60 meganav-promoted-products-item-text-price">
                                { price.compare_at_price ?
                                    <span class="ff-product-price ">
                                        <span class="product-item__price-main">
                                            <span class="visually-hidden">Regular price</span>
                                            <s class="t-subdued">{price.compare_at_price}</s>
                                            <span class="sale" data-price="">{price.originalPrice}</span>
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
                    </a>
                })}
            </div>
        </>
    )
}