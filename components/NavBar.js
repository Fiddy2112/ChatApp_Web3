import React, { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// internal import
import { ChatAppContext } from "@/context/ChatAppContext";
import { Bar, Close, Modal, Error } from "./index";
import heroImg from "/public/hero.png";

function Navbar() {
  const menuItems = [
    {
      menu: "All Users",
      link: "alluser",
    },
    {
      menu: "Chat",
      link: "/",
    },
    {
      menu: "Contact",
      link: "/",
    },
    {
      menu: "Settings",
      link: "/",
    },
    {
      menu: "Faqs",
      link: "/",
    },
    {
      menu: "Terms of Service",
      link: "/",
    },
  ];

  const menuRef = useRef();
  // use state
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { account, userName, createAccount, connectWallet } =
    useContext(ChatAppContext);

  useEffect(() => {
    // Add event listener
    const clickListener = (e) => {
      // Check if the user clicked outside of the menu
      if (!e.composedPath().includes(menuRef.current)) {
        // Close the menu
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", clickListener);

    // Don't forget to clean up the event listener
    return () => {
      window.removeEventListener("mousedown", clickListener);
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="">
        {/* desktop */}
        <div className="hidden lg:flex items-center justify-center gap-10">
          {menuItems.map((item, i) => (
            <div
              className={`${active == i + 1 ? " btn" : ""}`}
              onClick={() => setActive(i + 1)}
              key={i + 1}
            >
              <Link className="hover:text-[#e67e22]" href={item.link}>
                {item.menu}
              </Link>
            </div>
          ))}
        </div>

        {/* mobile */}
        <div className="lg:hidden flex items-center justify-between py-2 border-b border-b-[rgba(231,231,233,0.9)] ">
          <div className=" pl-2">
            <a href="" className="no-underline text-4xl font-medium font-sans">
              CHAT APP
            </a>
          </div>
          <div className="relative pr-2" onClick={() => setOpen(!open)}>
            {open ? <Close onClick={() => setOpen(false)} /> : <Bar />}
            {open && (
              <>
                <div className="w-full"></div>
                <div
                  className="absolute right-0 w-64 h-screen top-[42px] bg-[#1A1A1A] p-2 shadow-lg"
                  ref={menuRef}
                >
                  <div className="">
                    {menuItems.map((item, i) => (
                      <div
                        className={`${active == i + 1 ? " btn" : ""}`}
                        onClick={() => setActive(i + 1)}
                        key={i + 1}
                      >
                        <Link
                          className="w-full block p-2 hover:bg-[#dfdfdf] hover:text-black"
                          href={item.link}
                        >
                          {item.menu}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* modal */}
      {openModal && (
        <div>
          <Modal
            openBox={setOpenModal}
            title="Welcome to"
            head="Chat App"
            info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
            smallInfo="Select your name..."
            functionName={createAccount}
            image={heroImg}
            address={account}
          />
        </div>
      )}
      {}
    </div>
  );
}

export default Navbar;
