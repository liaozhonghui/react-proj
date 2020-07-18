import Head from 'next/head'
// import '../public/style.css'
import {Button} from 'antd'

import MyHeader from '../components/myHeader'
const Header = () => {
    return (
        <>
            <MyHeader / >
            <div>header</div>
            <div>
                <Button>antd按钮</Button>
            </div>
        </>
    );
}

export default Header;