import React, { useState } from 'react';

function Example2() {
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('male')
    const [work, setWork] = useState('front-end')
    return (
        <div>
            <p> age: {age}</p>
            <p> sex: {sex}</p>
            <p> work: {work}</p>
        </div>
    )
}

export default Example2;