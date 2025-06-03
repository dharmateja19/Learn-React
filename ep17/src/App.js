import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.js";
import { ProductCard } from "./components/ProductCard.js";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Error from "./components/Error.js";
import Men from "./components/Men.js";
import Kid from "./components/Kid.js";
import ProductDetails from "./components/ProductDetails.js";
import About from "./components/About.js";
// import Grocery from "./components/Grocery.js"; // norrmal import na karke hum lazy me daalenge

const Grocery = lazy (()=>import("./components/Grocery.js"))
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
                path:"/about",
                element:<About/>
            },
            {
                path:"/men",
                element:<Men/>
            },
            {
                path:"/kid",
                element:<Kid/>
            },
            {
                path:"/products/:productId",
                element:<ProductDetails/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    }, 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);