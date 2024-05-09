import Image from "next/image";
import { Inter } from "next/font/google";
import { ChatApp, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

// internal import
import { ChatAppContext } from "@/context/ChatAppContext";
import { useContext } from "react";

export default function Home() {
  const { title } = useContext(ChatAppContext);
  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      {title}
      <ChatApp />
    </div>
  );
}
