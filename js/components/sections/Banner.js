import React from "react";
import ImageWithText from "JsComponents/image-with-text"
import Carousel from "JsComponents/Carousel";

export default ({ data }) => {
    const settings = {
        "slidesPerView": 1
    }    
    
    return (
        <div className="banner banner--custom">
        <div className="banner__container">
            <div className="banner__header-content">
                { data 
                ? 
                    <div>
                        <Carousel settings={settings}>
                            {Object.values(data).map((eachData, index) => 
                            <ImageWithText  data={eachData} key={eachData.name + index} wrapperclass="slideshow-slide__text_wrapper" />)}
                    </Carousel>
                    </div>
                :
                    <div class="pre_loader">
                        <div class="loader"></div>
                    </div>
                }
            </div>
        </div>
        </div>
    )
} 
