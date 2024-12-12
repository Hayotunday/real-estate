import React from "react";
import { FiMenu } from "react-icons/fi";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <FiMenu size={35} className="text-blue-950" />
    </div>
  );
};

export default MobileNav;
