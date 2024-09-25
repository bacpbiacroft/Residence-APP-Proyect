import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [house, setHouse] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/visitants/${id}`).then((res) => {
      setName(res.data.name);
      setLastname(res.data.lastname);
      setHouse(res.data.house);
    });
  }, [id]); //tiraba un error y agregue id

  const navigate = useNavigate();

  const data = {
    name: name,
    lastname: lastname,
    house: house,
  };

  function Update(e) {
    e.preventDefault();
    axios.patch(`http://localhost:8080/visitants/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
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
          onClick={Update}
        >
          Actualizar Visitante
        </button>
      </form>
    </div>
  );
}

export default Add;
