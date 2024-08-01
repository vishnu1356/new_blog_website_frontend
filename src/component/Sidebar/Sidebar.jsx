import { Link } from "react-router-dom";
import Tooltip from "../Tooltip/Tooltip";
import { useContext } from "react";
import UserContext from "../../contex/user";
import toast from "react-hot-toast";

const Sidebarcomp = () => {
    const {userData, setUserData} = useContext(UserContext)
    console.log("user data is: " + userData)
    function handleLogout () {
        console.log("User logged out")
        setUserData({
            username: "",
            email: "",
            usertype: "",
        })
        toast.success("Logged out successfully")
    }

    return (
        <div className="h-[45%] w-[200px] px-4 py-4 bg-black absolute">
            <div className="flex justify-center flex-col gap-8">
                <div className="flex gap-4 items-center">
                    <i className="fa-solid fa-user  text-xl text-orange-500"></i>
                    {/* <p className="text-white text-xl cursor-pointer hover:bg-orange-500 px-2 py-1 rounded-md">User</p> */}
                    <Tooltip username={userData.username} email={userData.email} usertype={userData.usertype}/>
                </div> 
                
                {
                    (userData.username) ? <div className="flex gap-4 items-center">
                    <i className="fa-solid fa-plus  text-2xl text-orange-500"></i>
                    <Link to={"/post/create"} className="text-white text-xl cursor-pointer hover:bg-[#545454] px-2 py-1 rounded-md">Create Post</Link>
                </div> : ""
                }
                <div className="flex gap-4 items-center">
                    <i className="fa-solid fa-house  text-xl text-orange-500"></i>
                    <p className="text-white text-xl cursor-pointer hover:bg-[#545454] px-2 py-1 rounded-md">All Post</p>
                </div> 
                   <div className="flex gap-4 items-center">
                   <i className="fa-solid fa-right-from-bracket text-xl text-orange-500"></i>
                    <p onClick={handleLogout} className="text-white text-xl cursor-pointer hover:bg-[#545454] px-2 py-1 rounded-md">Log Out</p>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebarcomp;