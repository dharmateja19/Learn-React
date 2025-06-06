import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Navbar = ()=>{
    const [btnName,setBtnName] = useState("Light");
    const user = useContext(UserContext)
    
    return (
        <div className="flex justify-between px-10 py-5 shadow-sm">
            <h1 className="font-bold text-4xl">LOGO</h1>
            <ul className="flex justify-between w-[40%] px=10 py-5 ">
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/about"}>ABOUT</Link></li>
                <li><Link to="/men">MEN</Link></li>
                <li><Link to="/women">WOMEN</Link></li>
                <li><Link to="/kid">KIDS</Link></li>
                <li><Link to="/grocery">GROCERY</Link></li>
                <li>CART</li>
                <li>{user.name}</li>
                <button 
                className="bg-blue-700 px-4 py-2 rounded-md text-white"
                onClick={()=>{
                    // btnName = "Dark"; // updates internally but not rendering in ui
                    // console.log(btnName);
                    setBtnName(btnName === "Light" ? "Dark": "Light") //btn name another copy created
                }}>{btnName}</button>
            </ul>
        </div>
    )
}
export default Navbar; // default export