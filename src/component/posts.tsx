import React, {useState, useEffect} from 'react'
import Menu from './menu'
import userImage from '../image/user.jpg'
import {Image} from 'antd'
import axios from 'axios'
import {PostType} from '../types/util'
import { DateFunction } from '../types/util'
import { useNavigate } from 'react-router-dom'

const Posts = () => {
const [posts, setPosts] = useState<any>([])
const date=new Date();
const navigate=useNavigate();
// get post function

useEffect(() => {
    axios.get<PostType[]>("https://jsonplaceholder.typicode.com/users/2/posts")
    .then(posts => setPosts(posts.data))
    .catch(error => console.log(error))
}, [])

const handlePost=(post:any)=>{
navigate(`/app/post/${post.id}`,{state:{...post}})    
}

return (<>
    <div><Menu/></div>
    <hr/>
    <div> {
        posts ?. map((post : any) => {
            return (<div key={
                    post.id
                }
                style={
                    {
                        height: '120px',
                        marginTop: '5px',
                        marginBottom: '0px'
                    }
            } onClick={()=>handlePost(post)}>
                <img style={
                        {float: 'left'}
                    }
                    src={userImage}></img>
                <p style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "25px",
                        textAlign: "start",
                        padding: "0px 25px",
                      
                    }
                }>
                   <div style={{
                     display:'flex',
                     justifyContent:'space-between'
                    }}>
                    <strong> {
                        post.title
                    }</strong>
                     <span>{DateFunction(date)}</span>
                     </div>
                    <span> {
                        post.body
                    }</span>
                    <span style={{color:'blue'}}>Read More</span>
                </p>
            </div>)
        })
    } </div>
</>)
}
export default Posts
