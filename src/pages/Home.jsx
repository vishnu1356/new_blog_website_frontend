import { useContext, useState } from "react";
import Category from "../component/Category/Category";
import HeroSection from "../component/HeroSection/HeroSection";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import Post from "../component/Post/Post";
import { useEffect } from "react";
import axios from "axios";
import InputSearch from "../contex/searchtext";
import Questionanswer from "../component/FAQ's/Faq";
import "../App.css"

const Home = () => {

    const [allBlogs, setAllBlogs] = useState([]);
    const [filterBlogs, setFilterBlogs] = useState([]);
    const {inputData, setInputData} =  useContext(InputSearch);

    const faqdata = [
        { question: "What is JavaScript", answer: "JavaScript is a programming language used to make web pages interactive. It runs in your browser, allowing things like animations, form validation, and dynamic content updates." },
        { question: "What is closure in JavaScript", answer: "Closures in JavaScript are functions that remember and have access to variables from their outer scope, even after that outer function has finished executing. This allows the inner function to access and manipulate those variables whenever it's invoked." },
        { question: "Promise in JavaScript", answer: "A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to attach callbacks to handle the result once the operation is finished. Promises help manage asynchronous code in a more organized and readable way." },
        { question: "What is React", answer: "React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and efficiently update and render them based on data changes. React focuses on building components that manage their own state and can be composed to create complex UIs." },
        { question: "Why React is so powerful", answer: "The React reconciliation process compares the current virtual DOM with the previous one to identify changes. It efficiently updates only the parts of the actual DOM that have changed, ensuring minimal performance impact by avoiding unnecessary updates. This process makes React's UI updates fast and efficient." },
        { question: "What is higher order component", answer: "Higher-Order Components (HOCs) in React are functions that enhance a component by wrapping it with additional functionality, allowing code reuse without modifying the original component." },
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
            <h1 id="faq-title" >Frequently Asked Questions</h1>
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