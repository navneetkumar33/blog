import axios from "axios";
import AppRoute from "../../appRoute/appRoute";
import { blogType } from "../store/store";

export const getUserRequest=()=>{
    return axios.get(`${AppRoute.BASE_URL}${AppRoute.USER_ROUTE}`);
}

export const getBlogRequest=()=>{
    return axios.get(`${AppRoute.BASE_URL}${AppRoute.BLOG_ROUTE}`);
}

export const PutBlogRequest=(postid: number,post:blogType)=>{
    return axios.put(`${AppRoute.BASE_URL}/${postid}`,post );

}