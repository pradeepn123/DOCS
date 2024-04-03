import React from "react";

export default ({ data }) => {
    console.log('data', data);
    let {title, image=[], subText, url, button} = data || {}; 
    const imageDesktop = image.map((image) => {return image.desktopImage});
    const imageMobile = image.map((image) => {return image.mobileImage})

    return(
        <div className="banne__container">
            <div className="image background-image slideshow-slide__image animation--image animation--lazy-load loaded"style={{"--focal-alignment": "center;"}} >
                <img className="image__img" src={imageDesktop} alt={imageDesktop } />
                {/* <img src={imageMobile} alt={imageMobile } /> */}
            </div>
        
            <div className="slideshow-slide__text-container-inner text-container-inner section-blocks animation--container">
                <p class="section-blocks__accent fs-accent " data-divider-enabled="false" style={{"--delay-offset-multiplier": "4"}}>
                    <span class="accent__text">{subText}</span>
                </p>
                <h2 class="slideshow-slide__text-container-heading ff-heading fs-heading-display-1 section-blocks__heading" style={{"--delay-offset-multiplier": "5"}}>
                    {title}
                </h2>
                { url ?
                    <div className="button-wrapper slideshow-slide__text-container-image-button section-blocks__button" data-alignment="none" style={{"--delay-offset-multiplier": "6"}}>
                        <a className="btn btn--primary" href={url}>
                            <span>{button}</span>
                        </a>
                    </div>
                : ''}
            </div>

        </div>
       
    )
}