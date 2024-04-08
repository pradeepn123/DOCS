import React from "react";
import ResponsiveImage from './ResponsiveImage';

export default ({ data }) => {    
    let {heading = '', description, desktopImage, mobileImage, desktopratio ,mobileratio , positionVertical, positionHorizontal, positionHorizontalMobile, positionVerticalMobile ,subheading,textFont,textFontMob , url, button} = data || {}; 
   
    const imageObjDesktop= {
        id: Date.now(),
        ...desktopImage
      }  
    const imageObjMobile= {
        id: Date.now(),
        ...mobileImage
    }  
    function createMarkup() {
        return {__html:heading};
      }

    const getWrapperStyles = () => {
        return {
          '--horizontal-align': `${positionHorizontal}`,
          '--vertical-align': `${positionVertical}`,
          '--horizontal-align-mob': `${positionHorizontalMobile}`,
          '--vertical-align-mob': `${positionVerticalMobile}`,
          '--heading-font': `${textFont}px`,
          '--heading-font-mob': `${textFontMob}px`
        };
      };

    return(
        <>
        <div className="banner__container" style={getWrapperStyles()}>
           <div className="banner__images" id={`banner-image-${imageObjDesktop.id}`} style={{"poisition": "relative !important"}}>
            { imageObjMobile &&
                <div className="banner__mob-image-wrapp">
                    <ResponsiveImage image={imageObjMobile} image_aspect_ratio= {`${mobileratio}`} settings={{imageFit: "cover"}} />
                </div>
                }
                { imageObjDesktop && 
                    <div className="banner__desktop-image-wrapp">
                        <ResponsiveImage image={imageObjDesktop} image_aspect_ratio={`${desktopratio}`} settings={{imageFit: "cover"}} />
                    </div>
                }
        
                <div className="banner__text-wrapp">
                <div className="banner_text-container">
                <p className="banner__subheading " data-divider-enabled="false">
                        <span className="banner__subtext">{subheading}</span>
                    </p>
                    <h2 className="banner__heading" dangerouslySetInnerHTML={createMarkup()}>
                      
                    </h2>
                    <p className="banner__description" data-divider-enabled="false">
                        <span className="accent__text">{description}</span>
                    </p>
                    { url &&
                        <div className="button-wrapper" data-alignment="none">
                            <a className="btn btn--primary" href={url}>
                                <span>{button}</span>
                            </a>
                        </div>
                    }
                </div>
                </div>
            </div>
        </div>
        </>
    )
}