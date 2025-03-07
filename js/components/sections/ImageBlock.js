import React from 'react'
import ImageCard from 'JsComponents/ImageCard';
import Carousel from '../Carousel';


export default ({data}) => {
  const{blocks,heading,imagefit,aspectratio = 1,slides} = data;
  const settings = {
    "slidesPerView": 2.1,
    "navigation": false,
    "pagination": false,
    "spaceBetween": "12px",
    "breakpoints": {
      "768": {
        "slidesPerView": 3.2,
        "spaceBetween": "16px",
      },
      "1024": {
        "slidesPerView": `${slides}`,
        "spaceBetween": "24px",
      }
    }
  }
  
  
  return (
    <div className='collection-list' style={{"--section-style-spacing-top": "36px", "--section-style-spacing-bottom": "36px"}}>
      <div className='section-inner'>
        <div className='collection-list__inner'>
          <div className="section-header section-blocks animation--container-header" data-alignment="center">
            <h2 className="ff-heading section-header__heading fs-heading-3-base">
              {heading}
            </h2>
          </div>
          <div className='collection-list__collections'>
             <Carousel settings={settings}>
              {blocks.map((block, index) => (
                <ImageCard block={block} key={index} imageFit={imagefit} aspectratio={aspectratio}/>
              ))}
              </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
