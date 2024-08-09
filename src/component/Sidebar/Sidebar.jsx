import { Link } from "react-router-dom";
import Tooltip from "../Tooltip/Tooltip";
import { useContext } from "react";
import UserContext from "../../contex/user";
import toast from "react-hot-toast";

const Sidebarcomp = (props) => {
    console.log("props from sidebarcomp", props);
    const {userData, setUserData} = useContext(UserContext)
    function handleLogout () {
        props.handleSidebar()
        setUserData({
            username: "",
            email: "",
            usertype: "",
        })
        toast.success("Logged out successfully")
    }

    return (
                    <div className=" w-full h-[45vh] sm:w-[200px] px-4 py-4 bg-white  backdrop-blur-md top-18 left-0 z-50 fixed">
            <div className="flex justify-center flex-col gap-8">
                <div className="flex gap-4 items-center"  onClick={() => props.handleSidebar()}>
                    <i className="fa-solid fa-user  text-xl text-orange-500"></i>
                    {/* <p className="text-white text-xl cursor-pointer hover:bg-orange-500 px-2 py-1 rounded-md">User</p> */}
                    <Tooltip username={userData.username} email={userData.email} usertype={userData.usertype}/>
                </div> 
                
                {
                    (userData.username) ? <div className="flex gap-4 items-center">
                    <i className="fa-solid fa-plus  text-2xl text-orange-500"></i>
                    <Link to={"/post/create"}  onClick={() => props.handleSidebar()} className="text-black text-xl cursor-pointer hover:text-orange-500 font-semibold px-2 py-1 rounded-md">Create Post</Link>
                </div> : ""
                }
                <div className="flex gap-4 items-center">
                    <i className="fa-solid fa-house  text-xl text-orange-500"></i>
                    <Link to={"/"} onClick={() => props.handleSidebar()} className="text-black text-xl cursor-pointer  hover:text-orange-500 font-semibold px-2 py-1 rounded-md">All Post</Link>
                </div> 
                {
                    (userData.username) ? <div className="flex gap-4 items-center">
                    <i className="fa-solid fa-right-from-bracket text-xl text-orange-500"></i>
                     <p onClick={handleLogout}  className="text-black text-xl cursor-pointer  hover:text-orange-500 font-semibold px-2 py-1 rounded-md">Log Out</p>
                 </div> : ""
                }

            </div>
            
        </div>

    )
}

export default Sidebarcomp;