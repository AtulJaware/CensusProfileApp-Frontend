//import logo from './logo.svg';
//import './App.css';
import Home from "../Screens/Auth/home";
import Application from "../components/application";
import NotFound from "../components/notfound";
import UpdateApplication from "../Screens/Dashboard/updateapplication";
import { Route, Routes, Navigate } from "react-router-dom";
import { ScreenName } from "./screenName";
import Login from "../Screens/Auth/login";
import Members from "../Screens/Dashboard/members";
import AddMember from "../Screens/Dashboard/addMember";
import UpdateMember from "../Screens/Dashboard/updateMember";
import UpdateUser from "../Screens/Dashboard/updateUser";
import Users from "../Screens/Dashboard/users";
import AdminRegister from "../Screens/Auth/adminRegister";
import UserRegister from "../Screens/Auth/userRegister";
import Logout from "../components/logout";
import Profile from "../components/profile";

export const Nav = () => (
    <div >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/members" element={<Members />} />
      <Route path="/member/add" element={<AddMember />} />
      <Route path={ScreenName().LOGIN_SCREEN} element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/member/update/:id" element={<UpdateMember />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/update/:id" element={<UpdateUser />} />
      <Route path="/register/admin" element={<AdminRegister />} />
      <Route path="/register/user" element={<UserRegister />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/application" element={<Application />} />
     <Route path={ScreenName().APPLICATION_SCREEN} element={<Application />} />
     <Route path="/application/update/:id" element={<UpdateApplication />} />
    </Routes>
    </div>
);

export const navigate=(screenname,params)=>{
    this.props.navigate(screenname, params);
};