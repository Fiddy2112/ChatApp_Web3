import React, { useEffect, useState } from "react";
import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";

function Header() {
  const [installWallet, setInstallWallet] = useState(true);

  useEffect(() => {
    if (!window.ethereum) {
      setInstallWallet(false);
      console.log("Please install Metamask !");
    } else {
      setInstallWallet(true);
    }
  });
  return (
    <div className="flex items-center justify-between">
      <div>
        <a href="" className="no-underline text-4xl font-medium font-sans">
          CHAT APP
        </a>
      </div>
      <div className="px-4">
        {installWallet ? <ConnectButton /> : <WalletButton wallet="metamask" />}
      </div>
    </div>
  );
}

export default Header;
