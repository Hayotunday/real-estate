import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home-section"
      className="w-full flex flex-row justify-around relative items-start p-10 overflow-hidden"
    >
      <div className="w-1/3 flex flex-col gap-5">
        <h1 className="2xl:text-[72px] sm:text-[60px] text-[50px] font-extrabold text-blue-950 tracking-normal">
          Welcome to a World of Real Estate Made Simple.
        </h1>
        <p className="2xl:text-[24px] sm:text-[20px] text-[16px] font-light text-blue-900">
          Find the perfect home for your next stay
        </p>
      </div>
      <div className="w-[500px] h-[500px] relative max-w-full max-h-screen  ">
        <Image
          alt="hero house"
          src={"/images/house_2.png"}
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
