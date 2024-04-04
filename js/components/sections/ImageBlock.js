import React from 'react'
import ImageCard from 'JsComponents/ImageCards';;

export default ({data}) => {
  const{blocks,heading} = data;
  
  return (
    <div>

      <div className="section-header section-blocks animation--container-header" data-alignment="center">
          <h2 className="ff-heading section-header__heading fs-heading-3-base">
          {heading}
          </h2>
      </div>
      {blocks.map((block, index) => (
         <ImageCard block={block} key={index}/>
      ))}
    </div>
  )
}
