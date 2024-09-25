const tokenExists = () => {
  const token = localStorage.getItem("token");
  return token !== null && token !== "";
};

export default tokenExists;