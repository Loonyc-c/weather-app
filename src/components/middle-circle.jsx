import LogoLeft from "../icons/logo-left"
import LogoRight from "../icons/logo-right"
function MiddleCircle(){
return (<div className="absolute flex items-center justify-center">
    <div className=" z-20 flex gap-[20px] justify-center items-center w-[140px] h-[140px] rounded-full border-gray-500 absolute border border-black border-dotted bg-white">
      <LogoLeft />
      <LogoRight />
    </div>
    <div className=" flex flex-col gap-[0px] w-[340px] h-[340px] rounded-full border-gray-500 absolute border border-dotted">
      <div className="z-30 mt-[30px] ml-[50%] w-[100px] h-[103px] bg-[#0F141E]  rounded-bl-full"></div>
      <div className="z-30 mt-[72px] ml-[50%] w-[100px] h-[102px]  bg-[#0F141E]  rounded-tl-full"></div>
    </div>
    <div className="w-[540px] h-[540px] rounded-full border-gray-500 absolute border  border-dotted"></div>
    <div className="w-[740px] h-[740px] rounded-full border-gray-500 absolute border  border-dotted"></div>
    <div className="w-[940px] h-[940px] rounded-full border-gray-500 absolute border border-dotted"></div>
    <div className="w-[100px] h-[274px] z-10 bg-[white]"></div>
  </div>)
}
export default MiddleCircle