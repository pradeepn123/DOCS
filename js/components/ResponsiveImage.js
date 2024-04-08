import React from "react";

export default ({ aspectratio, image, settings }) => {
  const min = 100;
  const max = 10000;
  const diff = max - min;
  const generated_image_id = Date.now() / diff + min;
  let displayImage = image;
  if (!displayImage) {
    displayImage = {
      width: 1920,
      height: 1080,
      id: Date.now(),
      src: 'https://cdn.shopify.com/s/files/1/0422/2255/1191/files/placeholderImage.webp?v=1692958737'
    };
  }

  
  const {imageFit} = settings || {};

  let { height: maxHeightImage, id: image_id, src: imageSrc, width: maxWidthImage } = displayImage;
  const IMAGE_WIDTHS = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2160, 2376, 2592, 2808, 3024]
  const getImageWidths = nativeWidth => {
    const imageWidths = [];
    for (let i = 0; i < IMAGE_WIDTHS.length; i++) {
      const width = IMAGE_WIDTHS[i];
      if (nativeWidth > width) {
        imageWidths.push(width);
      } else {
        imageWidths.push(nativeWidth);
        break;
      }
    }
    return imageWidths.join(',');
  }

  const imageSizes = (getImageWidths(displayImage.width)).split(',');
  const imageSrcSet = imageSizes.map(width => {
    return `${displayImage.src}&width=${width} ${width}w`
  }).join(",")

  if (aspectratio <= 1) {
    maxWidthImage = parseInt(maxHeightImage) * aspectratio;
  }
  else {
    maxHeightImage = parseInt(maxWidthImage) / aspectratio;
  }
  const maxWidthImageFloat = maxWidthImage * 1.0;

  const getWrapperStyles = () => {
    return {
      '--padding-top': `${(maxHeightImage / maxWidthImageFloat) * 100}%`,
      '--max-height': `${maxHeightImage}px`,
      '--max-width': `${maxWidthImage}px`
    };
  };

  const getImageStyle = () => {
    return {
      maxWidth: `${maxWidthImage}px`,
      maxHeight: `${maxHeightImage}px`,
      objectFit: `${imageFit ? imageFit : 'contain'}`,
      aspectRatio:`${aspectratio}`,
    };
  };

  const css = `
  .responsive-image__wrapper:before {
    content: '';
    width: 100%;
    display: block;
    padding-top: var(--padding-top);
  }

  .responsive-image__wrapper {
      height: 100%;
      position: relative;
      max-width: var(--max-width);
      max-height: var(--max-height);
  }

  .responsive-image__image {
      position: absolute;
      top: 0;
      height: 100%;
      left: 0;
      width: 100%;
      object-fit: var(--objectFit);
      aspect-ratio: var(--aspectRatio);
      
  }`
 
  return (
    <>
      <div
        id={`ImageWrapper-${image_id}-${generated_image_id}`}
        data-image-id={image_id}
        className="responsive-image__wrapper"
        style={getWrapperStyles()}
      >
        
        <img
          id={`Image-${image_id}-${generated_image_id}`}
          className="responsive-image__image"
          src={displayImage.src}
          load="lazy"
          srcSet={imageSrcSet}
          data-widths={`[${imageSizes}]`}
          data-aspectratio={aspectratio}
          data-sizes="auto"
          tabIndex="-1"
          style={getImageStyle()}
        />
        <style>
            {css}
        </style>
      </div>
   
    </>
  )
}