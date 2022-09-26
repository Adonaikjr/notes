import { Routes, Route } from "react-router-dom";
import { Error } from "../pages/Error";
import { App } from '../pages/Details/App'
import { Home } from "../pages/Home";
export function AppRoutes(){
    return(
        <Routes>
            <Route path='/home' element={ <Home/> }/>
            <Route path='/details' element={ <App/> }/>
            <Route path='*' element={ <Error/> } />
        </Routes>
    )
}