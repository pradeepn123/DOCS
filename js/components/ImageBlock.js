import React from 'react'
import ImageCard from './ImageCards';;

export default ({data}) => {

  const{blocks,heading,aspectratio} = data;
  console.log(data)
     
  return (
    <div>
    
          <div className="section-header section-blocks animation--container-header" data-alignment="center">
              <h2 className="ff-heading section-header__heading fs-heading-3-base">
              {heading}
              </h2>
              <p>34567</p>
          </div>
          <div className="test" style={{border:"1px solid red"}}>
            <div className="scroll-slider__slider" data-slide-count="4">
              {blocks.map((block, index) => (
                <ImageCard block={block} key={index} aspectratio={1}/>
              ))}
            </div>
          </div>
      </div>
   
  )
}
 
