import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workspace from './Pages/Workspace'
import './index.css'

function AppRouter(props) {
    let routerConfig = [
        { path: '/', title: '博客首页', exact: true, component: Index },
        { path: '/video/', title: '视频教程', exact: false, component: Video },
        { path: '/workspace/', title: '职场技能', exact: false, component: Workspace },
    ]
    return (
        <Router>
            <div className='mainDiv'>
                <div className='leftNav'>
                    <h3>一级导航</h3>
                    <ul>
                        {routerConfig.map((item, index) => {
                            return (
                                <li key={item + index}><Link to={item.path} >{item.title}</Link></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="rightMain">
                    {routerConfig.map((item, index) => {
                        return (
                            <Route path={item.path} exact={item.exact} component={item.component}></Route>
                        )
                    })}
                </div>
            </div>
        </Router>
    );
}

export default AppRouter;