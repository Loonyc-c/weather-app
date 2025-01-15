import moon from "./assets/moon-little.webp";
import sun from "./assets/sun-little.webp";
import { useEffect, useState } from "react";
import countriesData from "./data.jsx";
import Search from "./components/search.jsx";
import WeatherCard from "./components/weather-card.jsx";
import MiddleCircle from "./components/middle-circle.jsx";
import {getAllCities} from "./utils/get-all-cities.js"

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [weatherData, setWeatherData] = useState([])
  const [selectedCity, setSelectedCity] = useState("Ulan Bator, Mongolia")
   
 console.log(weatherData)
  const getCountries = async() => {
    try{  
      const response = await fetch(" https://countriesnow.space/api/v0.1/countries")
      const result = await response.json()
      const countries = result.data
      const cities = getAllCities(countries)
      setAllCities(cities)
    } catch (error){
      console.log(error)
    }
  }
  const weatherApiKey = "0e699c587c7948bc8c291308251501"

  const getWeatherData = async()=>{
    try{
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`)
      const result = await response.json()
      setWeatherData(result)
      // console.log(result)
    }
    catch(error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getCountries()
  },[])

  useEffect(()=>{
    getWeatherData()
  },[selectedCity])

  // 

  // useEffect(() => {
  //   const cities = countriesData.flatMap((obj) =>
  //     obj.cities.map((city) => `${city}, ${obj.country}`)
  //   );
  //   console.log("all cities", cities);
  //   setAllCities(cities);
  // }, [countriesData]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    const filtered = allCities
      .filter((city) => city.toLowerCase().startsWith(searchValue.toLowerCase()))
      .slice(0, 4);
    setFilteredData(filtered);
  };

  return (
    <>
      {/* container */}
      <div className="bg-#F3F4F6 w-screen h-screen flex justify-center items-center ">
        {/* left side */}
        <div className=" w-screen h-screen bg-#F3F4F6 justify-center items-center flex flex-col">
          {/* search input */}
          <Search searchValue={searchValue} handleSearchChange={handleSearchChange} filteredData={filteredData}/>

          {/* day */}
          <WeatherCard
            date="date"
            city="City Name"
            temp={26}
            imageSrc={`https://s3-alpha-sig.figma.com/img/695d/d5ec/821b86dd320b93434750d28a17b16fc0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdLdzS3dxr0-t5SiN2fDMkxayH-uq0A8msh4wXcpSveM5sDN0IZ~-K0m4uXWVsAV9DGkPQDJlyndEKFu7JZVqpKMOfi2fKHKS642HII2MgKwOBa5pNxqk2xh7TsJ0m~zwXlrztxu7DETzSsYn3yV25dzlvEZjXct9h1vafyp6jAjUzdPEFopW3Wfe6jk90gzgX2lNYXPEv6lj0VdgQvVBqAK-PN~-ShY8nHV6JQ4x1YhX0UDeb44ulngf4b3kgrzJZ~DNiY8A5wCSFP~pOboVuBAc~OzVVPh6m5HnFjIc3VHXdbSgcGpYpyeqmuQZ9oJbSEYaPB~B4M7YvxekKfPCg__`}
            dayOrNight="day"
            weatherContidtion= "sunny" 
            cornerCircle={sun} />
        </div>
        {/* right side  */}

        <div className="w-screen h-screen bg-[#0F141E] justify-center items-center flex flex-col">
          {/* night */}
          <WeatherCard
            date="date"
            city="City Name"
            temp={26}
            imageSrc={`https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ft9~h2kAcRihnxvVgA9fussyynRP2N5P0~9iKCQRv-isLrnzSbeXK~uwJwozaftBvHpqV4ba8sRJGIueVAlZd2pKb3A05AyUdcGMzjnnAPNoA-vyKiLzxjVpXeinrFUUEJw9iQOY279drc9PU5iicGoLQVC9RkCfDtT9ta5AfBjwtQWxcEfRmR8dcXEkIOJ1IGF8GL5infm6xZb5Pej7C7bIllsp-mPuUiK11NOvhnG-AtGn1HeAJtO7VPY-zO2ih0zc6N7kbnPtAMmsum2OdgvwaKi5mi1~fJBlq77R9d5a6jjUzBRihyLqHDLlofC32fyYVclAlvT2c9odRKxooQ__`}
            dayOrNight="harangui" 
            weatherContidtion="night"
            cornerCircle={moon} />
        </div>

        {/* rounded dots*/}
        <MiddleCircle />
      </div>

    </>
  );
}

export default App;