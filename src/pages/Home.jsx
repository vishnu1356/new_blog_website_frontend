import { useContext, useState } from "react";
import Category from "../component/Category/Category";
import HeroSection from "../component/HeroSection/HeroSection";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import Post from "../component/Post/Post";
import { useEffect } from "react";
import axios from "axios";
import InputSearch from "../contex/searchtext";

const Home = () => {

    const [allBlogs, setAllBlogs] = useState([]);
    const [filterBlogs, setFilterBlogs] = useState([]);
    const {inputData, setInputData} =  useContext(InputSearch)

    console.log("input search text: " + inputData)

    async function fetchBlogs() {
        try {
            const response = await axios.get(`http://localhost:3000/api/posts`);
            console.log("response of all posts ", response)
            setAllBlogs(response.data);
            setFilterBlogs(response.data);
        } catch (error) {
            console.log("error caught by fetchBlogs", error);
        }
    }

    function fetchFilterBlog () {
        const response = allBlogs.filter((blog) => blog.title.toLowerCase().includes(inputData.toLowerCase()))
        setFilterBlogs(response)
    }

    console.log("filter blog are", filterBlogs)
    useEffect(() => {
        fetchFilterBlog()
    }, [inputData])

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div>
            <HeroSection />
            <Category />
            <div className="flex justify-center g-12 flex-wrap">
                {
                    filterBlogs && filterBlogs.map((blog) => (
                        <Post  key={blog._id} img={blog.img} id={blog._id} 
                        publishedDate={(new Date(blog.createdAt)).toDateString()}
                         title={blog.title} description={blog.description}/>
                    ))
                }

            </div>
 
            <NewsLetter  />
        </div>
    )
}
export default Home;