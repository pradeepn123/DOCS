import React, { useEffect, useState } from "react";

import {
    CloseIcon,
    IconCheckCircle,
    IconLocation,
    IconPhone,
    IconEmail,
    IconUpwardCarat,
    IconDownwardCarat
} from './Icon';

export default ({data}) => {
    const curatedData = data.data;
    const location = window.localStorage.getItem("location");
    let selectedItem = curatedData.find(({id}) =>id == location);
    if(!selectedItem)  selectedItem = curatedData[0];
    const [selectedLocation, setSelectedLocation] = useState(selectedItem)
    
    const [filteredStores, setFilteredStores] = useState(curatedData);
    const [toggleDetail, setToggleDetail] = useState({});

    const closeDrawer = () => {
        window.drawer.close('store-locator');
    };

    const toggleStoreDetail = (index) => {
        setToggleDetail((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const searchStore = (event) => {
        
        const searchText = event.target.value.trim().toLowerCase();
        if (searchText === '') {
            setFilteredStores(curatedData);
        } else {
            const filtered = curatedData.filter(store => store.title.toLowerCase().includes(searchText));
            setFilteredStores(filtered);
        }
    }

    const handleSelection = (location) => {
      setSelectedLocation(location);
    }

    useEffect(() => {
        window.localStorage.setItem("location", selectedLocation.id);
        window.localStorage.setItem("location-page", selectedLocation.handle);
      },[selectedLocation])

    return (
    <div className="store-locator--drawer" data-dropdown-menu>
    <div className="drawer-content__block">
        <div className="drawer-content__header">
            <h2 className="drawer-content__heading ff-heading fs-heading-5-base">Select your preferred store</h2>
            <button type="button" data-modal-close="" className="drawer-content__close-icon" aria-label="Close" onClick={closeDrawer}>
                <span className="icon-button modal-drawer-close" data-size="large" data-has-secondary-icon="false" style={{ "--icon-width": "24px", "--icon-height": "24px" }}>
                    <span className="icon-button__icon">
                        <CloseIcon className="icon icon-modal-drawer-close icon--primary" />
                    </span>
                </span>
            </button>
        </div>

        <div className={`drawer__main-content`} data-dropdown-select>
            <span className="store-location-drawer__search">
                <input className="search-input" placeholder="Search.." onChange={(e) => searchStore(e)} />
            </span>
            
            {filteredStores.map((location,index) => {
                const address = { __html: `${location.address}` };
                
                return <div className="storeDd-wrapper__optionsWrap" data-dropdown-selector="true" key={index} onClick={() => {handleSelection(location)}}>
                    <div className={`storeDd-wrapper__options-box ${location.id == selectedLocation.id ? "checked" : ''}`}>
                        <a href={`${location.url}?filter.v.availability=1`}>
                            <div className="storeDd-wrapper__text-container">
                                <p className="storeDd-wrapper__storeName" store-name="true">{location.title}</p>
                                <div className="storeDd-wrapper__button">
                                    <IconCheckCircle />
                                </div>
                            </div>
                        </a>
                        <div className="storeDd-wrapper__text-icon-container">
                            <div className="storeDd-wrapper__storeIcon">
                                <IconLocation className="store-location-icon" />
                            </div>
                           
                            <div className="storeDd-wrapper__storeAddress" dangerouslySetInnerHTML={address} />
                            
                        </div>

                        
                        {toggleDetail[index] && (
                            <>
                                {location.phone && <div className="storeDd-wrapper__text-icon-container">
                                    <div className="storeDd-wrapper__storeIcon">
                                        <IconPhone className="store-location-icon" />
                                    </div>
                                    <div className="storeDd-wrapper__storeAddress"><a href={`tel:${location.phone}`}>{location.phone}</a></div>
                                </div>}
                                {location.email && <div className="storeDd-wrapper__text-icon-container">
                                    <div className="storeDd-wrapper__storeIcon">
                                        <IconEmail className="store-location-icon" />
                                    </div>
                                    <div className="storeDd-wrapper__storeAddress"><a href={`mailto:${location.email}`}>{location.email}</a></div>
                                </div>}
                            </>
                        )}
                    </div>

                    {(location.phone || location.email) &&
                    <p onClick={() => toggleStoreDetail(index)}>
                        {toggleDetail[index] ? 
                            <span className="show-detail-text">
                                Show less  <IconUpwardCarat />
                            </span> : <span className="show-detail-text">
                                More details  <IconDownwardCarat />
                        </span>}
                    </p>}

                </div>
            })}
        </div>
    </div>
</div>)
}