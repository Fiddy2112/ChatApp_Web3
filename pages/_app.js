import { ChatAppProvider } from "@/context/ChatAppContext";
import { WalletProvider } from "@/context/WalletProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <ChatAppProvider>
        <Component {...pageProps} />
      </ChatAppProvider>
    </WalletProvider>
  );
}
