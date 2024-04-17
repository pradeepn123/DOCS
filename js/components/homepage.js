import React, { useEffect, useState } from 'react';
import BreakpointWrapper from './contexts/breakpointContextWrapper';

export default ({shopifyData}) => {
  const [sections, updateSections] = useState([]);

  const getSectionData = () => {
    (async () => {
      const loader = document.querySelector('.product-card-item__placeholder')
      loader.style.display = 'block';
      const bannerLoader = document.querySelector('.banner_loader_section')
      bannerLoader.style.display = 'block';
        const handle = window.localStorage.getItem('location-page');
        const data = await fetch(`/pages/${handle}`);
        var xmlString = await data.text();
        var pageDoc = new DOMParser().parseFromString(xmlString, "text/html");
        let pageData = "";
        pageDoc.querySelectorAll('[data-json]').forEach((scriptData, index) => {
          if(index) {
            pageData = pageData + ","
          }
          pageData = pageData +`${scriptData.innerHTML}`;
        })
        pageData = `{ ${pageData} }`
        const sectionData = JSON.parse(pageData)
        const sections = await Promise.all(Object.keys(sectionData).map( async (sectionKey,index) => {
            const props = sectionData[sectionKey];
            const componentKey = sectionKey.split('-section-type')[0];
            const module = await import(/* webpackChunkName: "module" */ `JsDynamicSections/${componentKey}.js`);
            const Component = await module.default;
            return {
                props: props,
                Component: Component
            }
        }))
        if(sectionData){
          const loader = document.querySelector('.product-card-item__placeholder')
          loader.style.display = 'none';

          const bannerLoader = document.querySelector('.banner_loader_section')
          bannerLoader.style.display = 'none';
        }
        updateSections(sections);
    })();
  }
   useEffect(() => {
    getSectionData();
   }, []);

   window.updateHomepage = getSectionData;


   return ( sections.map((componentData, index) => {
    const {Component, props} = componentData;
    return <Component data={props} key={index}/>;
   }))
}
