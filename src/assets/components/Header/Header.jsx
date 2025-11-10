import { BsBoxFill, BsBell, BsFillPersonFill } from "react-icons/bs";
import React from "react";

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between px-12 border-b border-gray-200">
      <div className=" flex items-center gap-2">
        <div className="bg-blue-600 w-8 h-8 flex items-center justify-center rounded-md text-white">
          <BsBoxFill className="text-2xl" />
        </div>
        <h1 className="text-2xl font-medium text-gray-800">Sistema de Gestão de Estoque</h1>
      </div>

      <div className="flex items-center gap-12">
        <BsBell className="text-x1 cursor-pointer" />
        <BsFillPersonFill className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;