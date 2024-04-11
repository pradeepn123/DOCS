import React from "react";
import ResponsiveImage from "JsComponents/ResponsiveImage"
import { BreakPointContext } from "JsComponents/contexts/breakpointContextWrapper";
import { useContext } from 'react';

export default ({ data }) => {    
    const currentBreakpoint = useContext(BreakPointContext);
    let {
    heading = '', 
    description, 
    desktopImage, 
    mobileImage, 
    desktopratio ,
    mobileratio , 
    subheading,
    wrapperClass,
    url, 
    button} = data || {}; 
   
    const curatedData = {
        heading,
        description,
        subheading,
        url,
        button,
        "default": {
            "media": {
               image: mobileImage || desktopImage,
               ratio: mobileratio,
               gridColumn: `span 4`,
               gridRow: `span ${rowSpan}`

            },
            "layout": {
                columnSpan: 2,
                rowSpan: 1
            },
            "content": {
                maxWidth: `500px`,
                textColor: 'white',
                background: 'blue',
                gridColumn: `span 1`,
                gridRow: `span ${rowSpan}`
            }
        },
        "lg": {
            "media": {
                image: desktopImage || mobileImage,
                ratio: desktopratio,
                gridColumn: `span 4`,
                gridRow: `span ${rowSpan}`
            },
            "layout": {
                columnsSpan: 1
            },
            "content": {
                maxWidth: `500px`,
                textColor: 'white',
                background: 'blue',
                gridColumn: `span ${columnSpan}`,
                gridRow: `span ${rowSpan}`
            }
        }
    }

    const selectedBreakpoinData = curatedData[currentBreakpoint] || curatedData["default"];
    const {
     media: {image, ratio, gridColumn:mediaGridColumn, gridRow:mediagridRow} ,
     layout: {columnSpan , rowSpan}, 
     content: {maxWidth: contentMaxWidth,textColor, gridColumn:contentGridColumn, gridRow:contentgridRow, background}} = selectedBreakpoinData;

    const imageObj= {
        id: Date.now(),
        ...image
    }  
    function createMarkup() {
        return {__html:heading};
      }


      const contentStyle = {
        maxWidth:contentMaxWidth,
        color: textColor,
        background,
        gridColumn: `span ${contentGridColumn}`,
        gridRow: `span ${contentgridRow}`
      }

      const mediaStyle = {
        gridColumn: `span 4`,
        gridRow: `span 1`
      }

    return(
        <div className={`image-text ${wrapperClass} image-text--style-1`} >
           <div className={`image-text__images image-text__images--${wrapperClass}`} style={mediaStyle}>
              <ResponsiveImage image={imageObj} aspectratio={`${ratio}`} settings={{imageFit: "cover"}} />
            </div>
            <div className={`image-text__content-wrapper image-text__content-wrapper--${wrapperClass}`} style={contentStyle}>
            <div className={`image-text__content image-text__content--${wrapperClass}`}>
                <p className="image-text__subheading fs-accent section-blocks__accent accent__text">
                    {subheading}
                    </p>
                    <h2 className="image-text__heading image-text__text fs-heading-display-1 ff-heading" dangerouslySetInnerHTML={createMarkup()}>
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