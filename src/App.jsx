import moon from "./assets/moon-little.webp";
import sun from "./assets/sun-little.webp";
import { useEffect, useState } from "react";
import countriesData from "./data.jsx";
import Search from "./components/search.jsx";
import WeatherCard from "./components/weather-card.jsx";
import MiddleCircle from "./components/middle-circle.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [allCities, setAllCities] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const cities = countriesData.flatMap((obj) =>
      obj.cities.map((city) => `${city} ${obj.country}`)
    );
    console.log("all cities", cities);
    setAllCities(cities);
  }, [countriesData]);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredData([]);
    } else {
      const filtered = allCities.filter((city) =>
        city.includes(searchValue)
      );
      setFilteredData(filtered);
    }
  }, [searchValue, allCities]);


  return (
    <>
      {/* container */}
      <div className="bg-#F3F4F6 w-screen h-screen flex justify-center items-center ">
        {/* left side */}
        <div className="w-screen h-screen bg-#F3F4F6 justify-center items-center flex flex-col">
          {/* search input */}
          <Search searchValue={searchValue} handleSearchChange={handleSearchChange} />
          {filteredData.map((city, index) => (
            <p key={index}>{city}</p>
            ))}
          
          {/* day */}
          <WeatherCard
            date="date"
            city="City Name"
            temp={26}
            imageSrc={`https://s3-alpha-sig.figma.com/img/695d/d5ec/821b86dd320b93434750d28a17b16fc0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdLdzS3dxr0-t5SiN2fDMkxayH-uq0A8msh4wXcpSveM5sDN0IZ~-K0m4uXWVsAV9DGkPQDJlyndEKFu7JZVqpKMOfi2fKHKS642HII2MgKwOBa5pNxqk2xh7TsJ0m~zwXlrztxu7DETzSsYn3yV25dzlvEZjXct9h1vafyp6jAjUzdPEFopW3Wfe6jk90gzgX2lNYXPEv6lj0VdgQvVBqAK-PN~-ShY8nHV6JQ4x1YhX0UDeb44ulngf4b3kgrzJZ~DNiY8A5wCSFP~pOboVuBAc~OzVVPh6m5HnFjIc3VHXdbSgcGpYpyeqmuQZ9oJbSEYaPB~B4M7YvxekKfPCg__`}
            dayOrNight="day" 
            littleCircle={sun} />
        </div>
        {/* right side  */}

        <div className="w-screen h-screen bg-[#0F141E] justify-center items-center flex flex-col">
          <div className="h-[80px] w-[100%] "></div>
          {/* night */}
          <WeatherCard
            date="date"
            city="City Name"
            temp={26}
            imageSrc={`https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ft9~h2kAcRihnxvVgA9fussyynRP2N5P0~9iKCQRv-isLrnzSbeXK~uwJwozaftBvHpqV4ba8sRJGIueVAlZd2pKb3A05AyUdcGMzjnnAPNoA-vyKiLzxjVpXeinrFUUEJw9iQOY279drc9PU5iicGoLQVC9RkCfDtT9ta5AfBjwtQWxcEfRmR8dcXEkIOJ1IGF8GL5infm6xZb5Pej7C7bIllsp-mPuUiK11NOvhnG-AtGn1HeAJtO7VPY-zO2ih0zc6N7kbnPtAMmsum2OdgvwaKi5mi1~fJBlq77R9d5a6jjUzBRihyLqHDLlofC32fyYVclAlvT2c9odRKxooQ__`}
            dayOrNight="harangui" 
            littleCircle={moon} />
        </div>

        {/* rounded dots*/}
        <MiddleCircle />
      </div>

    </>
  );
}

export default App;