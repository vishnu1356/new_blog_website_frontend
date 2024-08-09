
import  "../../App.css"

const Category = (props) => {




    return (
        <div>
            <div className="flex gap-8 md:gap-12  justify-center flex-wrap mt-12 mb-12 cursor-pointer text-normal sm:text-xl font-semibold">
                <p onClick={() => props.fethAllData()} className="hover:text-orange-500">All</p>
                <p onClick={() => props.fethData("money")} className="hover:text-orange-500">Money</p>
                <p onClick={() => props.fethData("health")} className="hover:text-orange-500">Health</p>
                <p onClick={() => props.fethData("gaming")} className="hover:text-orange-500">Gaming</p>
                <p onClick={() => props.fethData("technology")} className="hover:text-orange-500">Technology</p>
            </div>
        {/* <div id="bbt" className="border border-b border-black mt-8"></div> */}
        </div>
    )
}


export default Category;