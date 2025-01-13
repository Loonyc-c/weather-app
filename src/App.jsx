function App() {
  return (
    <>
    {/* container */}
      <div
        className="bg-#F3F4F6 w-screen h-screen flex justify-center items-center "
      >
        {/* left side */}
        <div className="w-screen h-screen bg-#F3F4F6 justify-center items-center flex"> 
          {/* sunny */}
          <div className="w-[400px] h-[800px]  bg-[#FFFF] z-10 rounded-xl ">
            {/* date, city, sunny image, */}
            <div className="text-white flex items-center flex-col gap-[60px] py-[64px] px-[40px]">
              <div className="text-black w-[100%]">
                <div>
              <p className="text-lg text-left">Date</p>
              <h2 className="text-5xl text-left">city</h2>
              </div>
              </div>
              <img className="w-[270px] h-[270px]" src="https://s3-alpha-sig.figma.com/img/695d/d5ec/821b86dd320b93434750d28a17b16fc0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdLdzS3dxr0-t5SiN2fDMkxayH-uq0A8msh4wXcpSveM5sDN0IZ~-K0m4uXWVsAV9DGkPQDJlyndEKFu7JZVqpKMOfi2fKHKS642HII2MgKwOBa5pNxqk2xh7TsJ0m~zwXlrztxu7DETzSsYn3yV25dzlvEZjXct9h1vafyp6jAjUzdPEFopW3Wfe6jk90gzgX2lNYXPEv6lj0VdgQvVBqAK-PN~-ShY8nHV6JQ4x1YhX0UDeb44ulngf4b3kgrzJZ~DNiY8A5wCSFP~pOboVuBAc~OzVVPh6m5HnFjIc3VHXdbSgcGpYpyeqmuQZ9oJbSEYaPB~B4M7YvxekKfPCg__" alt="" />
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="w-screen h-screen justify-center items-center flex bg-[#0F141E]">
          {/* night */}
        <div className="w-[400px] h-[800px]  bg-[#111827] z-10 rounded-xl"></div>
        </div>
        {/* rounded dots*/}
        <div className="w-[140px] h-[140px] rounded-full border-gray-500 absolute border border-black border-dotted"></div>
        <div className="w-[340px] h-[340px] rounded-full border-gray-500 absolute border border-black border-dotted"></div>
        <div className="w-[540px] h-[540px] rounded-full border-gray-500 absolute border border-black border-dotted"></div>
        <div className="w-[740px] h-[740px] rounded-full border-gray-500 absolute border border-black border-dotted"></div>
        <div className="w-[940px] h-[940px] rounded-full border-gray-500 absolute border border-black border-dotted"></div>
        <div className="w-[1140px] h-[1140px] rounded-full border-gray-500 absolute border border-black border-dotted"></div>

      </div>
    </>
  );
}

export default App;
