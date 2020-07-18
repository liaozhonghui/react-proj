import React, { useState } from 'react';

const StyleControl = () => {
    const [color, setColor] = useState();

    const onChangeColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue')
    }
    return (
        <div>
            <div>控制style使用1</div>
            <div className='example3'>控制style使用2</div>

            <div><button onClick={onChangeColor} >改变颜色</button></div>

            <style jsx>
                {`
                    div{color:blue};
                    .example3{color:${color};}
                `}
            </style>
        </div>
    );
}

export default StyleControl;