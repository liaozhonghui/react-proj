import React from 'react';

import Link from  'next/link'
import Router from 'next/router'



const Home = () => {
    // routeChangeStart
    // routeChangeComplete
    // beforeHistoryChange
    // routeChangeError
    // hashChangeStart
    // hashChangeComplete
    Router.events.on('routeChangeStart', (...args) => {
        console.log('路由变化开始')
    })
    Router.events.on('routeChangeComplete', (...args) => {
        console.log('路由变化结束')
    })
    Router.events.on('beforeHistoryChange', (...args) => {
        console.log('历史变化')
    })
    Router.events.on('routeChangeError', (...args) => {
        console.log('路由变化错误')
    })
    Router.events.on('hashChangeStart', (...args) => {
        console.log('hash开始')
    })
    Router.events.on('hashChangeComplete', (...args) => {
        console.log('hash结束')
    })


    return (
        <div>
            <div>首页</div>
            <div className='example3'>
                <p>第一行</p>
            </div>
            <div><Link href={{ pathname: '/example', query: { name: 'test'} }}><a>to example test page</a></Link></div>
            <div><Link href='/example?name=real'><a>to example real page</a></Link></div>
            <div>
                <button onClick={() => {Router.push('/example?name=code')}}>code link</button>
            </div>
            <div>
                <Link href='#hello'><a>hello</a></Link>
            </div>
            <div>
                <Link href="/example3" ><a>example3</a></Link>
            </div>
        </div>
    )
}
export default Home