import React from 'react';
import { Route, Link } from 'react-router-dom'

import Money from './workspace/Money'
import Getup from './workspace/Getup'

function Workspace() {
    return (<div className='topNav'>
        <ul>
            <li><Link to='/workspace/money/'>加薪秘籍</Link></li>
            <li><Link to='/workspace/getup/'>早起秘籍</Link></li>
        </ul>
        <div className='vedioContent'>
            <div>
                <h3>程序员加薪秘籍</h3>
                <Route path='/workspace/money/' component={Money}></Route>
                <Route path='/workspace/getup/' component={Getup}></Route>

            </div>
        </div>
    </div>)
}
export default Workspace