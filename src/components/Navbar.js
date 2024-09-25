import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className="w-ful h-16 flex items-center px-14 justify-between bg-teal-600">
        <Link
          to={"/"}
          className="text-3xl text-teal-200 font-semibold font-Montesarrat"
        >
          Residence Proyect
        </Link>
        <div className="flex justify-between items-center gap-3">
          <Link
            to={"/add-user"}
            className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
          >
            Registra a un vistante
          </Link>
          <button
            className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
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
