import {Routes, Route} from 'react-router-dom'
import Home from '../component/Home'
import AppContainer from '../component/appContainer'
import PostDetails from '../component/postDetails'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/app/post"
                element={<AppContainer/>}/>
            <Route path="/app/post/:post_id"
                element={<PostDetails/>}></Route>
        </Routes>
    )
}


export default AppRoutes
