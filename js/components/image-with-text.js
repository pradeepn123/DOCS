import React from "react";
import ResponsiveImage from "JsComponents/ResponsiveImage"
import { BreakPointContext } from "JsComponents/contexts/breakpointContextWrapper";
import { useContext } from 'react';

export default ({ data: curatedData, wrapperClass, enableTint }) => {    
    const currentBreakpoint = useContext(BreakPointContext);
    const selectedBreakpoinData = curatedData[currentBreakpoint] || curatedData["default"];
    const {
     media: {image, ratio, gridColumn:mediaGridColumn, gridRow:mediagridRow} ,
     content: {textColor, gridColumn:contentGridColumn, gridRow:contentgridRow}} = selectedBreakpoinData;
    const imageObj= {
        id: Date.now(),
        ...image
    }  
    function createMarkup() {
        const htmlContent = `${heading}`;
        return {__html:htmlContent};
      }

      const contentStyle = {
        color: textColor,
        gridColumn: contentGridColumn,
        gridRow: contentgridRow
      }

      const mediaStyle = {
        gridColumn: mediaGridColumn,
        gridRow: mediagridRow
      }

      const { 
        heading,
        description,
        subheading,
        styleClass,
        url,
        button,
        themeHeadingClasses
      } = curatedData;

    return(
        <div className={`image-text ${wrapperClass} `} >
       
           <div className={`image-text__images image-text__images--${wrapperClass} image-text__images--${styleClass}` } style={mediaStyle}>
              <ResponsiveImage image={imageObj} aspectratio={`${ratio}`} settings={{imageFit: "cover"}} />
            </div>
            <div className={`image-text__content-wrapper image-text__content-wrapper--${styleClass}`} >
                {enableTint && <div className="carousel__tint"></div>}
                <div className={`image-text__content image-text__content--${wrapperClass}`} style={contentStyle}>
                    <p className="image-text__subheading fs-accent section-blocks__accent accent__text">
                        {subheading}
                        </p>
                        <h2 className={`image-text__heading image-text__text ${themeHeadingClasses}`} dangerouslySetInnerHTML={createMarkup()}>
                        </h2>
                        <p className="image-text__description">
                            {description}
                        </p>
                        { url &&
                            <div className="image-text__button section-blocks__button">
                                <a className="btn btn--primary" href={url}>
                                    <span>{button}</span>
                                </a>
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}