import Image from "next/image";
import { Inter } from "next/font/google";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

// internal import
import { ChatApp, Header, Navbar } from "../components/index";
import { ChatAppContext } from "@/context/ChatAppContext";

export default function Home() {
  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      <Navbar />
      <ChatApp />
    </div>
  );
}
