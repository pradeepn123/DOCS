import React, { useEffect, useState } from "react";

const storeCheckdIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="15" fill="#1B428A"/>
                        <path d="M8 14.5L13 19.5L21.5 11" stroke="white"/>
                        </svg>`;
const storeUnckeckIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="15" fill="#1B428A"></circle>
                        <path d="M8 14.5L13 19.5L21.5 11" stroke="white"></path>
                        </svg>`;

export const SvgIcon = ({ icon, svgClass }) => {
  return <span className={svgClass} dangerouslySetInnerHTML={{ __html: icon }}></span>
}

export default ({ shopifyData }) => {
    debugger;
    const {data} = shopifyData || {}
    let curatedData = data.filter(item =>item.id);
    const [selectedLocation, setSelectedLocation] = useState(curatedData[0].id)
  
    return (
      <>
       <div className="storeDd-wrapper" data-dropdown-menu>
            {data.map((location,index) => {
                const {id,title,address} = location || {};
                console.log("iii",id);
                return  <div className="storeDd-wrapper__optionsWrap" data-dropdown-selector={true} key={index}>
                            <a href="/collections/clarkston" className={`storeDd-wrapper__options-box ${id == selectedLocation? "checked" : ''}`}>
                                <p className="storeDd-wrapper__storeName" store-name>{title}</p>
                                <div className="storeDd-wrapper__text-container">
                                    <div className="storeDd-wrapper__storeAddress">{address}</div>
                                    <div className="storeDd-wrapper__button">
                                    <SvgIcon svgClass="" icon={id == selectedLocation? storeCheckdIcon : storeUnckeckIcon} />
                                    </div>
                                </div>
                            </a>
                        </div>
            })}
            
        </div>

      </>
    )
  }