import React, { useState, useRef, useEffect } from 'react';

const Example8 = () => {
    const inputRef = useRef(null)
    const onButtonClick = () => {
        inputRef.current.value = 'hello, input change'
    }

    const [text, setText] = useState();
    useEffect(() => {
        console.log('state change')
    }, [])
    return ( 
        <React.Fragment>
            <input ref={inputRef} type='text'></input>
            <button onClick={onButtonClick}>在input上显示文字</button>
            <br></br>
            <br></br>
            <input value={text} type='text' onChange={(e) => setText(e.target.value)} />
        </React.Fragment>
     );
}
 
export default Example8;