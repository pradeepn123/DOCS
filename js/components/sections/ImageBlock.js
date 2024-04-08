import React from 'react'
import ImageCard from 'JsComponents/ImageCards';
import Carousel from '../Carousel';

export default ({data}) => {
  const{blocks,heading} = data;
  const settings = {
    "slidesPerView": 2.1,
    "spaceBetween": "12px",
    "breakpoints": {
      "768": {
        "slidesPerView": 3.2,
        "spaceBetween": "16px",
      },
      "1024": {
        "slidesPerView": 4,
        "spaceBetween": "24px",
      }
    }
  }
  
  return (
    <div className='collection-list'>
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
                <ImageCard block={block} key={index}/>
              ))}
              </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
