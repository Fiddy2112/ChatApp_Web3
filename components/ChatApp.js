import React from "react";
import { useAccount } from "wagmi";

function ChatApp() {
  const account = useAccount();
  console.log(account);
  return <div>CHatApp</div>;
}

export default ChatApp;
