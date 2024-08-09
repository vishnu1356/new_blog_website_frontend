import { useContext, useState } from "react";
import Category from "../component/Category/Category";
import HeroSection from "../component/HeroSection/HeroSection";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import Post from "../component/Post/Post";
import { useEffect } from "react";
import axios from "axios";
import InputSearch from "../contex/searchtext";
import Questionanswer from "../component/FAQ's/Faq";

const Home = () => {

    const [allBlogs, setAllBlogs] = useState([]);
    const [filterBlogs, setFilterBlogs] = useState([]);
    const {inputData, setInputData} =  useContext(InputSearch);

    const faqdata = [
        { question: "How much is your fee", answer: "We are always here to help you with any questions you may have about our blog. Feel free to ask your questions below." },
        { question: "How much is your fee", answer: "We are always here to help you with any questions you may have about our blog. Feel free to ask your questions below." },
        { question: "How much is your fee", answer: "We are always here to help you with any questions you may have about our blog. Feel free to ask your questions below." },
        { question: "How much is your fee", answer: "We are always here to help you with any questions you may have about our blog. Feel free to ask your questions below." },
        { question: "How much is your fee", answer: "We are always here to help you with any questions you may have about our blog. Feel free to ask your questions below." },
    ]

    async function fetchBlogs() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/posts`);
            console.log("response from all blogs", response)
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


    async function fetchDataFromCategory(name) {
        // console.log("function called and categroy is", name)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/filter?category=${name}`)
            console.log("Response from category ", response.data)
            setFilterBlogs(response.data);
        } catch (error) {
            console.log("Error caught by fetchDataFromCategory", error)
        }
    }

    useEffect(() => {
        fetchFilterBlog()
    }, [inputData])

    useEffect(() => {
        fetchBlogs()
    }, [])
    
    return (
        <div>
            <HeroSection />
            <Category fethData={(name) => fetchDataFromCategory(name)}
                      fethAllData={() => fetchBlogs()}
                />
            <div className="flex justify-center gap-8 flex-wrap">
                {
                    filterBlogs && filterBlogs.map((blog) => (
                        <Post  key={blog._id} img={blog.img} id={blog._id} 
                        publishedDate={(new Date(blog.createdAt)).toDateString()}
                         title={blog.title} description={blog.description}/>
                    ))
                }

            </div>
            <h1 id="faq-title">Frequently Asked Questions</h1>
            {
                faqdata.map((faq, index) => (
                    <Questionanswer key={index} question={faq.question} answer={faq.answer} />
                ))
            }
            <NewsLetter  />
        </div>
    )
}
export default Home;