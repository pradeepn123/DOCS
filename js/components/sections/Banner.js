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
            styleClass = 'style-1',
            mobileMediaGridColumn = 'span 4',
            desktopMediaGridColumn = 'span 4',
            mobileContentGridColumn = 'span 1',
            desktopContentGridColumn = 'span 1',
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
                background: 'transparent',
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
        <div className="banner banner--custom">
        <div className="banner__container">
            <div className="banner__header-content">
                <div>
                    <Carousel settings={settings}>
                        {imageWithTextData.map((eachData, index) => 
                        <ImageWithText  data={eachData} key={eachData.name + index} wrapperClass="banner__slideshow" />
                        )}
                </Carousel>
                </div>
            </div>
        </div>
        </div>
    )
} 
