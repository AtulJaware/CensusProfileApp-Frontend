import Application from "../components/application";
import NotFound from "../components/notfound";
import UpdateApplication from "../Screens/Dashboard/updateapplication";
import { Route, Routes, Navigate } from "react-router-dom";
import { ScreenName } from "./screenName";
import Login from "../Screens/Auth/login";
import Members from "../Screens/Dashboard/members";
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
    <div >
    <Routes>
      <Route path={ScreenName().HOME} element={<Navigate to="/" replace />} />
      <Route path={ScreenName().MEMBERS} element={<Members />} />
      <Route path={ScreenName().LOGIN_SCREEN} element={<Login />} />
      <Route path={ScreenName().REGISTER} element={<Register />} />
      <Route path={ScreenName().USERS} element={<Users />} />
      <Route path={ScreenName().LOGOUT} element={<Logout />} />
      <Route path={ScreenName().PROFILE} element={<Profile />} />
      <Route path="/member/add" element={<AddMember />} />
      <Route path="/user/add" element={<AddUser />} />
      <Route path="/member/update/:id" element={<UpdateMember />} />
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