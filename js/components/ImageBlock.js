import React from 'react'

export default (data) => {
  // console.log(data);
  const dataValues = data.data;
  const imageCards = dataValues.blocks;
  // console.log(imageCards);
  return (
    <div>

      <h1>{dataValues.heading}</h1>
      {imageCards.map((item, index) => (
        <div key={index}>
          {console.log("item...", item)}
          <p>{item.collection}</p>
          <p>{item.collection_filter}</p>
          <p>{item.collection_filter_type}</p>
          {item.collection_title && <p>{item.collection_title}</p>}
          {item.image_source && <p>{item.image_source}</p>}
          <div className="collection-item animation--item" data-image-crop="false">
           <a href={item.collection} className="collection-item__link">
             <div className="collection-item__image__wrap">
               <div className="image collection-item__image aspect-ratio--square animation--lazy-load loaded">
                 <img alt="" className="image__img" loading="lazy" src={item.image_source} />
               </div>
             </div>
             <div className="collection-item__meta collection-item__title ff-heading fs-body-100" data-text-alignment="center"> {item.collection_title} </div>
           </a>
         </div> 
        </div>

      ))}


    </div>
  )
}
