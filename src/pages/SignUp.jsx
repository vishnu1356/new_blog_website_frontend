

const SignUp = () => {



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            User  Name
            </label>
            <input
              type="text"
              id="name"
 
              placeholder="Enter your name"
              className="w-full px-3 py-2 outline-none border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="image">
                Upload Image
            </label>
            <input
                type="file"
                id="image"
                accept="image/*"
                className="w-full px-3 py-2 outline-none border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
            />
            </div> */}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            User  Email
            </label>
            <input
              type="email"
              id="email"

              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            User  Password
            </label>
            <input
              type="password"
              id="password"

              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
            />
          </div>   
          {/* <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            User Type
            </label>
            <input
              type="text"
              id="usertype"

              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
            />
          </div> */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-700">
              Already have an account?{' '}
              <a href="/" className="text-orange-500 hover:text-orange-700 font-bold">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
