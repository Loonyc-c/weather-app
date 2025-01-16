import LocationIcon from "../icons/location-icon.jsx"
function WeatherCard(props) {
    const { dayOrNight, temp, city, imageSrc, date, cornerCircle, weatherContidtion } = props
    return (
        <div>
            <div className={`w-[400px] h-[800px] z-30  shadow-lg backdrop-blur-md ${dayOrNight === 'day' ? 'bg-white' : 'bg-[#111827BF]'}`}>
                <div className="text-white flex items-center flex-col gap-[60px] py-[64px] px-[40px]">
                    <div className=" w-[100%] flex items-center justify-between">
                        <div className={`${dayOrNight === 'day' ? 'text-black' : 'text-white'}`}>
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
                    <h1 className={`text-[24px] font-extrabold mb-12 h-6 ${dayOrNight === 'day' ? 'text-[orange]' : 'text-[#777cce]'}`}>
                        {weatherContidtion}
                    </h1>
                </div>

            </div>
            <img
                className={`absolute ${dayOrNight === "day" ? 'mt-[-900px] ml-[-100px]' : ' mt-[-80px] ml-[350px]'}`}
                src={cornerCircle}
            />
        </div>
    )
}
export default WeatherCard