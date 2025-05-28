import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.js";
import { ProductCard } from "./components/ProductCard.js";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Error from "./components/Error.js";
import Men from "./components/Men.js";
import Kid from "./components/Kid.js";

const App = ()=>{
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<ProductCard/>
            },
            {
                path:"/men",
                element:<Men/>
            },
            {
                path:"/kid",
                element:<Kid/>
            }
        ],
        errorElement:<Error/>
    }, 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);