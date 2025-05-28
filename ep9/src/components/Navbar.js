import { useState } from "react";
const Navbar = ()=>{
    // let btnName = "Light"
    const [btnName,setBtnName] = useState("Light");
    console.log('navbar rendered')
    return (
        <div className="navbar">
            <h1>LOGO</h1>
            <ul className="menuitems">
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
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