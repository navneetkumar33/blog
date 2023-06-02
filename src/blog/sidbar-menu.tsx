import React, { useState } from 'react';
import {
  CalendarOutlined,
} from '@ant-design/icons';
import {Menu, Image,Button} from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import logo from '../image/logo.png';
import { StyleLogoDiv } from './side-menu.style';
import { blogType, useGlobalBlogContextProvider } from './store/store';
import { blogContexttype } from './store/store';
import { useNavigate } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Deskboards', '1', ''),
  getItem('OverView', '2', <CalendarOutlined />),
  getItem('Calender', '3', <CalendarOutlined />),
  getItem('Schedule Actions', '4', <CalendarOutlined />),
  getItem('Live Alerts', '5', <CalendarOutlined />),
  getItem('Blogs', '6', ''),
  getItem('All', '7', <CalendarOutlined />),
  getItem('Latest', '8', <CalendarOutlined />),
  getItem('Archived', '9', <CalendarOutlined />),
  getItem('Documantation', 'sub1', '', [
    getItem('Option 1', '10'),
    getItem('Option 2', '11'),
  
]),
getItem('Reports', 'sub2','', [
    getItem('Option 1', '12'),
    getItem('Option 2', '13'),
  ]),
getItem('NEED HELP?', 'sub2', '', [
    getItem('Option 1', '14'),
    getItem('Option 2', '15'),
  ]),
 
];

const MenuList: React.FC = () => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const [theme, setTheme] = useState<MenuTheme>('light');
  const {user}=useGlobalBlogContextProvider() as blogContexttype
  const navigate=useNavigate()
  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick: MenuProps['onClick'] = (e) => {
    navigate('/')  
  };

  return (
    <>
    <StyleLogoDiv>
    <Image src={logo}/>
    </StyleLogoDiv>
    <Image width={200} style={{
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',
        width:'90px',
        borderRadius:'50%',
        color:'#000'
    }}
           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
           <div style={{
            textAlign:'center',
            color:'#000'           
           }}>{user?.name}</div>
      <Button type="primary" >Live Metrics</Button>
       <Menu
       onClick={onClick}
        style={{ width: 200, textAlign:'left' }}
        defaultSelectedKeys={['1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};

export default MenuList;