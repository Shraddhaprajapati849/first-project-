import React from "react";
import Medical from "./Medical";

function Online(){
    return(
        <>
        <div className="h-[600px] w-full bg-white">
  <div className="flex h-[500px] w-full bg-blue-50 mt-20 gap-10">
    
    {/* Left Side Image */}
    <div className="h-[500px] w-[45%] pl-10 relative">
      <img
        src="public/doctr.jpg"
        className="h-full w-full object-cover -mt-20 rounded-lg shadow-lg"
      />
    </div>
    <div className="h-[500px] w-[50%]">
        <div className="flex h-[10%] w-[30%] bg-blue-50 gap-5 mt-20" >
            <div className="h-[30px] w-[30px] bg-white rounded-2xl flex items-center justify-center">
            <span className="text-lg font-bold">{"<"}</span>
            </div>
            <div className="h-[30px] w-[30px] bg-white rounded-2xl flex items-center justify-center">
            <span className="text-lg font-bold">{">"}</span>
            </div>
        </div>

        <p className="text-[40px] font-bold leading-tight mt-7">
            New Service - Start Your<br/>
             Care Online Now
        </p>
        <p className="text-[15px] font-normal leading-tight mt-5">
            asgfg strdrgfd rsddyt srtrrdt strdt dtdry dtyt<br/>
            xgfc fuyguy vhbi jhbikh jhgijhu jhbvih bjhhb jh<br/>
            asgfg strdrgfd rsddyt srtrrdt strdt dtdry dtyt<br/>
            xgfc fuyguy vhbi jhbikh jhgijhu jhbvih bjhhb jh.
        </p>
        <div className="mt-6">
  <button className="bg-green-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition inline-block text-center">
    Learn more
  </button>
</div>

    </div>

  </div>
</div>

        </>
    )
}
export default Online;