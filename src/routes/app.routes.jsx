import { Routes, Route } from "react-router-dom";
import { Error } from "../pages/Error";
import { App } from '../pages/Details/App'
import { Home } from "../pages/Home";
import { Signin } from "../pages/SignIn";
import {  Signup } from "../pages/SignUp";
import { Profile } from "../pages/Profile";
import { New } from "../pages/New";

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/home' element={ <Home/> }/>
            <Route path='/details' element={ <App/> }/>
            <Route path='/Signin' element={ <Signin/> }/>
            <Route path='/Signup' element={ <Signup/> }/>
            <Route path='/profile' element={ <Profile/> }/>
            <Route path='/new' element={ <New/> }/>
            <Route path='*' element={ <Error/> } />
        </Routes>
    )
}