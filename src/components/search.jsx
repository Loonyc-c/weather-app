import SearchIcon from "../icons/search"
function Search(props){
const {searchValue, handleSearchChange} = props
    return (
        <div className="w-[500px] h-[80px] pl-[30px] z-20 items-center flex rounded-full bg-[#ffff]">
        <SearchIcon />
        <input
          placeholder="Search"
          className="w-full py-4 pl-5 outline-none text-[32px] font-bold"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>) 
}
export default Search