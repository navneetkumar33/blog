import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AppRoute} from '../appRoute/appRoute';
import {StyledForm} from './postDetails.style'


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
    axios.put(`${AppRoute.BASE_URL}/${postid}`,editPost)
    .then(res=>console.log("post update successfully"))
    .catch((error)=>console.log(error.message));
    navigate('/')
      }
   
    return (
           <StyledForm
         onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor='posttitle'>
                Post Title
            </label>
            <input  type="text" value={postTitle} id="posttitle" onChange={(e)=>setPostTitle(e.target.value)}/>
            <br></br>
            <label htmlFor='postbody' >
                Post Body
            </label>
            <input   type="text" value={postBody} id="postbody" onChange={(e)=>setPostBody(e.target.value)}/>
            <br></br>
            <button  type="submit" >submit</button>
            <button>Delete</button>            
        </StyledForm>
    )
};

export default PostDetails;



