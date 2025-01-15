import SearchIcon from "../icons/search";
import LocationIcon from "../icons/location-icon";
function Search(props) {
  const { searchValue, handleSearchChange, filteredData } = props;
  const shouldDisplay = searchValue.length > 0 && filteredData.length > 0;
  return (
    <div className="absolute mt-[-800px] w-[500px] h-[80px] gap-[30px] z-20 flex flex-col  rounded-full bg-[#ffff]">
      <div className="relative items-center flex rounded-full pl-[30px] bg-[#ffff]">
        <SearchIcon />
        <input
          placeholder="Search"
          className="w-full py-4 pl-5 outline-none text-[32px] font-bold"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
     { shouldDisplay && (<div className="rounded-3xl bg-white/80 py-4 shadow-lg backdrop-blur-md">
          {filteredData.map((city, index) => (
            <p
              className="flex text-[18px] gap-[10px] px-[10px] py-[5px]"
              key={index}
            >
              <LocationIcon /> {city}
            </p>
          ))}
        </div>)
        
}
    </div>
  );
}
export default Search;
