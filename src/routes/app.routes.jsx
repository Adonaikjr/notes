import { Routes, Route } from "react-router-dom";
import { Error } from "../pages/Error";
import { App } from '../pages/Details/App'
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { New } from "../pages/New";

export function AppRoutes(){
    
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/details/:id' element={ <App/> }/>
            <Route path='/profile' element={ <Profile/> }/>
            <Route path='/new' element={ <New/> }/>
            <Route path='/*' element={ <Error/> } />
        </Routes>
    )
}