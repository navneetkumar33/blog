import React, {useState, useEffect} from 'react';
import {Form, Input, Button} from 'antd';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

interface postContent {
    post: {
        id: number 
        userId: number 
        title: string 
        body: string
    }
}


const PostDetails = () => {
    const [postTitle, setPostTitle]=useState<string>('')
    const [postBody, setPostBody]=useState<string>('')
    const [postid, setPostid]=useState<number>()
    const [userId, setUserid]=useState<number>()
    const navigate=useNavigate();
    

    const state = useLocation();
   
  useEffect(()=>{
    const {title, body, id, userId} = (state.state as postContent)?.post
    setPostBody(body);
    setPostTitle(title);
    setPostid(id);
    setUserid(userId)
  },[])

  const handleSubmit=(e:any)=>{
    e.preventDefault()
    const editPost=JSON.stringify({   
            id:postid, 
            userId: userId,     
            title: postTitle,
            body: postBody
        })
        console.log(editPost)
    axios.put(`https://jsonplaceholder.typicode.com/posts/${postid}`,editPost)
    .then(res=>console.log("post update successfully"))
    .catch((error)=>console.log(error.message));
    navigate('/app/post')
      }
   
    return (
           <form style={
            {
                width:'60%',
                lineHeight:'40px',
                margin:' 10px 100px',
            }
        }
         onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor='posttitle' style={{
                fontSize:'16px',
                fontWeight:700,
                margin:'10px',
            }}>
                Post Title
            </label>
            <input style={{
                width:'100%',
               height:'40px'
            }} type="text" value={postTitle} id="posttitle" onChange={(e)=>setPostTitle(e.target.value)}/>
            <br></br>
            <label htmlFor='postbody' style={{
                fontSize:'16px',
                fontWeight:700,
                margin:'10px',
            }}>
                Post Body
            </label>
            <input  style={{
                width:'100%',
               height:'40px'
            }} type="text" value={postBody} id="postbody" onChange={(e)=>setPostBody(e.target.value)}/>
            <br></br>
            <button  style={{width:'25%', margin:'2% 25%'}} type="submit" >submit</button>
            <button style={{width:'25%', margin:'2% 25%'}}>Delete</button>            
        </form>
    )
};

export default PostDetails;



