import React, { useEffect, useState } from "react";

export default ({ shopifyData }) => {    
    const {data:{navigation:defaultNavigation, product_list: products, dynamicHeader = false}} = shopifyData;
    const handle = window.localStorage.getItem('location-page');
    const [navigation, updateNavigations] = useState(defaultNavigation);

    const updateNavigationItems = () => {
        const dynamicNavigation = JSON.parse(JSON.stringify(navigation));
        dynamicNavigation.forEach(item => {
            let {menu_link, sub_menu_title} = item;
            menu_link = `/collections/${handle}`
            item["menu_link"] = menu_link
            sub_menu_title.forEach(item => {
                let {url} = item;
                const params = url.split('?')[1];
                 const newurl = `${menu_link}?${params}&filter.v.availability=1`;
                 item["url"] = newurl 
            })
         })
         updateNavigations(dynamicNavigation);
    }

    const getNavigationItems = () => {
        (async () => {
            const navigation = await fetch(`/pages/${handle}?view=get-navigation`);
            const response = await navigation.json();
            updateNavigations(response.megamenu);
        })();
    }

    useEffect(() => {
        dynamicHeader ? getNavigationItems() : updateNavigationItems();
    },[])


    return (
        <>
            <div className="meganav__nav" data-column-count="4" data-show-column-dividers="true">
                <ul className="meganav__list-parent" depth="0" data-show-column-dividers="true">
                    {(navigation).map((nav, index) => { 
                        const {menu_link:link, menu_title:title, sub_menu_title: subMenuTitle} = nav;               
                        return <li className="meganav__list-child animation--dropdown-item has-children" depth="0" key={index}>
                                <h4 className="has-children fs-accent-bold">
                                    <a href={link} title="">{title}</a>
                                </h4>
                                <ul depth="1">
                                    {subMenuTitle.map((submenu,index) => {
                                        const {title, url} = submenu;
                                        return <li key={index}>
                                            <a className="fs-body-100" href={url}>{title}</a>
                                        </li>
                                    })}
                                </ul>
                        </li>
                    })}
                </ul>
                <span className="meganav__column-rule" data-index="1"></span>
                <span className="meganav__column-rule" data-index="2"></span>
                <span className="meganav__column-rule" data-index="3"></span>
            </div>
        </>
    )
}