import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () =>  {
    const [singleBlog, setSingleBlog] = useState([]);
    const [allTags, setAllTags] = useState([])
    const {id}  = useParams();
    const navigator = useNavigate()

    // console.log("all tags",allTags)
    async function fetchSingleBlog() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/single/${id}`);
            console.log("response of single posts ", response)
            setSingleBlog(response.data);
            setAllTags(response.data.tags)
        } catch (error) {
            console.log("error caught by fetchBlogs", error);
        }
    }

    async function handleDeletePost () {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/posts/${id}`)
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
            
            <section className="detail-page ">
                <div className="card-detail">
                    <h1 className="mb-4 text-normal sm:xl md:text-3xl font-semibold ">{singleBlog.title}...</h1>
                    <div className="mx-12">
                        <img src={`${import.meta.env.VITE_IMG_URL}/${id}`} alt="detail page" />
                    </div>
                    <div>

                    <div className="flex gap-4 mt-4">
                        <p className="font-bold text-orange-500">Tags:</p>
                        {
                            allTags.map((tag, idx) => <p key={idx} className="bg-black text-white px-2 py-1 rounded-md">{tag}</p>)
                        }

                    </div>
                </div>
                    <div className="flex justify-between mt-4">
                        <p className="font-bold text-orange-500">Category:  <span className="bg-black font-normal text-white px-2 py-1 rounded-md">Health</span></p>

                        <button onClick={handleDeletePost} className="px-4 py-2 bg-orange-500 rounded-md"><i className="fa-solid fa-delete-left"></i></button>

                    </div>
                    <p className="mt-8 text-justify">{singleBlog.description}</p>
                </div>

            </section>


            
        </div>
    )
}

export default PostDetail;