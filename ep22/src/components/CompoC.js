import React,{useContext} from "react";
import UserContext from "../utils/UserContext";

const CompoC = () => {
  const user = useContext(UserContext)
  console.log(user);
  
  return (
    <div className="border border-black">
      <h1>CompoC</h1>
      <p>Name : {user.name}</p>
    </div>
  );
};

export default CompoC;
