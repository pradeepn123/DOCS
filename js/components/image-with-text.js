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

    const css = `
    .banner__desktop-image-wrapp img, .banner__mob-image-wrapp img{
        max-width: 100% !important;
        object-fit: cover !important;
    }
    .banner__mob-image-wrapp{
        display: block;
        @media (min-width: 768px){
            display: none;
        }
    }
    .banner__desktop-image-wrapp{
        display: none;
        @media (min-width: 768px){
            display: block;
        }
    }
    .banner__text-wrapp{
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        display:flex;
        justify-content: var(--vertical-align);
        align-items: var(--horizontal-align);
        max-width:calc(1800px + (calc(4px * 4) * 2));
        max-width:calc(var(--max-width) + (var(--space-outer) * 2));
        max-width:calc(1800px + calc(calc(4px * 4) * 2));
        max-width:calc(var(--max-width) + calc(var(--space-outer) * 2));
        margin:0 auto;
        padding:calc(4px * 6) calc(4px * 4);
        padding:var(--spacing-6) var(--space-outer);
        flex-direction: column;
        color: #FFFFFF;
        line-height: 1.15;
    }
    .banner__subtext{
        font-size:12px;
        text-transform: uppercase;
        letter-spacing: .05em;
    }
    .banner__heading{
        font-size: var(--heading-font);
        font-family: var(--font-heading);
        font-weight: var(--font-heading-weight);
        font-style: var(--font-heading-style);
        letter-spacing: 0;
        letter-spacing: var(--font-heading-base-letter-spacing, 0);
    }
    @media (max-width: 720px){
        .banner__heading{
            font-size: var(--heading-font-mob);
        }
    }
    .banner__description{
        font-size:16px;
    }
    @media (max-width: 720px){
        .banner__text-wrapp{
            justify-content:var(--vertical-align-mob);
            align-items:var(--horizontal-align-mob);
        }
    }
    .banner_text-container{
        max-width:500px;
    }
    .button-wrapper{
        margin-top:20px;
        @media (min-width: 768px){
            margin-top:24px;
        }
    }
    .responsive-image__wrapper{
        max-width: 100% !important;
    }`

    return(
        <>
        <div className="banner__container" style={getWrapperStyles()}>
           <div className="banner__images" id={`banner-image-${imageObjDesktop.id}`} style={{"poisition": "relative !important"}}>
            { imageObjMobile &&
                <div className="banner__mob-image-wrapp">
                    <ResponsiveImage image={imageObjMobile} image_aspect_ratio= {`${mobileratio}`} />
                </div>
                }
                { imageObjDesktop && 
                    <div className="banner__desktop-image-wrapp">
                        <ResponsiveImage image={imageObjDesktop} image_aspect_ratio={`${desktopratio}`} />
                    </div>
                }
        
                <div className="banner__text-wrapp">
                <div className="banner_text-container">
                <p className="banner__subheading " data-divider-enabled="false">
                        <span className="banner__subtext">{subheading}</span>
                    </p>
                    <h2 className="banner__heading">
                        {heading}
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
            <style>
                {css}
            </style>
        </div>
        </>
    )
}