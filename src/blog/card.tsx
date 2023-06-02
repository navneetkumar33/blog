import React from 'react'
import { DateFunction } from '../types/util'
import {StyledCardDiv} from './card.style'
import { blogType, useGlobalBlogContextProvider } from './store/store'
import { blogContexttype } from './store/store'
import { useNavigate } from 'react-router-dom'

import {
    Space,
    Card,
    Image,
    Row,
    Col,
    Button
} from 'antd'

const CardList = () => {
    const {blog}=useGlobalBlogContextProvider() as blogContexttype;
    const navigate=useNavigate();
    const HandleClick=(blog:blogType)=>{
        navigate(`/app/post/${blog.id}`,{state:{post: blog}})
    }

    return (
        <StyledCardDiv>
            {blog?.map(blog=>{
                return(
                    <Space direction="vertical" key={blog.id}
                >
                <Card style={
                    {width: '83vw'}
                } onClick={()=>HandleClick(blog)}>
                    <Row>
                        <Col span={3}>
                            <Image width={100}
                               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                        </Col>
                        <Col span={20}>
                            <div className="date-display">{DateFunction(new Date())}</div>
                            <p className="heading">{blog.title}</p>
                            <p className="content">{blog.body}</p>
                            <Button type="link" block >
                              Read more
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Space>
                )
            })}
            
            
      </StyledCardDiv>
    )
}
export default CardList
