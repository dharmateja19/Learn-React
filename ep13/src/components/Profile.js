import { useState } from "react";

const Profile = ({name,email})=>{
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(100);
    return (
        <div style={{
            "border":"2px solid red",
            "margin":"5px",
            "padding":"10px"
        }}>
            <h1>Using Functional Component</h1>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <button onClick={()=>{
                // count = count + 1 //not valid
                setCount(count+1)
                setCount2(count2-1)
            }}>Increment</button>
        </div>
    )
}
export default Profile;