import AboutImage from "../assets/about.webp"
import MissonImage from "../assets/mission.webp"

const About = () => {
    return (
        <div>
            <div className="w-[80%]  flex  justify-around mx-auto mt-20">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-4xl text-left font-semibold  w-[60%] mb-2">About Us</h1>
                    <p className="text-left    w-[60%]">Discover our story, core values, work culture and people behind our success.</p>
                </div>
                <div className="h-[55%] w-[60%]">
                    <img src={AboutImage} alt="company Logo" className="rounded-md" />
                </div>
            </div>
            <div className="w-[80%]  flex  justify-around mx-auto mt-20 ">
                <div className="flex flex-col items-start justify-center  w-[70%]">
                    <h1 className="text-4xl text-left font-semibold  w-[70%] mb-2">The Whizamet journey</h1>
                    <p className="text-left w-[70%]">Founded by two friends Poonam and Dharam, who recognized the need for brands to usher in the digital era, Whizamet had humble beginnings in a small cabin in the year 2016. With a shared dream and unwavering commitment, they set out to provide holistic marketing solutions, thus redefining the way businesses connect with their audiences. Over the years, Whizamet has evolved with its clients, broadening the spectrum of its services​​ to empower brands to thrive in the digital age.

                        As Whizamet grew, its culture transformed into a relentless determination to exceed expectations. With every project, we strive to turn obstacles into opportunities for our success. We have the brightest minds in technology who leave no stone unturned to transform ordinary ideas into extraordinary realities.</p>
                </div>
                <div className="h-[60%] w-[30%] ">
                    <img src={MissonImage} alt="mission Logo" className="rounded-md" />
                </div>
            </div>
        </div>

    )
}

export default About;