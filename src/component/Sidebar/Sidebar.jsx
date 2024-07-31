import { Link } from "react-router-dom";

const Sidebarcomp = () => {
    return (
        <div className="h-[70%] w-[200px] px-4 py-4 bg-orange-400 absolute">
            <div className="flex justify-center flex-col gap-8">
                <div className="flex gap-4 items-center">
                    <i className="fa-solid fa-plus  text-2xl"></i>
                    <Link to={"/post/create"} className="text-white text-xl cursor-pointer hover:bg-orange-500 px-2 py-1 rounded-md">Create Post</Link>
                </div>
                <div className="flex gap-4 items-center">
                    <i className="fa-solid fa-house  text-xl"></i>
                    <p className="text-white text-xl cursor-pointer hover:bg-orange-500 px-2 py-1 rounded-md">All Post</p>
                </div> 
                   <div className="flex gap-4 items-center">
                   <i className="fa-solid fa-right-from-bracket text-xl"></i>
                    <p className="text-white text-xl cursor-pointer hover:bg-orange-500 px-2 py-1 rounded-md">Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebarcomp;