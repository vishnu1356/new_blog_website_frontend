import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contex/user";

const Post = (props) => {
    const {img, title, description, id, publishedDate} = props;
    const {userData, setUserData} = useContext(UserContext)


    
    return (
        <>

        {/* <div className="flex  flex-row justify-around gap-12  bg-gray-200"> */}

            {/* left section */}
            {/* <div className="left-section justify-center flex basis-4/5 gap-4 flex-wrap"> */}

            
                <div className="post-parent mt-3">
                    <div className="post-img mb-2">
                        <img src={`${import.meta.env.VITE_IMG_URL}/${id}`} alt="post image" />
                    </div>
                    <Link to={`/post/${id}`} className="mt-2 text-xl flex justify-center font-semibold hover:text-orange-500 leading-5 mb-4 cursor-pointer">{title}</Link>
                    <div className="user-parent">
                        <div className="user-img-parent">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="user" />
                        </div>
                        <p className="text-sm">{(userData.username) ? userData.username : "Username"}</p>
                    </div>
                    <div className="text-sm">
                        Published: {publishedDate}
                    </div>
                </div>


            {/* </div> */}


 

        </>
    )
}

export default Post;