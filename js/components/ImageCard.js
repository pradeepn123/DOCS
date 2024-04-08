import React from 'react';
import ResponsiveImage from './ResponsiveImage';

export default ({block, imageFit ,aspectratio}) => {
  console.log('aspectratio-imagecard',aspectratio);
  const {image_source:image, collection_title} = block;
  const imageObj= {
    id: Date.now(),
    ...image
  }
  const imageSettings = {
    imageFit
  }

  return(
    <div className="collection-item animation--item" data-image-crop="false">
      <a href={block.collection} className="collection-item__link">
        <div className="collection-item__image__wrap">
          <div className="image collection-item__image">
            <ResponsiveImage image={imageObj} aspectratio={aspectratio} settings={imageSettings} imageFit={imageFit} />
          </div>
        </div>
        <div className="collection-item__meta collection-item__title ff-heading fs-body-100" data-text-alignment="center">{collection_title}</div>
      </a>
    </div>
  )
}