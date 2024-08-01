import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () =>  {
    const [singleBlog, setSingleBlog] = useState([]);
    const {id}  = useParams();

    async function fetchSingleBlog() {
        try {
            const response = await axios.get(`http://localhost:3000/api/single/${id}`);
            console.log("response of single posts ", response)
            setSingleBlog(response.data);
        } catch (error) {
            console.log("error caught by fetchBlogs", error);
        }
    }

    useEffect(() => {
        fetchSingleBlog()
    }, [])
    return (
        <section className="detail-page">
            <div className="card-detail">
                <h1 className="mb-4 text-2xl font-semibold ">{singleBlog.title}</h1>
                <div>
                    <img src={`${import.meta.env.VITE_IMG_URL}${id}`} alt="detail page" />
                </div>
                <div className="flex justify-between mt-4">
                    <button className="px-4 py-2 bg-orange-500 rounded-md"><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className="px-4 py-2 bg-orange-500 rounded-md"><i className="fa-solid fa-delete-left"></i></button>
                </div>
                <p className="mt-8 text-justify">{singleBlog.description}</p>
            </div>
        </section>
    )
}

export default PostDetail;