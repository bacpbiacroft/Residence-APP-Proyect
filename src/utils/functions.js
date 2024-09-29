
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DPI_SUFFIX_LIST_GUATEMALA } from "./constants";

export const validateDpi = (dpi = "") => {
  const isValidLenght = dpi.length === 13;
  const lastFourDigits = dpi.slice(-4);
  const isValidSuffix = DPI_SUFFIX_LIST_GUATEMALA.includes(lastFourDigits);
  if (!isValidLenght) {
    toast.error('DPI NO ESTA COMPLETO', {
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
  } else if (isValidLenght && !isValidSuffix) {
    toast.error('EL DPI INGRESADO ES FALSO', {
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
  return isValidLenght && isValidSuffix
};