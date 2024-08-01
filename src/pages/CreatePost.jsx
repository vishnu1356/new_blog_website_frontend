import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {

    const navigator = useNavigate()
    const [handlePost, setHandlePost] = useState({
         title: "", description: "", category: "", tags:""
    })
    const [img, setImg] = useState(null)

console.log("form data", handlePost)
    function handlePostMessage (e) {
        const {name, value} = e.target;
        setHandlePost({...handlePost, [name]: value })
    }


    async function handleCreatePostData (e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('img', img);
        formData.append('title', handlePost.title);
        formData.append('description', handlePost.description);
        formData.append('category', handlePost.category);
        formData.append('tags', handlePost.tags);
        // console.log("full form data",formData)
        try {
            const response = await axios.post(`http://localhost:3000/api/post/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                    // Authorization: 'Bearer your_token_here' // Add any other headers as needed
                }
            })
            setHandlePost({
                title: "", description: "", category: ""
           })
            toast.success('Image uploaded successfully!');
            navigator("/")
        } catch (error) {
            console.log("error caught by handleCreatePostData Submit",error)
            toast.error("Something Went Wrong!")
        }

    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-10 mb-10">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Create Post Here</h2>
                    <form onSubmit={handleCreatePostData}>

                        <div className="mb-4">
                            <label className="block  text-sm font-bold mb-2" htmlFor="image">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={(e) => setImg(e.target.files[0])}
                                className="w-full px-3 py-2 outline-none border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Image Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                onChange={handlePostMessage}
                                value={handlePost.title}
                                name="title"
                                placeholder="Enter your image title here"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
                            />
                        </div>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Image Tags
                            </label>
                            <input
                                type="text"
                                id="title"
                                onChange={handlePostMessage}
                                value={handlePost.tags}
                                name="tags"
                                placeholder="Enter your image title here"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Description
                            </label>
                            <textarea
                                type="text"
                                id="description"
                                onChange={handlePostMessage}
                                value={handlePost.description}
                                name="description"
                                placeholder="Describe about you post here"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
                            />
                        </div>
                        {/* <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Image Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                onChange={handlePostMessage}
                                value={handlePost.category}
                                name="category"
                                placeholder="Enter category of image"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
                            />
                        </div> */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                Image Category
                            </label>
                            <select
                                id="category"
                                value={handlePost.category}
                                onChange={(e) => setHandlePost({...handlePost, category: e.target.value})}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
                                required
                            >   
                                <option value="" disabled>Select a Category</option>
                                <option value="money">Money</option>
                                <option value="health">Health</option>
                                <option value="gaming">Gaming</option>
                                <option value="technology">Technology</option>
                            </select>
                            </div>
                        <div className="flex items-center justify-between mb-4">
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Register
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePost;