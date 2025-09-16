import React from "react";
import Online from "./Online";
import { Link } from "react-router-dom";

function Technology() {
  return (
    <div className="w-full py-10">
      {/* Main Wrapper */}
      <div className="flex flex-col md:flex-row w-full mt-10">
        
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center -mt-80">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
            Highly Innovative <br />
            Technology & <br />
            Services
          </h1>

          <p className="text-[15px] mt-6 text-gray-700">
            We appreciate your trust greatly. Our patients choose
            us and our services because they know we are the best.
            We offer complete health care to individuals with
            various health concerns.
          </p>

          <div className="mt-6">
            <Link to="/Allservice">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition w-full sm:w-[50%] md:w-[40%]">
              All services
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full md:w-1/2 p-4">
          
          {/* Card 1 */}
          <div className="min-h-[200px] bg-blue-50 p-5 flex">
            {/* Icon */}
            <div className="h-12 w-14 bg-white flex items-center justify-center mt-2 md:mt-6 shadow-sm rounded">
              <i className="fa-solid fa-heart-pulse text-[30px] text-blue-600"></i>
            </div>
            {/* Content */}
            <div className="pl-4 flex flex-col justify-center">
              <h1 className="text-lg font-bold">Cardiology</h1>
              <p className="leading-tight mt-2 text-sm text-gray-600">
                Id mollis consectetur congue <br />
                egestas egestas <br />
                suspendisse blandit justo
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-block mt-3 hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-h-[200px] bg-blue-50 p-5 flex">
            <div className="h-12 w-14 bg-white flex items-center justify-center mt-2 md:mt-6 shadow-sm rounded">
  <i className="fa-solid fa-stethoscope text-[30px] text-blue-600"></i>
</div>

            <div className="pl-4 flex flex-col justify-center">
              <h1 className="text-lg font-bold">Family Medicine</h1>
              <p className="leading-tight mt-2 text-sm text-gray-600">
                Id mollis consectetur congue <br />
                egestas egestas <br />
                suspendisse blandit justo
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-block mt-3 hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Placeholder 1 */}
          <div className="min-h-[200px] border-gray-400 flex items-center justify-center bg-blue-50 p-5">
            <div className="flex">
              <div className="h-12 w-14 bg-white flex items-center justify-center -mt-1 md:mt-1 shadow-sm rounded">
                <i class="fa-solid fa-syringe text-[30px] text-blue-600"></i>
              </div>
              <div className="pl-4 flex flex-col justify-center">
                <h1 className="text-lg font-bold">Surgery</h1>
                <p className="leading-tight mt-2 text-sm text-gray-600">
                  Id mollis consectetur congue <br />
                  egestas egestas <br />
                  suspendisse blandit justo
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium inline-block mt-3 hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          {/* Placeholder 2 */}
          <div className="min-h-[200px] border-gray-400 flex items-center justify-center bg-blue-50 p-5">
            <div className="flex">
              <div className="h-12 w-14 bg-white flex items-center justify-center -mt-1 md:mt-1 shadow-sm rounded">
                <i class="fa-solid fa-lungs text-[30px] text-blue-600"></i>
              </div>
              <div className="pl-4 flex flex-col justify-center">
                <h1 className="text-lg font-bold">Pulmonary</h1>
                <p className="leading-tight mt-2 text-sm text-gray-600">
                  Id mollis consectetur congue <br />
                  egestas egestas <br />
                  suspendisse blandit justo
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium inline-block mt-3 hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          {/* Placeholder 3 */}
          <div className="min-h-[200px] border-gray-400 flex items-center justify-center bg-blue-50 p-5">
            <div className="flex">
              <div className="h-12 w-14 bg-white flex items-center justify-center -mt-1 md:mt-1 shadow-sm rounded">
                <i class="fa-solid fa-x-ray text-[30px] text-blue-600"></i>
              </div>
              <div className="pl-4 flex flex-col justify-center">
                <h1 className="text-lg font-bold">Radiology</h1>
                <p className="leading-tight mt-2 text-sm text-gray-600">
                  Id mollis consectetur congue <br />
                  egestas egestas <br />
                  suspendisse blandit justo
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium inline-block mt-3 hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          {/* Placeholder 4 */}
          <div className="min-h-[200px] border-gray-400 flex items-center justify-center bg-blue-50 p-5">
            <div className="flex">
              <div className="h-12 w-14 bg-white flex items-center justify-center -mt-1 md:mt-1 shadow-sm rounded">
                <i class="fa-solid fa-tooth text-[30px] text-blue-600"></i>
              </div>
              <div className="pl-4 flex flex-col justify-center">
                <h1 className="text-lg font-bold">Dental Care</h1>
                <p className="leading-tight mt-2 text-sm text-gray-600">
                  Id mollis consectetur congue <br />
                  egestas egestas <br />
                  suspendisse blandit justo
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium inline-block mt-3 hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Technology;
