import RadioButton from "@/components/RadioButton";
import React from "react";

function HomeScreen() {
  return (
    <div className="flex flex-col items-center h-screen pt-20 gap-x-10">
      <div className="bg-white h-[20em] w-[23em] box-shadow rounded-lg px-4 responsive-mx">
        <div className="py-2">
          <RadioButton title="All pages" />
        </div>
        <hr className="pb-2 border-t-1 border-gray-200" />
        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <RadioButton key={index} title={`Page ${index + 1}`} />
          ))}
        </div>
        <hr className="pb-5 border-t-1 border-gray-200" />
        <div className=" bg-[#FFCE22] hover:bg-[#FFD84D] w-full h-10 border-none rounded flex flex-row items-center justify-center">
          <button>
            <div className="text-style ">Done</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
