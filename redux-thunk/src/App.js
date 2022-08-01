import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Login from "./components/login";
import Register from "./components/register";
import Members from "./components/members";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./components/notfound";
import AddMember from "./components/addMember";
import UpdateMember from "./components/updateMember";
import Users from "./components/users";
import UpdateUser from "./components/updateUser";
import AdminRegister from "./components/adminRegister";
import UserRegister from "./components/userRegister";
import Logout from "./components/logout";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/members" element={<Members />} />
        <Route path="/member/add" element={<AddMember />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/member/update/:id" element={<UpdateMember />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/update/:id" element={<UpdateUser />} />
        <Route path="/register/admin" element={<AdminRegister />} />
        <Route path="/register/user" element={<UserRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;