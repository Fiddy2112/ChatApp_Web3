import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import merge from "lodash.merge";

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "Custom Dex",
  projectId: "f2341821329860acaf128d6753106eb7",
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/EQ9HzWHaYcZUOkmW9D03QWn7OnqRxAkQ"
    ),
  },
});

const queryClient = new QueryClient();

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={myTheme}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
