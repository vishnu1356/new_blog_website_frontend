import Category from "../component/Category/Category";
import HeroSection from "../component/HeroSection/HeroSection";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import Post from "../component/Post/Post";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Category />
            <Post />
            <NewsLetter  />
        </div>
    )
}
export default Home;