import React,{useState, useEffect} from 'react'
import Menu from './menu'
import userImage from '../image/user.jpg'
import { Image } from 'antd'
import axios from 'axios'
import { PostType } from '../types/util'

interface postInterface{
  userId?:number,
  id?:number,
  title?:string,
  body?:string
}

const post1=[
    {
       "userId": 2,
        "id": 11,
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
      },
      {
        "userId": 2,
         "id": 12,
         "title": "et ea vero quia laudantium autem",
         "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
       },
       {
        "userId": 2,
         "id": 13,
         "title": "et ea vero quia laudantium autem",
         "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
       },
      
]
const Posts = () => {
  const [posts, setPosts]=useState<PostType|any>([])

  // get post function

  useEffect( ()=>{
  axios.get<PostType[]>("https://jsonplaceholder.typicode.com/users/2/posts")
  .then(posts=>setPosts(posts))
  .catch(error=>console.log(error))
  },[])
  console.log("=====================")
  console.log(JSON.stringify(posts))
  return (
   <>
    <div><Menu/></div>
    <div>
     {
         posts?.data?.map(post=>
                {
                    return (
                        <div  key={post.id}>
                            <img style={{float:'left'}} src={userImage}></img>
                            <p style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    lineHeight: "20px"
                            }}>
                             <strong>{post.title}</strong>
                             <span>{post.body}</span>
                             <span>Read More</span>
                             </p>
                        </div>
                    )
                })
        }
  
    </div>
   </>
   

  )
}

export default Posts