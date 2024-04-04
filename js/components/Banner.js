import React from "react";
import ImageWithText from "./image-with-text"

export default ({ data }) => {
    console.log("--------------",data)

    return (
        <div className="banner__container">
            <div className="banner__header-content">
                <div>
                    {Object.values(data).map((eachData, index) => <ImageWithText  data={eachData} key={eachData.name + index} />)}
                </div>
            </div>
        </div>

    )
} 


