import React, { useEffect, useState } from 'react';

export default ({shopifyData}) => {

  const [sections, updateSections] = useState([]);
   useEffect(() => {
    (async () => {
        const data = await fetch('/pages/clarkston');
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
        const script = document.createElement("script");
        script.src = shopifyData.url;
        script.async = false;
        document.body.appendChild(script)

        updateSections(sections);
    })();
   }, []);

   return ( sections.map((componentData, index) => {
    const {Component, props} = componentData;
    return <Component data={props} key={index}/>
   }))
}
