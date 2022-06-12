import React from "react";
function SplitLayout({ left, right }) {
  return (
    <div className="flex h-screen justify-center items-center bg-[#E5E5E5]">
      <div className="flex flex-wrap justify-center items-center w-[85%] h-[90%] sm:items-start md:w-[75%] md:h-[85%] rounded-lg bg-white">
        <div className="bg-cover bg-top w-[100%] h-[100%] hidden md:w-[55%] 2xl:w-[50%] md:flex">
          {left}
        </div>
        <div className="animate-fade flex justify-center items-center w-[100%] sm:w-[85%] sm:h-[85%] md:w-[45%] 2xl:w-[50%] h-[100%]">
          {right}
        </div>
      </div>
    </div>
  );
}

export default SplitLayout;