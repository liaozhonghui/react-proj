import React, { useState } from 'react';
import dynamic from 'next/dynamic'

const StyleControl = dynamic(import('../components/StyleControl'))
const Time = () => {
    const [nowTime, setTime] = useState(Date.now());
    const onChangeTime = async () => {
        const moment = await import('moment');
        setTime(moment.default(Date.now()).format('MMMM Do YYYY, h:mm:ss a'))
    }
    return (
        <div>
            <div>当前时间:     {nowTime}</div>
            <StyleControl />
            <button onClick={onChangeTime}>格式化</button>
        </div>
    );
}

export default Time;