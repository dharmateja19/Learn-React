import Accordion from "./Accordion";
import React, { useState } from "react";

const Men = () => {
  const [show, setShow] = useState(0);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-semibold text-xl">
        {
          ["Brand", "Mens", "Gender", "Kids"].map((title, index) => (
            // This is controlled component by Men
            <Accordion 
              key={index}
              title={title}
              show = {index === show ? true : false}
              setShow = {()=> setShow(index)}
            />
          ))
        }
      </h1>
    </div>
  );
};

export default Men;
