import Application from "../components/application";
import NotFound from "../components/notfound";
import UpdateApplication from "../Screens/Dashboard/updateapplication";
import { Route, Routes, Navigate } from "react-router-dom";
import { ScreenName } from "./screenName";
import Login from "../Screens/Auth/login";
import Register from "../Screens/Auth/register";
import Admins from "../Screens/Dashboard/admins";
import AddAdmin from "../Screens/Dashboard/addAdmin";
import UpdateAdmin from "../Screens/Dashboard/updateAdmin";
import Members from "../Screens/Dashboard/members";
import AddMember from "../Screens/Dashboard/addMember";
import AddUser from "../Screens/Dashboard/addUser";
import UpdateUser from "../Screens/Dashboard/updateUser";
import Users from "../Screens/Dashboard/users";
import AdminRegister from "../Screens/Auth/adminRegister";
import UserRegister from "../Screens/Auth/userRegister";
import Logout from "../components/logout";
import Profile from "../components/profile";
import UpdateMember from "../Screens/Dashboard/updateMember";
import Home from "../Screens/Dashboard/home";

export const Nav = () => (
    <div >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admins" element={<Admins />} />
      <Route path="/admin/add" element={<AddAdmin />} />
      <Route path="/admin/update/:id" element={<UpdateAdmin />} />
      <Route path={ScreenName().HOME} element={<Navigate to="/" replace />} />
      <Route path={ScreenName().MEMBERS} element={<Members />} />
      <Route path={ScreenName().LOGIN_SCREEN} element={<Login />} />
      <Route path={ScreenName().REGISTER} element={<Register />} />
      <Route path={ScreenName().USERS} element={<Users />} />
      <Route path={ScreenName().LOGOUT} element={<Logout />} />
      <Route path={ScreenName().PROFILE} element={<Profile />} />
      <Route path="/member/add" element={<AddMember />} />
      <Route path="/member/update/:id" element={<UpdateMember />} />
      <Route path="/user/add" element={<AddUser />} />
      <Route path="/user/update/:id" element={<UpdateUser />} />
      <Route path="/register/admin" element={<AdminRegister />} />
      <Route path="/register/user" element={<UserRegister />} />
      <Route path="*" element={<NotFound />} />
     <Route path={ScreenName().APPLICATION_SCREEN} element={<Application />} />
     <Route path="/application/update/:id" element={<UpdateApplication />} />
    </Routes>
    </div>
);

export const navigate=(screenname,params)=>{
    this.props.navigate(screenname, params);
};