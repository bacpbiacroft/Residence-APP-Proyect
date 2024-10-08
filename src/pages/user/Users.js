import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import configAxios from "../../utils/configAxios";
import { Layout } from "../../components/Layout";


function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    configAxios.get(`https://residense-api.vercel.app/visitants/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []); //ignorar

  return (
    <Layout>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-[#F7AD19] bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-black text-black border-zinc-400 py-4 px-4 pl-4"
        >
          Regresar
        </Link>
        {user && (
          <div className="w-auto lg:h-[200] px-12 py-4 flex shadow-xl rounded-xl justify-center items-center bg-[#429EBD] mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-black font-bold text-3xl border-[#F27F0C] border-b-2 border-r-2">
                Nombre
              </h2>
              <h2 className="text-black font-bold text-3xl border-[#F7AD19] border-b-2 border-r-2">
                Apellido
              </h2>
              <h2 className="text-black font-bold text-3xl border-[#F27F0C] border-b-2 border-r-2"> 
                Casa
              </h2>
              <h2 className="text-black font-bold text-3xl border-[#F7AD19] border-b-2 border-r-2">
                DPI
              </h2>
      
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-[#9FE7F5] font-bold text-3xl border-[#F7AD19] border-b-2 border-l-2 ">
                {user.name}
              </h2>
              <h2 className="text-[#9FE7F5] font-bold text-3xl border-[#F27F0C] border-b-2 border-l-2">
                {user.lastname}
              </h2>
              <h2 className="text-[#9FE7F5] font-bold text-3xl border-[#F7AD19] border-b-2 border-l-2"> 
                {user.house}
              </h2>
              <h2 className="text-[#9FE7F5] font-bold text-3xl border-[#F27F0C] border-b-2 border-l-2">
                {user.dpi}
              </h2>

             
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Users;
