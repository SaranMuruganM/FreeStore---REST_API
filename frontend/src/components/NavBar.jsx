import React from "react";
import Logo from '/logo.png'
const NavBar = () => {
  return (
    <div className="h-[100px] flex items-center text-sm justify-between">
      <div>
        <img src={Logo} alt="logo" className="h-[50px] w-[50px]" />
      </div>
      <div className="flex *:block gap-8 text-semibold text-xs md:mr-20 opacity-55 mr-4">
        <a href="#">Home</a>
        <a href="https://github.com/SaranMuruganM/FreeStore---REST_API" target="_blank">
          Github
        </a>
      </div>
    </div>
  ); 
};

export default NavBar;
