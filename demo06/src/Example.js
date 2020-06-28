import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('触发 index 页面')
        return () => {
            console.log('离开index页面')
        }
    }, [])
    return (
        <h2>Index 页面</h2>
    )
}

function List() {
    useEffect(() => {
        console.log('触发 list 页面')
    })
    return (
        <h2>List 页面</h2>
    )
}
function Example() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('count,',count)
        return () => {
            console.log('================')
        }
    }, [count])
    return (
        <div>
            <p> You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click me</button>

            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index}></Route>
                <Route path='/list/' component={List}></Route>
            </Router>
        </div>
    )
}

export default Example;