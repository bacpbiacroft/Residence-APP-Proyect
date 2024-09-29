import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Add from "./pages/user/Add";
import Edit from "./pages/user/Edit";
import Users from "./pages/user/Users";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users/:id" element={<Users />} />
          <Route path="/add-user" element={<Add />} />
          <Route path="/edit-user/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
