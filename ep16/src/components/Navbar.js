import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    // let btnName = "Light"
    const [btnName,setBtnName] = useState("Light");
    // console.log('navbar rendered')
    useEffect(()=>{
        // console.log("useEffect Called");
    },[])
    return (
        <div className="navbar">
            <h1>LOGO</h1>
            <ul className="menuitems">
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/about"}>ABOUT</Link></li>
                <li><Link to="/men">MEN</Link></li>
                <li><Link to="/women">WOMEN</Link></li>
                <li><Link to="/kid">KIDS</Link></li>
                <li><Link to="/grocery">GROCERY</Link></li>
                <li>CART</li>
                <button onClick={()=>{
                    // btnName = "Dark"; // updates internally but not rendering in ui
                    // console.log(btnName);
                    setBtnName(btnName === "Light" ? "Dark": "Light") //btn name another copy created
                }}>{btnName}</button>
            </ul>
        </div>
    )
}
export default Navbar; // default export