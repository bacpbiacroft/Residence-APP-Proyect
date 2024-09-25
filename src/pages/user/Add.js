import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import configAxios from "../../utils/configAxios";

function Add() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [house, setHouse] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    lastname: lastname,
    house: house,
  };

  function submitForm(e) {
    e.preventDefault();
    configAxios.post("http://localhost:8080/visitants", data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Agregar visitante</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Ingresa el nombre del visitante"
        />
        <input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Ingresa el apellido del visitante"
        />
        <input
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Ingresa el número de casa"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Agregar visitante
        </button>
      </form>
    </div>
  );
}

export default Add;
