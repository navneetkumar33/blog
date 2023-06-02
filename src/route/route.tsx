import {Routes, Route} from 'react-router-dom'
import ContentWeb from '../blog/content';
import PostDetails from '../blog/postDetails';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/"
                element={<ContentWeb/>}/>
            <Route path="/app/post/:post_id"
                element={<PostDetails/>}></Route>
        </Routes>
    )
}


export default AppRoutes
