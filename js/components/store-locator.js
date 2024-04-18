import React, { useEffect, useState } from "react";

const storeCheckdIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="15" fill="#1B428A"/>
                        <path d="M8 14.5L13 19.5L21.5 11" stroke="white"/>
                        </svg>`;
const storeUnckeckIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="15" fill="#1B428A"></circle>
                        <path d="M8 14.5L13 19.5L21.5 11" stroke="white"></path>
                        </svg>`;

const chevronDown = `<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow_icon">
<path d="M1 0.625L4.75 4.375L8.5 0.625" stroke="black"></path>
</svg>`

export const SvgIcon = ({ icon, svgClass }) => {
  return <span className={svgClass} dangerouslySetInnerHTML={{ __html: icon }}></span>
}

export default ({ shopifyData }) => {
    const {data} = shopifyData || {}
    let curatedData = data.filter(item =>item.id);
    const location = window.localStorage.getItem("location");
    let selectedItem = curatedData.find(({id}) =>id == location);
    if(!selectedItem)  selectedItem = curatedData[0];
    const [selectedLocation, setSelectedLocation] = useState(selectedItem)
    const [isDropdownActive, setDropDownActive] = useState(false);

    //switch for drawer
    const isDrawer = false;
    //switch for dynamic content
    const isDynamic = false;

    const toggleDrawer = () => {
      //load the component from js/component into the modal and pass the data
      window.drawer.update('store-locator-modal', {data:curatedData});
    }

    const toggleDropdown = () => {
      setDropDownActive(!isDropdownActive);
    }
    const handleSelection = (location) => {
      setSelectedLocation(location);
    }
    useEffect(() => {
      window.localStorage.setItem("location", selectedLocation.id);
      window.localStorage.setItem("location-page", selectedLocation.handle);
      isDynamic && window.updateHomepage && window.updateHomepage();
    },[selectedLocation])

    useEffect (() => {
      window.addEventListener('click', (ev) => {
          if(!ev.target.closest('[data-dropdown-wrapper]')) {
            setDropDownActive(false);
          }
      })
    },[])
    return (
      <>
     <div className="store-locator__container" data-dropdown-wrapper onClick={isDrawer ? toggleDrawer : toggleDropdown}>
      <div className="store-locator__title">
        <p>Shop from</p>
      </div>
      <div className={`store-locator--dropdown store-locator__location ${isDropdownActive? 'select-clicked' : ''}`} data-dropdown-select>
          <p>{selectedLocation.title}</p>
          <SvgIcon icon={chevronDown} />
          <div className="store-locator__location-list">
            <div className={`storeDd-wrapper ${isDropdownActive? 'menu-open' : ''} `} data-dropdown-menu>
                {data.map((location,index) => {
                    const {id,title,address, url} = location || {};
                    return  <div className="storeDd-wrapper__optionsWrap" data-dropdown-selector="true" key={index} onClick={() => {handleSelection(location)}}>
                                <a 
                                href={`${isDynamic ? '#' : `${url}?filter.v.availability=1`}`} 
                                className={`storeDd-wrapper__options-box ${id == selectedLocation.id ? "checked" : ''}`}>
                                    <p className="storeDd-wrapper__storeName" store-name="true">{title}</p>
                                    <div className="storeDd-wrapper__text-container">
                                        <div className="storeDd-wrapper__storeAddress" dangerouslySetInnerHTML={{__html: address}}></div>
                                        <div className="storeDd-wrapper__button">
                                        <SvgIcon svgClass="" icon={id == selectedLocation? storeCheckdIcon : storeUnckeckIcon} />
                                        </div>
                                    </div>
                                </a>
                    </div>
                })}
            </div>
          </div>
        </div>
        </div>
      </>
    )
  }