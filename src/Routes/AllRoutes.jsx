import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PostDetail from "../component/PostDetail/PostDetail";
import CreatePost from "../pages/CreatePost";


const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/signin" element={<Login />}/>
            <Route path="/post/create" element={<CreatePost />}/>
            <Route path="/post/:id" element={<PostDetail />}/>
        </Routes>
    )
}

export default AllRoutes;