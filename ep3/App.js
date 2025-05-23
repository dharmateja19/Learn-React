import React from "react";
import ReactDOM from "react-dom/client";
const age = 20;
const Comp1 = () =>{
    return (
        <>
            <h1>Dharma Teja</h1>
            <Comp3/>
        </>
    );
}
const Comp2 = () => <h1>Heading 1</h1>
const Comp3 = ()=> (
    <div className="head2">
        <Comp2/>
        <Comp2></Comp2>
        {Comp2()}
        <h2>Heading 2</h2>
    </div>
)
const jsxheading = (
    <div className="conatiner">
        <Comp1/>
        {age}
        <h1>I am heading from jsx with age {age}</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Comp1/>)
root.render(jsxheading)