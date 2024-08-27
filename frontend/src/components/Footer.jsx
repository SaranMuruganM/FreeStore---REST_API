import React from 'react'
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="h-[15vh] bg-[#09A129] bg-opacity-20 mt-[10vh] flex items-center justify-center text-xs">
      Made with
      <span className='mx-1'>
        <FaHeart fill='red'/>
      </span>
      by Saran M
    </div>
  );
}

export default Footer