import React, {useContext} from 'react';
import { ColorContext } from './Color';

const ShowArea = () => {
    const {color} = useContext(ColorContext)
    return ( <div style={{color: color}} >字体颜色是blue</div> );
}
 
export default ShowArea;