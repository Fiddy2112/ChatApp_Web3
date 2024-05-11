import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

// internal import
import { ChatAppContext } from "@/context/ChatAppContext";
import { User, Mapping } from "./index";

function Modal({
  openBox,
  head,
  title,
  info,
  smallInfo,
  functionName,
  address,
  image,
}) {
  // use state
  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState("");

  // context
  const { loading } = useContext(ChatAppContext);
  return (
    <div className="container mx-auto mt-2 lg:mt-10 lg:px-0 px-2">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="mb-2 lg:w-[50%]">
          <Image src={image} alt="imgModal" width={700} height={700} />
        </div>
        <div className="lg:w-[50%]">
          <h1 className="text-xl flex flex-col lg:justify-start lg:items-start justify-center items-center lg:mb-2">
            {title}
            <br className="block lg:hidden" />
            <span className="text-5xl lg:text-6xl text-[#e67e22] lg:ml-7 uppercase lg:font-bold">
              {head}
            </span>
          </h1>
          <p className="text-justify">{info}</p>
          <small className="text-xl py-2">{smallInfo}</small>

          <div className="flex flex-col gap-4">
            <div className="flex lg:flex-row flex-col gap-4">
              {/* name */}
              <div className="w-full flex p-2 bg-[#fff]">
                <User />
                <input
                  className="pl-2 border-0 outline-none text-black"
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* account */}
              <div className="w-full flex p-2 bg-[#fff]">
                <Mapping />
                <input
                  className="pl-2 border-0 outline-none text-black"
                  type="text"
                  placeholder={address || "Enter address.."}
                  onChange={(e) => setAccountAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="flex lg:justify-normal lg:gap-3 justify-around">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={(e) => functionName({ name, accountAddress })}
              >
                Submit
              </button>

              <button
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={(e) => openBox(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
