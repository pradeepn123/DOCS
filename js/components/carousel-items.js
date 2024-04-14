import React from "react";
import { createPortal } from "react-dom";
import {CAROUSEL} from 'JsComponents/constants';


const SwiperWrapper = ({ children }) => {
    return (<div className="carousel__container swiper" data-swiper-container>
        <div className="swiper-wrapper">
            {children.map((renderedComponent, index) => {
                return <div className="swiper-slide" key={index}>
                    {renderedComponent}
                </div>
            }
            )}
        </div></div>)
}

const Navigation = ({wrapperClass, container}) => {
    const childNode = <div className={`swiper-navigations ${wrapperClass}`} data-navigations></div>
    return(
        container ? 
        createPortal(childNode,container)
        :
        childNode
      )
}

const Pagination = ({wrapperClass, container}) => {
    const childNode = <div className={`swiper-pagination ${wrapperClass}`} data-pagination></div>
    return(
      container ? 
      createPortal(childNode,container)
      :
      childNode
    )
}


export default ({ children = [], settings={}}) => {
    const {parentRef,navigationWrapperClass,paginationWrapperClass} = settings;
    const paginationContainer = parentRef && parentRef.querySelector(CAROUSEL["paginationWrapper"]);
    const navigationContainer = parentRef && parentRef.querySelector(CAROUSEL["navigationWrapper"]);
      return (
        <>
         <SwiperWrapper children={children} />
         <Navigation wrapperClass={navigationWrapperClass} container={navigationContainer}/>
         <Pagination wrapperClass={paginationWrapperClass} container={paginationContainer} />
         </>
      )
    }