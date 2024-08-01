import { Link } from "react-router-dom";

const Post = (props) => {
    const {img, title, description, id} = props;
    console.log("base url is:", import.meta.env.VITE_IMG_URL)
    console.log("id is", id)
    console.log(` full url for image: ${import.meta.env.VITE_IMG_URL}${id}`)
    return (
        <div className="flex  flex-row justify-around gap-12  bg-gray-200">

            {/* left section */}
            <div className="left-section justify-center flex basis-4/5 gap-4 flex-wrap">

                <div className="post-parent mt-3">
                    <div className="post-img">
                        <img src={`${import.meta.env.VITE_IMG_URL}${id}`} alt="post image" />
                    </div>
                    <Link to={`/post/${id}`} className="mt-2 font-semibold hover:text-orange-500 leading-5 mb-4 cursor-pointer">{title}</Link>
                    <div className="user-parent">
                        <div className="user-img-parent">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                        </div>
                        <p className="text-sm">UserName</p>
                    </div>
                    <div className="text-sm">
                        Published: October 4, 2023
                    </div>
                </div>


            </div>


            {/* right section */}
            {/* <div className="right-section flex flex-col items-center ">
                <h1 className="text-3xl mb-4 mt-6">Latest Blog</h1>
                <div>
                    <div>
                        <p className=" w-[70%] mx-auto mb-2">Rainforest raises $8.5M to help software companies embed financial services, payment</p>
                        <div className="  w-[70%] mx-auto">
                            <button className="font-semibold cursor-pointer hover:text-orange-500">Read Now <i class="fa-solid fa-arrow-right"></i> </button>
                        </div>
                    </div>
                <div id="lbb"></div>
                </div>
                <div>
                    <div>
                        <p className=" w-[70%] mx-auto mb-2">Rainforest raises $8.5M to help software companies embed financial services, payment</p>
                        <div className="  w-[70%] mx-auto">
                            <button className="font-semibold cursor-pointer hover:text-orange-500">Read Now <i class="fa-solid fa-arrow-right"></i> </button>
                        </div>
                    </div>
                <div id="lbb"></div>
                </div>
                <div>
                    <div>
                        <p className=" w-[70%] mx-auto mb-2">Rainforest raises $8.5M to help software companies embed financial services, payment</p>
                        <div className="  w-[70%] mx-auto">
                            <button className="font-semibold cursor-pointer hover:text-orange-500">Read Now <i class="fa-solid fa-arrow-right"></i> </button>
                        </div>
                    </div>
                <div id="lbb"></div>
                </div>
                <div>
                    <div>
                        <p className=" w-[70%] mx-auto mb-2">Rainforest raises $8.5M to help software companies embed financial services, payment</p>
                        <div className="  w-[70%] mx-auto">
                            <button className="font-semibold cursor-pointer hover:text-orange-500">Read Now <i class="fa-solid fa-arrow-right"></i> </button>
                        </div>
                    </div>
                <div id="lbb"></div>
                </div>
            </div> */}
        </div>
    )
}

export default Post;