import React from "react";

export default ({ data }) => {    
    let {heading, image=[], subheading, url, button} = data || {}; 
    const imageDesktop = image.map((image) => {return image.desktopImage});
    const imageMobile = image.map((image) => {return image.mobileImage});

    return(

        <div class="scroll-slider__slider" data-slide-count="1">
            <div class="slideshow-slide" data-index="0">
                <div class="slideshow-slide__inner">
                    <div class="background-image-container image-hero__image-container" data-has-mobile-image="true" data-absolutely-position-image="false">
                        { imageMobile &&
                            <div class="image background-image background-image--mobile" style={{"--focal-alignment": "center"}}>
                                <img alt="" class="image__img" fetchpriority="high" width="1440" height="550" src={imageMobile}  style={{"height": "550px", "objectFit": "cover"}}/>
                            </div> 
                        }
                        { imageDesktop &&
                            <div class="image background-image " style={{"--focal-alignment": "center"}}>
                                <img alt="" class="image__img" fetchpriority="high" width="1440" height="550" src={imageDesktop}  style={{"height": "550px", "objectFit": "cover"}}/>
                            </div>
                        }
                    </div>
                    <div class="slideshow-slide__overlay image-overlay animation--image-overlay" data-image-overlay-tint-style="solid" style={{"--overlay-opacity":"20%", "--color-overlay-tint": "#000;"}}></div>
                    <div class="slideshow-slide__text-container-wrapper" style={{"--text-horizontal-position": "flex-start", "--text-horizontal-position-mobile": "flex-start" , "--text-vertical-position": "center", "--text-vertical-position-mobile": "center" , "--text-alignment": "left" , "--text-alignment-mobile": "left",
                        "--content-max-width": "500px"}}>
                        <div class="slideshow-slide__text-container text-container image-overlay-content animation--item" style={{"--color-text": "#FFFFFF", "--color-background": "#000", "--color-text-alpha-90": "rgba(255, 255, 255, 0.9)", "--color-text-alpha-80": "rgba(255, 255, 255, 0.8)", "--color-text-alpha-70": "rgba(255, 255, 255, 0.7)", "--color-text-alpha-60": "rgba(255, 255, 255, 0.6)", "--color-text-alpha-50": "rgba(255, 255, 255, 0.5)", "--color-text-alpha-40": "rgba(255, 255, 255, 0.4)", "--color-text-alpha-30": "rgba(255, 255, 255, 0.3)", "--color-text-alpha-25": "rgba(255, 255, 255, 0.25)", "--color-text-alpha-20": "rgba(255, 255, 255, 0.2)", "--color-text-alpha-10": "rgba(255, 255, 255, 0.1)", "--color-text-alpha-05": "rgba(255, 255, 255, 0.05)", "--delay-offset-multiplier": "3"}}>
                        <div class="slideshow-slide__text-container-inner text-container-inner section-blocks animation--container">
                            <p class="section-blocks__accent fs-accent " data-divider-enabled="false" style={{"--delay-offset-multiplier": "4"}}>
                                <span class="accent__text">{subheading}</span>
                            </p>
                            <h2 class="slideshow-slide__text-container-heading ff-heading fs-heading-display-1 section-blocks__heading" style={{"--delay-offset-multiplier": "5"}}>
                                {heading}
                            </h2>
                            <div class="button-wrapper slideshow-slide__text-container-image-button section-blocks__button" data-alignment="none" style={{"--delay-offset-multiplier":"6"}}>
                                <a class="btn btn--primary" href={url}>
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