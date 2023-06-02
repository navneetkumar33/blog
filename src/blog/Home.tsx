import React from 'react';
import { Layout, Space } from 'antd';
import MenuList from './sidbar-menu'
import SearchPanel from './search-panel';
import ContentWeb from './content';
import AppRoutes from '../route/route';
import PaginationBar from './pagination';
import { useGlobalBlogContextProvider } from './store/store';
import { blogContexttype } from './store/store';
const { Header, Footer, Sider, Content } = Layout;



const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '120px',
  color: '#fff',
  overflow: 'hidden'
  // backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  height:'100vh',
  lineHeight: '22px',
  color: '#fff',
  backgroundColor: '#fff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000',
  // backgroundColor: '#7dbcea',
};

const Home: React.FC = () => {
  const {error}=useGlobalBlogContextProvider() as blogContexttype;
  return(
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
   <Layout>
      <Sider style={siderStyle}><MenuList/></Sider>
      <Layout>
        <Header style={headerStyle}><SearchPanel/></Header>
        <Content style={contentStyle}>{error? (<h3 style={{color:"red", textAlign:'left'}}>{error}</h3>):(<AppRoutes/>)}</Content>
        <Footer style={footerStyle}><PaginationBar/></Footer>
      </Layout>
    </Layout>
  </Space>
);
}

export default Home