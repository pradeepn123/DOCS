import React from "react";
import ImageWithText from "JsComponents/image-with-text";
import ProductCard from "JsComponents/ProductCard"; 

export default ({ data }) => {
    const blockData = data.blocks;
    const products = data.products;
    const imageWithTextData = Object.values(blockData).map((item) => {
        let {
            heading = '', 
            description, 
            desktopImage, 
            mobileImage, 
            desktopratio ,
            mobileratio , 
            subheading,
            styleClass= 'style-1',
            mobileMediaGridColumn = 'span 4',
            desktopMediaGridColumn = 'span 4',
            mobileContentGridColumn = 'span 4',
            desktopContentGridColumn = 'span 4',
            url, 
            button} = item || {}; 
        return {
        heading,
        description,
        subheading,
        url,
        button,
        styleClass,
        "default": {
            "media": {
               image: mobileImage || desktopImage,
               ratio: mobileratio,
               gridColumn: mobileMediaGridColumn,
               gridRow: 'span 1'
            },
            "content": {
                maxWidth: `500px`,
                textColor: 'white',
                background: 'blue',
                gridColumn: mobileContentGridColumn,
                gridRow: 'span 1'
            }
        },
        "lg": {
            "media": {
                image: desktopImage || mobileImage,
                ratio: desktopratio,
                gridColumn: desktopMediaGridColumn,
                gridRow: 'span 1'
            },
            "content": {
                maxWidth: `500px`,
                textColor: 'white',
                background: 'transparent',
                gridColumn: desktopContentGridColumn,
                gridRow: 'span 1'
            }
        }
    }
     });
    return (
        <div className="Featured-products-with-media">
            <div className="section-inner">
                <div className="featured-products-with-image">
                    <div className="featured-collection__products">
                    {imageWithTextData.map((block, index) => <ImageWithText data={block} key={block.name + index}  wrapperClass={"featured-media"}/>)} 
                    </div>
                    <div className="featured-collection__products product-item-holder featured-products-grid">
                        {products.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
