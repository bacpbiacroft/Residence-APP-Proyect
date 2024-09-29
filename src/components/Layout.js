import Navbar from "./Navbar";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <ToastContainer />
    </div>
  );
};
