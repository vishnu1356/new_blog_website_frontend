
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  return (
    <header className="bg-black ">
      <nav className="px-4 py-4 flex justify-between items-center">
        {/* Left Part */}
        <div className="flex gap-8 items-center">
          <div>
            <a href="/" className="text-xl font-bold text-white">Blog <span className="text-orange-500">Post</span></a>
          </div>
          <div>
          <input
            type="text"
            placeholder="Enter Post title"
            className="border border-gray-300 rounded-md py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          </div>
        </div>


        {/* Middle Part */}

        <div className=" text-white gap-10 text-xl hidden lg:flex">
          <p className="hover:text-orange-500">Home</p>
          <p className="hover:text-orange-500">About</p>
          <p className="hover:text-orange-500">Service</p>
          <p className="hover:text-orange-500">Contact</p>
        </div>




        {/* Last Part */}


        <div className="text-white  gap-4 items-center  hidden lg:flex">
          <Link to={"/signin"} className="px-4 py-2 bg-orange-500 rounded-md">Login</Link>
          <Link to={"/signup"} className="px-4 py-2 bg-orange-500 rounded-md">Signup</Link>
        </div>
        <i className="fa-solid block icon fa-bars text-2xl text-white lg:hidden"></i>

      </nav>
      <div id="bb"></div>
    </header>
  )
}

export default Header;