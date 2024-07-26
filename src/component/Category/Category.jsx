
import  "../../App.css"

const Category = () => {
    return (
        <div>
            <div className="flex gap-12  justify-center mt-12 cursor-pointer text-xl font-semibold">
                <p className="hover:text-orange-500">All</p>
                <p className="hover:text-orange-500">Money</p>
                <p className="hover:text-orange-500">Health</p>
                <p className="hover:text-orange-500">Gaming</p>
                <p className="hover:text-orange-500">Technology</p>
            </div>
        <div id="bbt" className="border border-b border-black mt-8"></div>
        </div>
    )
}


export default Category;