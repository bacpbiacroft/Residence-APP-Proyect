import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import configAxios from "../../utils/configAxios";
import { Layout } from "../../components/Layout";
import { validateDpi } from "../../utils/functions";


function Add() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [house, setHouse] = useState("");
  const [dpi, setDpi] = useState("");

  const { id } = useParams();

  useEffect(() => {
    configAxios.get(`https://residense-api.vercel.app/visitants/${id}`).then((res) => {
      setName(res.data.name);
      setLastname(res.data.lastname);
      setHouse(res.data.house);
      setDpi(res.data.dpi);
    });
  }, []); //ignorar

  const navigate = useNavigate();

  const data = {
    name: name,
    lastname: lastname,
    house: house,
    dpi: dpi,
  };

  function Update(e) {
    e.preventDefault();
    const dpi = data.dpi
    const isValidDpi = validateDpi(dpi)
    if (isValidDpi) {
      configAxios
      .patch(`https://residense-api.vercel.app/visitants/${id}`, data)
      .then(navigate("/"));
      
    }
  }
  return (
    <Layout>
      <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
        <h2 className="text-2xl font-bold">Detalles de visitante</h2>
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
            type="number"
            placeholder="Ingresa el número de casa"
          />
          <input
            value={dpi}
            onChange={(e) => setDpi(e.target.value)}
            className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
            type="text"
            placeholder="Ingresa el número de DPI"
          />
          <button
            className="bg-[#F7AD19] outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4 "
            type="submit"
            onClick={Update}
          >
            Actualizar Visitante
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Add;
