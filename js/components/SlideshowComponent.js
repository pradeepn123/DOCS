import React,{useEffect} from 'react';
import Carousel from './Carousel';

export default ({data}) => {
const arr = [1,2,3,4];

return(
  <Carousel slides={arr} />
)

}