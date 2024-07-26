
import { Footer } from 'flowbite-react'
import './App.css'
import Category from './component/Category/Category'
import Header from './component/Header/Header'
import HeroSection from './component/HeroSection/HeroSection'
import NewsLetter from './component/NewsLetter/NewsLetter'
import Post from './component/Post/Post'
import FooterSection from './component/Footer/Footer'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import AllRoutes from './Routes/AllRoutes'
function App() {
  return (
      <>
            <Header />
            <AllRoutes />

            <FooterSection />
      </>
  )
}

export default App
