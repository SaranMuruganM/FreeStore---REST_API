import React from "react";
import Logo from '/logo.png'
const NavBar = () => {
  return (
    <div className="h-[100px] flex items-center text-sm px-[15rem] justify-between">
      <div className="flex items-center">
      <img src={Logo} alt="logo" className="h-[50px] w-[50px]"/>
      
        
      </div>
      <div className="flex *:block gap-8 text-semibold text-xs mr-20 opacity-55">
        <a href="#" >Home</a>
        <a href="#">Github</a>
      </div>
    </div>
  ); 
};

export default NavBar;
