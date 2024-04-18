import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import MobileAccountDrawer from "./mobile-account-drawer";

export default ({ shopifyData }) => {
    console.log(shopifyData, "data");
    const {data: { menu_list: menulinks }} = shopifyData;
    const handleUrl = window.localStorage.getItem('location-page');
    const collectionUrl = `/collections/${handleUrl}`;
    const [updatedLinks, setLinks] = useState(menulinks);

    const updateLink = (menuLink) => {
        const {handle:url} = menuLink || {};
        const params = url.split('?')[1];
        if(params) {
            menuLink["handle"]= `${collectionUrl}?${params}&filter.v.availability=1`
        }
        else {
            menuLink["handle"]= `${collectionUrl}?filter.v.availability=1`
        }
    }

    const updateLinks = (arr) => {
        arr.forEach(link => {
            const { handle:url, submenu = []} = link;
            if(url != "#") {
              updateLink(link)
            }
            if(submenu.length) {
            updateLinks(submenu);
            }
        })
    }
  
    useEffect(() => {
        const menulinkCloned = JSON.parse(JSON.stringify(menulinks));
        updateLinks(menulinkCloned);
        setLinks(menulinkCloned);
    }, []);

    useEffect(() => {
        const container = document.querySelector('body');
        window.menuNav(container);
        window.AccountLogin(container);
    }, [updatedLinks])
  
    const MenuItem = ({ item, index }) => {
        const { handle, title, submenu, depth } = item;
        const container = document.querySelector(".mobile-menu__links-wrapper");
        const chevronIcon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.875 7.438 12 17.563 22.125 7.438" stroke="currentColor" stroke-width="2"></path> </svg>`;

        return (
            <>
                <li className="mobile-menu__item fs-body-100" data-depth={depth}>
                        {submenu ? (
                        <a className="mobile-menu__link no-transition" href="#" data-action="show-sub-pane" data-link-target-pane-key={`submenu-shop-${index}-${depth}`} data-link="primary" aria-haspopup="true" aria-expanded="false">
                            <span className="mobile-menu__link__text fs-body-100">{title}</span>
                            {submenu && (
                                <span className="icon icon-chevron menu-icon" dangerouslySetInnerHTML={{ __html: chevronIcon }}></span>
                            )}
                            {submenu && createPortal( <MenuList listArray={submenu} depth={depth} index={index} />, container)}
                        </a>
                        ) : (
                        <a className="mobile-menu__link" href={handle}>
                            <span className="mobile-menu__link__text fs-body-100">{title}</span>
                        </a>
                    )}
                </li>
            </>
        );
    };

    const MenuList = ({ listArray, depth, index = 0 }) => {
        if (depth) {
        const chevronIconReverse = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.4016H11.5H23M23 12.4016L13.8 3M23 12.4016L13.8 21.8032" stroke="currentColor" stroke-width="1.75"></path>
            </svg>`;
        const chevronIconBack = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.875 7.438 12 17.563 22.125 7.438" stroke="currentColor" strokeWidth="2"></path></svg>`
        
            return (
                <>            
                    <ul
                        data-menu-depth={depth}
                        data-pane-key={`submenu-shop-${index}-${depth}`}
                        data-scroll-lock-ignore="" aria-hidden="true" inert=""
                        className="mobile-menu__list mobile-menu__list--sub"
                    >            
                        <li className="mobile-menu__item mobile-menu__item--header">
                            <button className="mobile-menu__item--heading-back-link fs-body-100 " data-action="home" aria-label="Back to Main Menu">
                                <span className="icon icon-arrow-short back-link-icon" dangerouslySetInnerHTML={{__html: chevronIconReverse}}></span>
                                Back to Main Menu
                            </button>
                        </li>
                        { depth == 2 &&
                            <li className="mobile-menu__item mobile-menu__item--callout">
                                <button data-action="show-sub-pane" data-link-target-pane-key="submenu-shop-0-1" className="mobile-menu__link fs-body-100" aria-expanded="true">
                                    <span className="icon icon-chevron back-link-icon" dangerouslySetInnerHTML={{__html: chevronIconBack}}></span>Shop 
                                </button>
                            </li>
                        }
                        { depth == 1 &&
                        <li className="mobile-menu__item mobile-menu__item--heading">
                            <a className="mobile-menu__link" data-heading="true" href="#">
                                <span className="ff-heading fs-body-300 fs-heading-4-base">Shop </span>
                            </a>
                        </li>}
                        {listArray.map((item, index) => (
                            <MenuItem item={item} index={index} key={`item-${index}-${depth}}`} />                
                        ))}
                    </ul>
                    { depth == 1 &&
                        <MobileAccountDrawer/>
                    }
                </>
            );
        } else {
            const chevronIconAccount = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.992 2.664a4.71 4.71 0 0 1 2.447.685 5.035 5.035 0 0 1 1.795 1.88c.432.781.661 1.668.665 2.572a5.373 5.373 0 0 1-.644 2.579 5.05 5.05 0 0 1-1.673 1.826.552.552 0 0 0-.131.083 4.72 4.72 0 0 1-2.428.683 4.721 4.721 0 0 1-2.457-.686 5.046 5.046 0 0 1-1.801-1.887 5.37 5.37 0 0 1-.007-5.156 5.037 5.037 0 0 1 1.79-1.886 4.71 4.71 0 0 1 2.444-.693zm2.87 10.716a5.778 5.778 0 0 1-2.837.757 5.776 5.776 0 0 1-2.874-.762 8.657 8.657 0 0 0-4.094 3.21 9.386 9.386 0 0 0-1.65 5.333c0 .321-.247.582-.552.582-.306 0-.553-.26-.553-.582 0-2.163.652-4.27 1.861-6.019a9.826 9.826 0 0 1 3.898-3.32 6.272 6.272 0 0 1-1.252-1.596 6.593 6.593 0 0 1-.814-3.165v-.002A6.582 6.582 0 0 1 6.8 4.66a6.174 6.174 0 0 1 2.194-2.31 5.774 5.774 0 0 1 2.997-.85 5.773 5.773 0 0 1 2.999.84 6.17 6.17 0 0 1 2.2 2.303c.53.958.81 2.045.814 3.154a6.584 6.584 0 0 1-.789 3.16 6.27 6.27 0 0 1-1.265 1.628 9.824 9.824 0 0 1 3.887 3.314 10.593 10.593 0 0 1 1.861 6.019c0 .321-.247.582-.553.582-.305 0-.553-.26-.553-.582a9.387 9.387 0 0 0-1.65-5.333 8.656 8.656 0 0 0-4.08-3.205z" fill="currentColor" stroke="currentColor" stroke-width=".19"></path></svg>`
            return (
                <>
                    <ul data-primary-container="true">
                        <li className="mobile-menu__item mobile-menu__item--header">
                            <div className="mobile-menu__item--heading-content">
                                <div className="ff-heading fs-heading-5-base">Menu</div>
                            </div>
                        </li>
                        <li className="mobile-menu__item mobile-menu__item--callout">
                            <button data-action="show-sub-pane" data-link-target-pane-key="account-info" className="mobile-menu__link">
                                <span className="icon icon-header-account" dangerouslySetInnerHTML={{__html: chevronIconAccount}}></span>
                                <span className="fs-body-100">
                                    Log in or Create an Account
                                </span>
                            </button>
                        </li>
                        {listArray.map((item, index) => (
                            <MenuItem item={item} key={`menu-${index}-${depth}`} index={index} />
                        ))}
                    </ul>            
                </>
            );
        }
    };
    
    return <MenuList listArray={updatedLinks} />;
};
