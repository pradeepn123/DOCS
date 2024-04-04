import React from "react";
import ImageWithText from "../image-with-text"
import Carousel from "../Carousel";

export default ({ data }) => {
    const slides =  Object.values(data).map((eachData, index) => <ImageWithText  data={eachData} key={eachData.name + index} />);
    const settings = {
        "slidesPerView": 1
    }
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


