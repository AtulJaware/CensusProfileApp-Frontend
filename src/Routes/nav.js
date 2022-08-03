import { Route, Routes, Navigate } from "react-router-dom";
import { ScreenName } from "./screenName";
import Home from "../Screens/Dashboard/home";
import Login from "../Screens/Auth/login";
import Register from "../Screens/Auth/register";
import Members from "../Screens/Dashboard/members";
import NotFound from "../components/notfound";
import AddMember from "../Screens/Dashboard/addMember";
import AddUser from "../Screens/Dashboard/addUser";
import UpdateMember from "../Screens/Dashboard/updateMember";
import UpdateUser from "../Screens/Dashboard/updateUser";
import Users from "../Screens/Dashboard/users";
import AdminRegister from "../Screens/Auth/adminRegister";
import UserRegister from "../Screens/Auth/userRegister";
import Logout from "../components/logout";
import Profile from "../components/profile";

export const Nav = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/members" element={<Members />} />
      <Route path="/member/add" element={<AddMember />} />
      <Route path="/user/add" element={<AddUser />} />
      <Route path={ScreenName().LOGIN_SCREEN} element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/member/update/:id" element={<UpdateMember />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/update/:id" element={<UpdateUser />} />
      <Route path="/register/admin" element={<AdminRegister />} />
      <Route path="/register/user" element={<UserRegister />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
export const navigate = (screenname, params) => {
  this.props.navigate(screenname, params);
};
