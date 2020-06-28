import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd'

import Demo from './Demo'
import './Main.css'

const { Header, Content, Footer } = Layout;


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Layout className="layout">
                <Header >
                    <div style={{
                        width: "120px",
                        height: "31px",
                        background: "rgba(255, 255, 255, 0, 2)",
                        margin: "16px 24px 16px 0",
                        float: "left"
                    }}></div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key='1' >nav 1</Menu.Item>
                        <Menu.Item key='2' >nav 2</Menu.Item>
                        <Menu.Item key='3' >nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding:'0 50px'}}>
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='site-layout-content'>
                        <Demo></Demo>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    current time: {new Date().toLocaleString()}
                </Footer>
            </Layout>
        );
    }
}
 
export default Main;