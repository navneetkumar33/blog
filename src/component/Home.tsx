import React from 'react';
import {Layout, Space} from 'antd';
import Siderbar from './siderbar';
import SearchPanel from './searchPanel';
import AppContainer from './appContainer';
import Paginations from './pagination';


const {Header, Footer, Sider, Content} = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#000',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#fff',
    // border: ' 1px solid black'
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#000',
    backgroundColor: '#fff',
    // border: ' 1px solid black'
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '180px',
    color: '#000',
    backgroundColor: '#fff',
    // border: ' 1px solid black'
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    // border: ' 1px solid black'
};

const Home: React.FC = () => (
    <Space direction="vertical"
        style={
            {width: '100%'}
        }
        size={
            [0, 48]
    }>
        <Layout>
            <Sider style={siderStyle}><Siderbar/></Sider>
            <Layout>
                <Header style={headerStyle}><SearchPanel/></Header>
                <Content style={contentStyle}><AppContainer/></Content>
                <Footer style={footerStyle}><Paginations/></Footer>
            </Layout>
        </Layout>

    </Space>
);

export default Home;