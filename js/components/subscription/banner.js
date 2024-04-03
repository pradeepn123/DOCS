import React from "react";
import ImageWithText from "./image-with-text"

export default ({ shopifyData }) => {
    // console.log("--------------",shopifyData)
    let bannerData = [];
    Object.values(shopifyData).forEach(data => {
        data.map(eachData => {
            bannerData.push({
                image: eachData.image,
                title: eachData.heading,
                subText: eachData.subheading,
                button: eachData.button,
                url:eachData.url
            })
        });
    })

    console.log("cccc", bannerData) ;

    return (
        <div className="banner__container">
            <div className="banner__header-content">
                <div>
                    {Object.values(bannerData).map((eachData, index) => <ImageWithText  data={eachData} key={eachData.name + index} />)}
                </div>
            </div>
        </div>

    )
}


