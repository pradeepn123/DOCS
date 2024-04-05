import React from "react";
import ResponsiveImage from './ResponsiveImage';

export default ({ data, wrapperclass }) => {    
    let {heading = '', description, desktopImage, mobileImage, desktopratio,mobileratio , positionVertical, positionHorizontal, subheading,textFont, url, button} = data || {}; 
   
    const imageObjDesktop= {
        id: Date.now(),
        ...desktopImage
      }  
    const imageObjMobile= {
        id: Date.now(),
        ...mobileImage
    }  
    return(
        <>
        <h1 className="kuchVi">{heading}</h1>
        <ResponsiveImage image={desktopImage} image_aspect_ratio={1.4} />
        </>
    )
}