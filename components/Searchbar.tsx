import React from "react";
import { Input } from "./ui/input";
import { PiMagnifyingGlassThin } from "react-icons/pi";

interface SearchBarProps {
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar = ({ value, onChangeValue }: SearchBarProps) => {
  return (
    <div className="relative w-full flex flex-row justify-center items-center">
      <div className="w-3/4 lg:w-1/2 flex flex-row justify-center items-center gap-5 bg-gray-50 rounded-full p-2 relative">
        <Input
          type="text"
          placeholder="Search location"
          value={value}
          onChange={onChangeValue}
          className="w-full h-9 rounded-full border-none focus:border-none outline-0 focus:outline-0 ring-0 focus:ring-0 bg-white shadow shadow-black-100"
        />
        <PiMagnifyingGlassThin className="text-blue-950 absolute right-5 w-5 h-5 cursor-pointer hover:text-blue-800" />
      </div>
    </div>
  );
};

export default Searchbar;
