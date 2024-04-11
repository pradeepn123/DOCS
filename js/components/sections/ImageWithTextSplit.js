import React from "react";
import ImageWithText from "JsComponents/image-with-text"
import Carousel from "JsComponents/Carousel";

export default ({ data }) => {
    const settings = {
        "slidesPerView": 1
    }    
const imageWithTextData = Object.values(data).map((item) => {
        let {
            heading = '', 
            description, 
            desktopImage, 
            mobileImage, 
            desktopratio ,
            mobileratio , 
            subheading = '',
            styleClass = 'style-2',
            mobileMediaGridColumn = 'span 4',
            desktopMediaGridColumn = 'span 2',
            mobileContentGridColumn = 'span 4',
            desktopContentGridColumn = 'span 2',
            url, 
            button} = item || {}; 
        return {
        heading,
        description,
        subheading,
        url,
        button,
        styleClass,
        themeHeadingClasses : 'fs-heading-display-3 ff-heading',
        "default": {
            "media": {
               image: mobileImage || desktopImage,
               ratio: mobileratio,
               gridColumn: mobileMediaGridColumn,
               gridRow: 'span 1'
            },
            "content": {
                maxWidth: '',
                textColor: '#38393d',
                background: '#e5ded8',
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
                maxWidth: '',
                textColor: '#38393d',
                background: '#e5ded8',
                gridColumn: desktopContentGridColumn,
                gridRow: 'span 1'
            }
        }
    }
});



    return (
        <div className="image-with-text-split image-with-text-split__custom">
            <div className="image-with-text-split__container">
                <div className="image-with-text-split__header-content">
                    <div>
                        <Carousel settings={settings}>
                            {imageWithTextData.map((eachData, index) => 
                                <ImageWithText  data={eachData} key={eachData.name + index} wrapperClass="image-with-text__split" />
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
} 
