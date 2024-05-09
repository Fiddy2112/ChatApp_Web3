import { createContext } from "react";
import "@rainbow-me/rainbowkit/styles.css";

import merge from "lodash.merge";

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  mainnet,
  sepolia,
  polygon,
  optimism,
  arbitrum,
  base,
} from "wagmi/chains";

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
  appName: "Custom Dex",
  projectId: "f2341821329860acaf128d6753106eb7",
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [sepolia, mainnet, polygon, optimism, arbitrum, base],
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

export const walletContext = createContext();

export const WalletProvider = ({ children }) => {
  return (
    <walletContext.Provider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={myTheme}>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </walletContext.Provider>
  );
};
