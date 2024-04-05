import React from 'react'
import ImageCard from 'JsComponents/ImageCards';;

export default ({data}) => {
  const{blocks,heading, imageFit, aspectRatio = 1} = data;

  
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
            <div className="scroll-slider scroll-slider--full-width-below-1024 scroll-slider--peek-and-full-width-below-1024 scroll-all-sizes"
              style={{"--columns": "2", "--columns-above-720": "4", "--peek": "24px", "--peek-above-720": "0px", "--gap": "12px", "--gap-above-1024": "16px", "--gap-above-1200": "24px"}}>
              <div className='scroll-slider__slider'>
              {blocks.map((block, index) => (
                <ImageCard block={block} key={index} imageFit={imageFit} aspectRatio={aspectRatio}/>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
