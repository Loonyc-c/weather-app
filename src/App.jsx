import moon from "./assets/moon-little.webp";
import sun from "./assets/sun-little.webp";
import { useEffect, useState } from "react";
import Search from "./components/search.jsx";
import WeatherCard from "./components/weather-card.jsx";
import MiddleCircle from "./components/middle-circle.jsx";
import { getAllCities } from "./utils/get-all-cities.js";
import { ClipLoader } from "react-spinners";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [selectedCity, setSelectedCity] = useState("Ulan Bator, Mongolia");
  const [isLoading, setIsLoading] = useState(false)
  console.log(weatherData);

  const getCountries = async () => {
    // setIsLoading(true)
    try {
      const response = await fetch(
        " https://countriesnow.space/api/v0.1/countries"
      );
      const result = await response.json();
      const countries = result.data;
      const cities = getAllCities(countries);
      setAllCities(cities);
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false)
    }
  };
  const weatherApiKey = "0e699c587c7948bc8c291308251501";

  const getWeatherData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
      );
      const result = await response.json();
      setWeatherData(result);
      // console.log(result)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };
  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [selectedCity]);

  const handleClickCity = (city) => {
    setSelectedCity(city);
    setSearchValue("");
    setFilteredData([]);
  };
  //

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    const filtered = allCities
      .filter((city) =>
        city.toLowerCase().startsWith(searchValue.toLowerCase())
      )
      .slice(0, 4);
    setFilteredData(filtered);
  };



  const getDayWeatherImage = () => {
    const conditionText =
      weatherData.forecast?.forecastday[0]?.day?.condition?.text;

    if (conditionText === "Sunny") {
      return "/day/sunny.png";
    } else if (conditionText === "Partly cloudy" || conditionText === "Cloudy") {
      return "/day/cloudy.png";
    } else if (
      conditionText === "Patchy rain possible" ||
      conditionText === "Patchy light drizzle" ||
      conditionText === "Light drizzle" ||
      conditionText === "Freezing drizzle" ||
      conditionText === "Heavy freezing drizzle" ||
      conditionText === "Patchy light rain" ||
      conditionText === "Light rain" ||
      conditionText === "Moderate rain at times" ||
      conditionText === "Moderate rain" ||
      conditionText === "Heavy rain at times" ||
      conditionText === "Heavy rain" ||
      conditionText === "Light freezing rain" ||
      conditionText === "Moderate or heavy freezing rain" ||
      conditionText === "Light rain shower" ||
      conditionText === "Moderate or heavy rain shower" ||
      conditionText === "Torrential rain shower" ||
      conditionText === "Light sleet showers" ||
      conditionText === "Moderate or heavy sleet showers"
    ) {
      return "/day/rainy.png";
    } else if (
      conditionText === "Patchy snow possible" ||
      conditionText === "Blowing snow" ||
      conditionText === "Light sleet" ||
      conditionText === "Moderate or heavy sleet" ||
      conditionText === "Patchy light snow" ||
      conditionText === "Light snow" ||
      conditionText === "Patchy moderate snow" ||
      conditionText === "Moderate snow" ||
      conditionText === "Patchy heavy snow" ||
      conditionText === "Heavy snow" ||
      conditionText === "Light snow showers" ||
      conditionText === "Moderate or heavy snow showers" ||
      conditionText === "Light showers of ice pellets" ||
      conditionText === "Moderate or heavy showers of ice pellets"
    ) {
      return "/day/snowy.png";
    } else if (
      conditionText === "Thundery outbreaks possible" ||
      conditionText === "Ice pellets" ||
      conditionText === "Patchy light rain with thunder" ||
      conditionText === "Moderate or heavy rain with thunder" ||
      conditionText === "Patchy light snow with thunder" ||
      conditionText === "Moderate or heavy snow with thunder"
    ) {
      return "/day/thunderstorm.png";
    } else {
      return "/day/sunny.png";
    }
  };


  const getNightWeatherImage = () => {
    const conditionText =
      weatherData.forecast?.forecastday[0]?.day?.condition?.text;

    if (conditionText === "Sunny") {
      return "/night/sunny.png";
    } else if (conditionText === "Partly cloudy" || conditionText === "Cloudy") {
      return "/night/cloudy.png";
    } else if (
      conditionText === "Patchy rain possible" ||
      conditionText === "Patchy light drizzle" ||
      conditionText === "Light drizzle" ||
      conditionText === "Freezing drizzle" ||
      conditionText === "Heavy freezing drizzle" ||
      conditionText === "Patchy light rain" ||
      conditionText === "Light rain" ||
      conditionText === "Moderate rain at times" ||
      conditionText === "Moderate rain" ||
      conditionText === "Heavy rain at times" ||
      conditionText === "Heavy rain" ||
      conditionText === "Light freezing rain" ||
      conditionText === "Moderate or heavy freezing rain" ||
      conditionText === "Light rain shower" ||
      conditionText === "Moderate or heavy rain shower" ||
      conditionText === "Torrential rain shower" ||
      conditionText === "Light sleet showers" ||
      conditionText === "Moderate or heavy sleet showers"
    ) {
      return "/night/rainy.png";
    } else if (
      conditionText === "Patchy snow possible" ||
      conditionText === "Blowing snow" ||
      conditionText === "Light sleet" ||
      conditionText === "Moderate or heavy sleet" ||
      conditionText === "Patchy light snow" ||
      conditionText === "Light snow" ||
      conditionText === "Patchy moderate snow" ||
      conditionText === "Moderate snow" ||
      conditionText === "Patchy heavy snow" ||
      conditionText === "Heavy snow" ||
      conditionText === "Light snow showers" ||
      conditionText === "Moderate or heavy snow showers" ||
      conditionText === "Light showers of ice pellets" ||
      conditionText === "Moderate or heavy showers of ice pellets"
    ) {
      return "/night/snowy.png";
    } else if (
      conditionText === "Thundery outbreaks possible" ||
      conditionText === "Ice pellets" ||
      conditionText === "Patchy light rain with thunder" ||
      conditionText === "Moderate or heavy rain with thunder" ||
      conditionText === "Patchy light snow with thunder" ||
      conditionText === "Moderate or heavy snow with thunder"
    ) {
      return "/night/thunderstorm.png";
    } else {
      return "/night/sunny.png";
    }
  };

  if(isLoading){
    return <div className=" flex absolute gap-[104vh] top-[45vh] left-[52vh]">
      <ClipLoader 
      />
      <ClipLoader 
      />
      </div> 
  }

  return (
    <>
      {/* container */}
      <div className="bg-#F3F4F6 w-screen h-screen flex justify-center items-center ">
        {/* left side */}
        <div className="relative w-screen h-screen bg-#F3F4F6 justify-center items-center flex flex-col">
          {/* search input */}

          <Search
            searchValue={searchValue}
            handleSearchChange={handleSearchChange}
            filteredData={filteredData}
            handleClickCity={handleClickCity}
          />

          {/* day */}
          <WeatherCard
            date={weatherData.forecast?.forecastday[0]?.date}
            city={weatherData.location?.name}
            temp={weatherData.forecast?.forecastday[0]?.day?.maxtemp_c}
            imageSrc={getDayWeatherImage()}
            dayOrNight="day"
            weatherContidtion={
              weatherData.forecast?.forecastday[0]?.day?.condition?.text
            }

            cornerCircle={sun}

          />
          

        </div>
        
        {/* right side  */}

        <div className="w-screen h-screen bg-[#0F141E] justify-center items-center flex flex-col">
          {/* night */}
          <WeatherCard
            date={weatherData.forecast?.forecastday[0]?.date}
            city={weatherData.location?.name}
            temp={weatherData.forecast?.forecastday[0]?.day?.mintemp_c}
            imageSrc={getNightWeatherImage()}
            dayOrNight="night"
            weatherContidtion={
              weatherData.forecast?.forecastday[0]?.day?.condition?.text
            }
            cornerCircle={moon}

          />
        </div>

        {/* rounded dots*/}
        <MiddleCircle />
      </div>
    </>
  );
}

export default App;
