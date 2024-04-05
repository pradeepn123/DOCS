import React from "react";

export default ({ data, wrapperclass }) => {    
    let {heading, desktopImage, mobileImage, subheading, url, button} = data || {}; 
    let {srcDesktop} = desktopImage || {}; 
    let {srcMobile} = mobileImage || {};     

    return(

        <div className="scroll-slider__slider" data-slide-count="1">
            <div className="slideshow-slide" data-index="0">
                <div className="slideshow-slide__inner">
                    <div className="background-image-container image-hero__image-container" data-has-mobile-image="true" data-absolutely-position-image="false">
                        { srcMobile &&
                            <div className="image background-image background-image--mobile" style={{"--focal-alignment": "center"}}>
                                <img alt="" className="image__img" fetchpriority="high" width="1440" height="550" src={srcMobile}  style={{"height": "550px", "objectFit": "cover"}}/>
                            </div> 
                        }
                        { srcDesktop &&
                            <div className="image background-image " style={{"--focal-alignment": "center"}}>
                                <img alt="" className="image__img" fetchpriority="high" width="1440" height="550" src={srcDesktop}  style={{"height": "550px", "objectFit": "cover"}}/>
                            </div>
                        }
                    </div>
                    <div className="slideshow-slide__overlay image-overlay animation--image-overlay" data-image-overlay-tint-style="solid" style={{"--overlay-opacity":"20%", "--color-overlay-tint": "#000;"}}></div>
                        <div className={`slideshow-slide__text-container-wrapper ${wrapperclass}`}>
                            <div className="slideshow-slide__text-container text-container image-overlay-content animation--item" style={{"--color-text": "#FFFFFF", "--color-background": "#000", "--color-text-alpha-90": "rgba(255, 255, 255, 0.9)", "--color-text-alpha-80": "rgba(255, 255, 255, 0.8)", "--color-text-alpha-70": "rgba(255, 255, 255, 0.7)", "--color-text-alpha-60": "rgba(255, 255, 255, 0.6)", "--color-text-alpha-50": "rgba(255, 255, 255, 0.5)", "--color-text-alpha-40": "rgba(255, 255, 255, 0.4)", "--color-text-alpha-30": "rgba(255, 255, 255, 0.3)", "--color-text-alpha-25": "rgba(255, 255, 255, 0.25)", "--color-text-alpha-20": "rgba(255, 255, 255, 0.2)", "--color-text-alpha-10": "rgba(255, 255, 255, 0.1)", "--color-text-alpha-05": "rgba(255, 255, 255, 0.05)", "--delay-offset-multiplier": "3"}}>
                            <div className="slideshow-slide__text-container-inner text-container-inner section-blocks animation--container">
                                <p className="section-blocks__accent fs-accent " data-divider-enabled="false" style={{"--delay-offset-multiplier": "4"}}>
                                    <span className="accent__text">{subheading}</span>
                                </p>
                                <h2 className="slideshow-slide__text-container-heading ff-heading fs-heading-display-1 section-blocks__heading" style={{"--delay-offset-multiplier": "5"}}>
                                    {heading}
                                </h2>
                                <div className="button-wrapper slideshow-slide__text-container-image-button section-blocks__button" data-alignment="none" style={{"--delay-offset-multiplier":"6"}}>
                                    <a className="btn btn--primary" href={url}>
                                        <span>{button}</span> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       
    )
}