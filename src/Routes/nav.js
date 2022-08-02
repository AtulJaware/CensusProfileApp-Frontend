//import logo from './logo.svg';
//import './App.css';
import Home from "../Screens/Auth/home";
import Application from "../components/application";
import NotFound from "../components/notfound";
import UpdateApplication from "../Screens/Dashboard/updateapplication";
import { Route, Routes, Navigate } from "react-router-dom";
import { ScreenName } from "./screenName";

export const Nav = () => (
    <div >
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Navigate to="/" replace />} />
    <Route path="/application" element={<Application />} />
    <Route path={ScreenName().APPLICATION_SCREEN} element={<Application />} />
    <Route path="/application/update/:id" element={<UpdateApplication />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
);

export const navigate=(screenname,params)=>{
    this.props.navigate(screenname, params);
};