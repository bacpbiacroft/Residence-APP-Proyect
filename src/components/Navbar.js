import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className="w-full h-16 px-6 lg:px-16 flex items-center justify-between bg-[#F27F0C]">
        <div className="text-xl lg:text-3xl text-teal-200 font-semibold font-Montesarrat flex items-center gap-2 lg:gap-3">
          <IoHomeOutline />
          <Link
            to={"/"}
            className=""
          >
            Residence Proyect
          </Link>
        </div>
        <div className="text-base lg:text-lg flex justify-between items-center gap-3">
          <Link
            to={"/add-user"}
            className="flex items-center justify-center rounded-lg bg-white font-bold text-black text-xs p-1 lg:p-2 h-10 
            hover:bg-teal-600 hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md"
          >
            Registrar un visitante
          </Link>
          <button
            className="flex items-center justify-center rounded-lg bg-white font-bold text-black text-xs p-1 lg:p-2 h-10 w-auto 
            hover:bg-teal-600 hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
