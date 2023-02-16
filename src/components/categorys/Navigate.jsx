import React from "react";
import { Link } from "react-router-dom";
import { AiFillFire, AiFillExperiment } from "react-icons/ai";

import logoMdwx from "@/assets/logoMdwx.jpg";

const Navigate = () => {
  return (
    <>
      <div className="flex  flex-col p-5 gap-5 items-center justify-center ">
        <Link to="/">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-thGreen hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoMdwx}
                alt="contact us"
                className="rounded-full object-cover w-9 h-9 shadow-lg shadow-thOrange   "
              />
              <AiFillFire size={40} className="text-thGreen" />
            </div>
            <p>Producto 1</p>
          </div>
        </Link>
        <Link to="/producto2">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-thGreen hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoMdwx}
                alt="contact us"
                className="rounded-full object-cover w-9 h-9 shadow-lg shadow-thOrange   "
              />
              <AiFillExperiment size={40} className="text-thGreen" />
            </div>
            <p>Producto 2</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navigate;
