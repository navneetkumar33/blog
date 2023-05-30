import React from 'react'
import {Input, Image} from 'antd';
import {
    SearchOutlined,
    PlusOutlined,
    BellOutlined,
    MailOutlined,
    AppstoreOutlined,
    DownCircleFilled
} from '@ant-design/icons'
const SearchPanel = () => {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }
        }>
            <Input placeholder="Enter your username"
                style={
                    {
                        width: '80%',
                        float: 'left'

                    }
                }
                prefix={
                    <SearchOutlined
                className="site-form-item-icon"/>
                }/>

            <PlusOutlined/>
            <span>add</span>
            <BellOutlined/>
            <MailOutlined/>
            <AppstoreOutlined/>
            <Image style={
                    {
                        width: '30px',
                        height: '30px',
                        border: '2px solid black',
                        borderRadius: '50%'
                    }
                }
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"/>
            <DownCircleFilled/>

        </div>
    )
}

export default SearchPanel
