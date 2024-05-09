import Navbar from "../components/NavBar";
import { ChatAppProvider } from "@/context/ChatAppContext";
import { WalletProvider } from "@/context/WalletProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <ChatAppProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChatAppProvider>
    </WalletProvider>
  );
}
