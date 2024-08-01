import { useState } from "react";
import Category from "../component/Category/Category";
import HeroSection from "../component/HeroSection/HeroSection";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import Post from "../component/Post/Post";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {

    const [allBlogs, setAllBlogs] = useState([]);

    async function fetchBlogs() {
        try {
            const response = await axios.get(`http://localhost:3000/api/posts`);
            console.log("response of all posts ", response)
            setAllBlogs(response.data);
        } catch (error) {
            console.log("error caught by fetchBlogs", error);
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div>
            <HeroSection />
            <Category />
            {
                allBlogs && allBlogs.map((blog) => (
                    <Post  key={blog._id} img={blog.img} id={blog._id} title={blog.title} description={blog.description}/>
                ))
            }
            <NewsLetter  />
        </div>
    )
}
export default Home;