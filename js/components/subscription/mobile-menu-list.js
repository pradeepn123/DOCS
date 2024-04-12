import React, {useEffect, useState} from "react";

export default ({ shopifyData }) => {
    console.log(shopifyData,'data')    
    const {links} = shopifyData;    

    const [navigation, updateNavigations] = useState(links);

    const updateNavigationItems = () => {
        const dynamicNavigation = JSON.parse(JSON.stringify(navigation));
        dynamicNavigation.forEach(item => {
            let {url:menu_link, sub_menu_title=[]} = item;
            const handle = window.localStorage.getItem('location-page');
            menu_link = `/collections/${handle}`
            item["url"] = menu_link
            sub_menu_title.forEach(item => {
                let {url} = item;
                const params = url.split('?')[1];
                 const newurl = `${menu_link}?${params}&filter.v.availability=1`;
                 item["url"] = newurl 
            })
         })
        updateNavigations(dynamicNavigation);
    }
    useEffect(() => {
        updateNavigationItems();
    },[])

    return (
        <>  
            {(links).map((nav, index) => { 
                const {title,url} = nav;
                return <li className="mobile-menu__item fs-body-100" key={index}>    
                    <a
                        className="mobile-menu__link no-transition active"
                        href={url}
                    >
                        <span className="mobile-menu__link__text fs-body-100">{title}</span>                
                    </a>
                </li>
            })}
        </>
    )
}