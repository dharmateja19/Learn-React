import React, { useState } from "react";
import ListItems from "./ListItems";

const Accordion = ({title,show,setShow}) => {
  const showItem = () =>{
    setShow(!show)
  }
  return (
    <div className="mt-5 w-60 shadow-md border border-gray-400 px-4 py-2">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <button onClick = {showItem} className="bg-black text-white px-2 rounded-md">Show</button>
      </div>
      {show && <ListItems/>}
    </div>
  );
};

export default Accordion;
