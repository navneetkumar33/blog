import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios'
import AppRoute from '../../appRoute/appRoute';


export type blogType = {
    id: number,
    userId: number,
    title: string,
    body: string
}
export type userType = {
    id: number,
    name: string,
    userName: string
}
export type blogContexttype = {
    user: userType | null | undefined,
    blog: blogType[] | null
}
type blogContextPropsType = {
    children: React.ReactNode
}

export const BlogContext = React.createContext<blogContexttype|null>(null);

export const BlogContextProvider= ({children} : blogContextPropsType) => {
    const [user, setUser] = useState < userType | null | undefined> (null);
    const [blog, setBlog] = useState < blogType[] | null > (null);
    const [error, setError]=useState<string|null>(null);
   
    useEffect(() => {
          axios.get(`${AppRoute.BASE_URL}${AppRoute.USER_ROUTE}`)
          .then(res=>setUser(res.data))
          .catch(error=>setError(error.message));
          axios.get(`${AppRoute.BASE_URL}${AppRoute.BLOG_ROUTE}`)
          .then(res=>setBlog(res.data))
          .catch(error=>setError(error.message))
        
          }, []); 
             return <BlogContext.Provider value={
        {user, blog}
    }> {children} </BlogContext.Provider>
}

export const useGlobalBlogContextProvider=()=>{
    return useContext(BlogContext)
}