import React from "react";
import ImageWithText from "JsComponents/image-with-text"
import Carousel from "JsComponents/Carousel";

export default ({ data }) => {
    const slides =  Object.values(data).map((eachData, index) => <ImageWithText  data={eachData} key={eachData.name + index} />);
    const settings = {
        "slidesPerView": 1
    }
    console.log("iiii", data)
    return (
        <div className="banner__container">
            <div className="banner__header-content">
                <div>
                    <Carousel slides={slides} settings = {settings} />
                </div>
            </div>
        </div>

    )
} 


