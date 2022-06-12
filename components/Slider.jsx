import React, { useState, useEffect, useRef } from "react";

const images = ["/img1.webp", "/img0.webp", "/img2.webp"];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const removeAnimation = () => {
    slideRef.current.classList.remove("animate-fade");
  };
  

  useEffect(() => {
    const fader = () => {
      const current = (currentIndex + 1) % images.length;
      handleClick(current);
      slideRef.current.addEventListener("animationend", removeAnimation);
    };

    const timer = setTimeout(fader, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const handleClick = (value) => {
    if (typeof window !== "undefined") {
      var active = document.getElementById(`${currentIndex}`);
    }
    activeState(active);
    slideRef.current.classList.add("animate-fade");setCurrentIndex(value);
    
    
  };

  function activeState(e) {
    var elems = document.querySelector(".active_btn");
    if (elems !== null) {
      elems.classList.remove("active_btn");
    }
    e.classList.add("active_btn");
  }

  return (
    <div className="relative select-none aspect-w-16 aspect-h-9 w-[100%] h-[100%]">
      <div
        ref={slideRef}
        className="slider anim-fade bg-cover bg-center h-[100%] w-[100%]"
        style={{ backgroundImage: `url('/images${images[currentIndex]}')` }}
      ></div>
      <div className="transition-all ease-in-out absolute w-full h-full top-0 px-8 py-10 bg-transparent flex flex-col justify-between backdrop-brightness-[50%] text-white font-normal">
        <div className="outline-none">
          <a href="https://www.trygreyswitch.com/" target="_blank">
            <img src="/logo.svg" alt="" />
          </a>
        </div>

        <div className="flex flex-col gap-y-4 mb-[20%]">
          <div className="space-x-4">
            <button
              id={0}
              className="active_btn w-[2.5rem] h-[10px] border-2 border-white duration-500 hover:bg-white rounded-lg"
              onClick={() => handleClick(0)}
            />
            <button
              id={1}
              className="w-[2.5rem] h-[10px] border-2 border-white duration-500 hover:bg-white rounded-lg"
              onClick={() => handleClick(1)}
            />
            <button
              id={2}
              className="w-[2.5rem] h-[10px] border-2 border-white duration-500 hover:bg-white rounded-lg"
              onClick={() => handleClick(2)}
            />
          </div>
          <p className="text-2xl font-medium tracking-wide">
            Open an Account in a flash.
          </p>
          <p className="text-xs w-[70%]">
            Our process is fast and easy. No paperworks. Get back to {"\n"}
            managing what matters in no time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
