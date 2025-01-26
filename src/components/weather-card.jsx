import LocationIcon from "../icons/location-icon.jsx"
import Home from "../icons/home.jsx"
import Location from "../icons/location.jsx"
import Favorite from "../icons/favorite.jsx"
import Profile from "../icons/profile.jsx"
function WeatherCard(props) {
    const { dayOrNight, temp, city, imageSrc, date, cornerCircle, weatherContidtion } = props
    return (
        <div className="z-10">
            <div className={`w-[400px] h-[800px] rounded-10.5 shadow-lg backdrop-blur-md ${dayOrNight === "day" ? "bg-[white]" : "bg-Cool Gray-600"}`}>
                <div className=" text-white flex items-center flex-col gap-[60px] py-[64px] px-[40px]">
                    <div className=" w-[100%] flex items-center justify-between">
                        <div className={`${dayOrNight === "day" ? "text-black" : "text-white"}`}>
                            <p className="text-lg text-left">{date}</p>
                            <h2 className="text-5xl text-left">{city}</h2>
                        </div>
                        <LocationIcon />
                    </div>
                    <img className="w-[270px] h-[270px]" src={imageSrc} alt={`${city} weather`} />
                </div>
                <div className="w-[100%] h-[200px] px-[40px] text-white">
                    <h1 className="text-transparent bg-clip-text font-extrabold text-[100px] -mt-10 bg-gradient-to-b from-black to-white">
                        {temp} 
                    </h1>
                    <h1 className={`text-[24px] font-extrabold h-6 ${dayOrNight === "day" ? "text-[orange]" : "text-[#777cce]"}`}>
                        {weatherContidtion}
                    </h1>
                </div>
                <div className=" h-[80px] gap-[65px] py-[40px] px-[40px] flex">
                   <Home />
                   <Location />
                   <Favorite />
                   <Profile />
                </div>

            </div>
            <div className="hidden hover:block bg-[red] w-[400px] h-[800px]">

            </div>
            <div className={`absolute ${dayOrNight === "day" ? "mt-[-900px] ml-[-100px]" : " mt-[-80px] ml-[350px]"}`}>
            <img
                src={cornerCircle}
            />
            </div>
        </div>
    )
}
export default WeatherCard