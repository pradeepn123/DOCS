import React from "react";

export default ({ shopifyData }) => {    
    const {data:{navigation, product_list: products}} = shopifyData;
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