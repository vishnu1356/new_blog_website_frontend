import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () =>  {
    const [singleBlog, setSingleBlog] = useState([]);
    const {id}  = useParams();
    const navigator = useNavigate()

    async function fetchSingleBlog() {
        try {
            const response = await axios.get(`http://localhost:3000/api/single/${id}`);
            console.log("response of single posts ", response)
            setSingleBlog(response.data);
        } catch (error) {
            console.log("error caught by fetchBlogs", error);
        }
    }

    async function handleDeletePost () {
        try {
            const response = await axios.delete(`http://localhost:3000/api/posts/${id}`)
            console.log(response.data.message)
            toast.success(response.data.message)
            navigator("/")
        } catch (error) {
            console.log("error caught by fetchBlogs", error);
        }
    }

    useEffect(() => {
        fetchSingleBlog()
    }, [])
    return (
        <div className="flex justify-between items-center">
            
            <section className="detail-page">
                <div className="card-detail">
                    <h1 className="mb-4 text-2xl font-semibold ">{singleBlog.title}</h1>
                    <div>
                        <img src={`${import.meta.env.VITE_IMG_URL}${id}`} alt="detail page" />
                    </div>
                    <div className="flex justify-between mt-4">
                        <button className="px-4 py-2 bg-orange-500 rounded-md"><i className="fa-solid fa-pen-to-square"></i></button>
                        <button onClick={handleDeletePost} className="px-4 py-2 bg-orange-500 rounded-md"><i className="fa-solid fa-delete-left"></i></button>
                    </div>
                    <p className="mt-8 text-justify">{singleBlog.description}</p>
                </div>
            </section>

            <div className="flex flex-col me-8">
                {/* <div className=" mb-16">
                    <p className="text-2xl font-bold mb-4">Category Type </p>
                    <p className="text-xl font-sm ">Money</p>
                </div> */}
                <div className="h-[200px] mb-8 bg-slate-300 p-4 rounded-lg">
                        <h1 className="text-3xl font-bold mb-4 text-center">Category Type</h1>
                    <div className="flex gap-4 text-xl ">
                        <p className="hover:bg-orange-500 rounded-lg px-4 py-2 text-2xl font-semibold">Tags</p>
                        
                    </div>
                </div>
                
                <div className="h-[200px] bg-slate-300 p-4 rounded-lg">
                    <h1 className="text-3xl font-bold mb-4 text-center">Popular Tags</h1>
                <div className="flex gap-4 text-xl ">
                    <p className="bg-orange-500 rounded-lg px-4 py-2 text-white font-bold">Tags</p>
                    <p className="bg-orange-500 rounded-lg px-4 py-2 text-white font-bold">Tags</p>
                    <p className="bg-orange-500 rounded-lg px-4 py-2 text-white font-bold">Tags</p>
                    <p className="bg-orange-500 rounded-lg px-4 py-2 text-white font-bold">Tags</p>

                </div>
                </div>
            </div>
            
        </div>
    )
}

export default PostDetail;