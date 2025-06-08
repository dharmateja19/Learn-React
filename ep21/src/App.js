import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.js";
import { ProductCard } from "./components/ProductCard.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import Men from "./components/Men.js";
import Kid from "./components/Kid.js";
import ProductDetails from "./components/ProductDetails.js";
import About from "./components/About.js";
import CompoA from "./components/CompoA.js";
import UserContext from "./utils/UserContext.js";
import {Provider} from "react-redux"
import appstore from "./store/store.js";
import Cart from "./components/Cart.js";
// import Grocery from "./components/Grocery.js"; // norrmal import na karke hum lazy me daalenge

const Grocery = lazy(() => import("./components/Grocery.js"));
const App = () => {
  const [userName, setUserName] = useState("Dharma");

  return (
    <Provider store={appstore}>
      <UserContext.Provider value={{name : userName ,setUserName}}>
        <div>
          <Navbar />
          {/* <CompoA/> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/kid",
        element: <Kid />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
