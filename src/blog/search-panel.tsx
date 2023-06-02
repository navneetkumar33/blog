import {Input, Image, Badge} from 'antd';
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
            <Input placeholder="Enter text to search"
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
            <span style={{ fontSize:'16px'}}> <PlusOutlined style={{ fontSize:'20px'}}/>add</span>
            <Badge>
                <BellOutlined style={{ fontSize:'20px'}}/>
            </Badge>
            <Badge>
                <MailOutlined style={{ fontSize:'20px'}}/>
            </Badge>
            <Badge>
                <AppstoreOutlined style={{ fontSize:'20px'}}/>
            </Badge>
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
