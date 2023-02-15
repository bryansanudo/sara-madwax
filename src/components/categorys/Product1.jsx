import React from "react";
import PageSection from "@/components/PageSection";
import { Link, useLocation } from "react-router-dom";
import { AiFillFire, AiFillExperiment } from "react-icons/ai";

import logoMdwx from "@/assets/logoMdwx.jpg";
import product1 from "@/assets/categorys/products1/product1.jpg";
import product2 from "@/assets/categorys/products1/product2.jpg";
import product3 from "@/assets/categorys/products1/product3.jpg";
import product4 from "@/assets/categorys/products1/product4.jpg";

import mx1 from "@/assets/categorys/mx1.mp4";
import mx2 from "@/assets/categorys/mx2.mp4";

const Product1 = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      code: "",
      brand: "@madwaxx_co",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      code: "",
      brand: "@madwaxx_co",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      code: "",
      brand: "@madwaxx_co",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      code: "",
      brand: "@madwaxx_co",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="Titulo Producto 1"
      subtitle={`
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Dignissimos sunt enim eum possimus, culpa veritatis hic aspernatur
    numquam ducimus exercitationem fuga nemo consequatur odit
    laudantium voluptate facilis veniam perferendis pariatur?`}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
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
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            {portfolios.map(({ id, src, code, category, brand }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-thGreen duration-200 hover:scale-105"
              >
                <a href={code} target="_blank" rel="noreferrer">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={src}
                      className="h-[330px] md:h-[500px]  w-full  object-cover "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg">
                      {category}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{brand}</p>
                  </div>
                </a>
              </div>
            ))}
            <div className="rounded-lg shadow-lg shadow-thGreen duration-200 hover:scale-105">
              <a href="" target="_blank" rel="noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={mx1}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    @madwaxx_co
                  </p>
                </div>
              </a>
            </div>
            <div className="rounded-lg shadow-lg shadow-thGreen duration-200 hover:scale-105">
              <a href="" target="_blank" rel="noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={mx2}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    @madwaxx_co
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Product1;
