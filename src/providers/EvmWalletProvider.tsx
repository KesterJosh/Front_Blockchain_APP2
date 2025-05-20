"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { useMemo, useState } from "react";

export const config = getDefaultConfig({
  appName: "NFT Mint",
  projectId: "972212d301dd6b263638025da37c2bf8",
  chains: [mainnet],
  // ssr: true,
});

const EvmWalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  const evmConfig = useMemo(
    () => ({
      chains: [mainnet],
      testnetChains: [],
      options: {
        appName: "Japaul Gold",
        walletConnectProjectId: "972212d301dd6b263638025da37c2bf8",
        modalSize: "compact" as const,
        initialChain: mainnet,
        showRecentTransactions: true,
      },
    }),
    []
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider {...evmConfig}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default EvmWalletProvider;
