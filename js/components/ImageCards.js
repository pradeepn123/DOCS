import React from 'react';
import ResponsiveImage from './ResponsiveImage';

export default ({block}) => {
  const {image_source:image} = block;
  const imageObj= {
    id: Date.now(),
    ...image
  }

  return(
    <div className="collection-item animation--item" data-image-crop="false">
    <a href={block.collection} className="collection-item__link">
      <div className="collection-item__image__wrap">
        <div className="image collection-item__image animation--lazy-load loaded">
          <ResponsiveImage image={imageObj} image_aspect_ratio={1} />
        </div>
      </div>
      <div className="collection-item__meta collection-item__title ff-body fs-body-100" data-text-alignment="center">
      </div>
    </a>
  </div>
  )
}