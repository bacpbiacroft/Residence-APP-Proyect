import { useNavigate } from 'react-router-dom';

import { DPI_SUFFIX_LIST_GUATEMALA } from "./constants";

export const validateDpi = (dpi = "") => {
  const isValidLenght = dpi.length === 13;
  const lastFourDigits = dpi.slice(-4);
  const isValidSuffix = DPI_SUFFIX_LIST_GUATEMALA.includes(lastFourDigits);
  if (!isValidLenght) {
    alert("El DPI debe tener 13 digitos");
  } else if (isValidLenght && !isValidSuffix) {
    alert("El sufijo o codigo de municipio no es valido");
  }

  return isValidLenght && isValidSuffix
};