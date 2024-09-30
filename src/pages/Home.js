import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import configAxios from "../utils/configAxios";
import { Layout } from "../components/Layout";

function Home() {
  const [users, setUsers] = useState([]);

  function loadUsers() {
    configAxios.get("https://residense-api.vercel.app/visitants").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function deleteUser(id) {
    configAxios
      .delete(`https://residense-api.vercel.app/visitants/${id}`)
      .then(() => loadUsers()); // Fix potential issue: Ensure loadUsers is called as a callback
  }

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="text-xl lg:text-2xl font-bold my-4">Lista de visitantes</h1>
        <div className="overflow-x-auto w-full">
          <div className="inline-block min-w-full px-8 lg:px-12[">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-2 lg:px-6 lg:py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      DPI
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Numero de Casa
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Hora de registro
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Accion
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((data, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 lg:px-6 lg:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm text-gray-900 font-medium whitespace-nowrap">
                        {data.name} {data.lastname}
                      </td>
                      <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm text-gray-900 font-medium whitespace-nowrap">
                        {data.dpi}
                      </td>
                      <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm text-gray-900 font-medium whitespace-nowrap">
                        {data.house}
                      </td>
                      <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm text-gray-900 font-medium whitespace-nowrap">
                        {data.createdAt}
                      </td>
                      <td className="px-4 py-2 lg:px-6 lg:py-4 text-center text-sm font-medium whitespace-nowrap">
                        <div className="flex flex-col items-center justify-center md:flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                          <Link
                            to={`/users/${data._id}`}
                            className="text-indigo-600  hover:text-indigo-900 border rounded-md border-black w-20 py-3 lg:py-2"
                          >
                            Ver
                          </Link>
                          <Link
                            to={`/edit-user/${data._id}`}
                            className="text-blue-600 hover:text-blue-900 border rounded-md border-black w-20 py-3 lg:py-2"
                          >
                            Editar
                          </Link>
                          <button
                            onClick={() => deleteUser(data._id)}
                            className="text-red-600 hover:text-red-900 border rounded-md border-black w-20 py-3 lg:py-2"
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
