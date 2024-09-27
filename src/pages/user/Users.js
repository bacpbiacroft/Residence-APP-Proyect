import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import configAxios from "../../utils/configAxios";
import { Layout } from "../../components/Layout";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    configAxios.get(`http://localhost:8080/visitants/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []); //ignorar

  return (
    <Layout>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Regresar
        </Link>
        {user && (
          <div className="w-auto lg:h-[200] px-12 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Nombre
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Apellido
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Casa
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                DPI
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.name}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.lastname}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.house}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
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
