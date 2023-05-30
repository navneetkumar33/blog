import React from 'react';
import {
    AppstoreOutlined,
    MailOutlined,
    CalendarOutlined,
    AlertOutlined,
    WifiOutlined,
    InfoCircleOutlined,
    InboxOutlined,
    CheckCircleOutlined,
    MenuOutlined
} from '@ant-design/icons';
import type {MenuProps}
from 'antd';
import userImage from '../image/user.jpg'
import {Menu, Image} from 'antd';

type MenuItem = Required < MenuProps > ['items'][number];

function getItem(label : React.ReactNode, key : React.Key, icon? : React.ReactNode, children? : MenuItem[], type? : 'group',): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type
    };
}

const items: MenuProps['items'] = [
    getItem('Deskboard', 'sub1', null, [
        getItem('', 'g1', null, [
            getItem('Overview', '1', <WifiOutlined/>),
            getItem('Calender', '2', <CalendarOutlined/>),
            getItem('ScheduleActions', '3', <MailOutlined/>),
            getItem('Live Alerts', '4', <AlertOutlined/>),
        ], 'group'),

    ]),

    getItem('Blogs', 'sub2', null, [
        getItem('All', '5', <CheckCircleOutlined/>),
        getItem('Latest', '6', <InfoCircleOutlined/>),
        getItem('Archived', '7', <InboxOutlined/>),

    ]), {
        type: 'divider'
    },
    getItem('', 'grp', null, [
        getItem('Documentation', '8'),
        getItem('Reports', '9'),
        getItem('Needs Helps', '10'),
    ], 'group'),
];

const Siderbar: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <>  
        <div style={
                {
                    width: '100%',
                    height: '30px',
                    backgroundColor: 'skyblue',
                    display: 'flex',
                    justifyContent: 'space-between'

                }
            }>   

            </div>
            {/* <div  style={{width:'40px',height:'40px',borderRadius:'50%', display:'flex',justifyContent:'center', alignItems:'center', margin:"20px"}}>
                <Image style={{width:'60px',height:'60px',borderRadius:'50%'}} src={userImage}/>
            </div>          */}
            
            <Menu onClick={onClick}
                style={
                    {width: '100%'}
                }
                defaultSelectedKeys={
                    ['1']
                }
                defaultOpenKeys={
                    ['sub1']
                }
                mode="inline"
                items={items}/>
        </>
    );
};

export default Siderbar;
