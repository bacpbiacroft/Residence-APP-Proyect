import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post(`http://localhost:8080/auth/login`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.authentication.sessionToken);
        navigate("/");
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          toast.error('LAS CREDENCIALES NO SON CORRECTAS', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "Bounce",
            });
        }
      });
  };

  return (
    <div className="flex flex-col bg-[#48c3ec] items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit(submit)} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-black text-sm font-bold mb-2"
          >
            Correo electronico
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Ingresa tu correo electronico"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-black text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Ingresa tu contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-[#F7AD19] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
