"use client";

import React, { useState } from "react";
import Searchbar from "./Searchbar";
import HouseCard from "./HouseCard";
import ShowMore from "./ShowMore";

const Listing = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <section
      id="listing-section"
      className="w-full p-5 flex flex-col justify-center items-start"
    >
      <h1 className="text-4xl font-extrabold text-blue-950 tracking-wide text-center w-full mb-5">
        House listings
      </h1>
      <Searchbar
        value={searchText}
        onChangeValue={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-8 p-10">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
      <ShowMore />
    </section>
  );
};

export default Listing;
