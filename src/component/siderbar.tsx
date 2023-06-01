import React, {useEffect, useState} from 'react';
import {
    AppstoreOutlined,
    MailOutlined,
    CalendarOutlined,
    AlertOutlined,
    WifiOutlined,
    InfoCircleOutlined,
    InboxOutlined,
    CheckCircleOutlined,
    MenuOutlined,
    PicLeftOutlined
} from '@ant-design/icons';
import {AppRoute} from '../appRoute/appRoute'
import type {MenuProps}
from 'antd';
import { useNavigate } from 'react-router-dom';
import userImage from '../image/user.jpg'
import {Menu, Image} from 'antd';
import axios from 'axios';




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
    getItem('Live Metrics', 'grp',<PicLeftOutlined />),
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
    const [userDetails, setUserDetails] = useState < any > ([]);
    const navigate=useNavigate()

    useEffect(() => {
        axios.get(`${AppRoute.BASE_URL}/1`).then(response => setUserDetails(response.data)).catch(error => console.log(error))
    }, [])


    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        navigate('/')
    };

    return (<>
        <div style={
            {
                width: '100%',
                height: '30px',
                backgroundColor: 'skyblue',
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom:'10px'

            }
        }>
            
        </div>
        <div style={
            {
                width: '100%',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
              }
        }>
            <Image style={
                    {
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginTop:'40px'
                    }
                }
                src={userImage} alt="image"/>
          
             <span style={{
                marginTop:"-125px"
             }}>{userDetails.name}</span>

        </div>
        
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
    </>);
};

export default Siderbar;
