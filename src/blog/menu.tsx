import React,{useState} from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
    {
      label: 'ALL POSTS',
      key: 'allpost',
     },
    {
      label: 'LATEST POSTS',
      key: 'latest',
    },
    {
        label: 'ARCHIVED',
        key: 'archived',
      },
]

const MenuBar:React.FC=()=>{
    const [current, setCurrent] = useState('allpost')
    const navigate=useNavigate()
   
    const onClick: MenuProps['onClick'] = (e) => {
        console.log(e)
         setCurrent(e.key); 
         navigate('/')  
      }; 
      console.log("process................url")
      console.log(process.env.REACT_APP_BASE_URL)
    return(<>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </>)
}
export default MenuBar