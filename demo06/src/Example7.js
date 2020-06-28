import React, { useState, useMemo } from 'react';

const Example7 = () => {
    const [a, setA] = useState('任务a')
    const [b, setB] = useState('任务b')
    return ( <div>
        <button onClick={()=>setA(new Date().getTime())}>A</button>
        <button onClick={()=>setB(new Date().getTime())}>B</button>
        <ChildComponent name={a}> {b}</ChildComponent>
    </div> );
}
const ChildComponent = ({name, children}) => {
    function changeA(str) {
        console.log('change A console.log')
        return 'prefix' + str

    }
    const actionA = useMemo(() => changeA(name), [name])
    return ( 
        <div>
            <div>{actionA}</div>
            <div>{children}</div>
        </div>
     );
}

 
export default Example7;