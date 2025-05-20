"use client";

import { useMemo } from "react";
import images from "../../public/images";
import Image from "next/image";
import { IoSettingsSharp } from "react-icons/io5";
import { useAccount, useChainId, useDisconnect } from "wagmi";
import { mainnet } from "wagmi/chains";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const WalletButtons = () => {
  const { openConnectModal } = useConnectModal();
  const { disconnect } = useDisconnect();

  // Ethereum wallet connection
  const { address: ethAddress, isConnected: isEthConnected } = useAccount();
  const chainId = useChainId();

  const isWrongNetwork = useMemo(() => {
    if (isEthConnected) {
      return chainId !== mainnet.id;
    }
    return false;
  }, [isEthConnected, chainId]);

  const walletInfo = useMemo(() => {
    if (isEthConnected) {
      return {
        address: ethAddress,
        connected: isEthConnected,
      };
    }
    return {
      address: null,
      connected: false,
    };
  }, [isEthConnected, ethAddress]);

  const handleDisconnect = async () => {
    disconnect();

    // Try to clear wallet connection at the provider level
    try {
      // For MetaMask and EIP-1193 compliant wallets
      if (window.ethereum && window.ethereum.request) {
        // This explicitly asks the wallet to forget permissions
        await window.ethereum.request({
          method: "wallet_revokePermissions",
          params: [{ eth_accounts: {} }],
        });

        console.log("Successfully revoked wallet permissions");

        // Reset connection state (this forces a fresh connect next time)
        if (window.localStorage) {
          // Clear any wagmi connection info
          Object.keys(window.localStorage)
            .filter((key) => key.startsWith("wagmi") || key.includes("wallet"))
            .forEach((key) => window.localStorage.removeItem(key));
        }
      }
    } catch (error) {
      console.error("Error clearing wallet connection:", error);
    }
  };

  const shortenAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div>
      {walletInfo.connected ? (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {}}
            className={`flex items-center gap-2 px-6 py-2.5 text-center rounded-full text-white border ${
              isWrongNetwork ? "border-red-500 bg-red-50" : "border-[#E6E6E6] "
            }`}
          >
            <span className="relative w-5 xs:w-6 h-5 xs:h-6 rounded-full">
              <Image
                src={images.avatar}
                alt="avatar"
                fill
                className="w-fit h-fit rounded-full object-cover"
              />
            </span>
            <span>
              {isWrongNetwork
                ? "Wrong Network"
                : shortenAddress(walletInfo.address as string)}
            </span>
          </button>

          <button
            onClick={handleDisconnect}
            className="flex items-center justify-center p-2.5 text-center rounded-full text-black dark:text-white border border-[#E6E6E6] "
          >
            <IoSettingsSharp className="text-lg xs:text-xl" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            openConnectModal?.();
          }}
          className="px-6 py-2.5 text-center rounded-full text-white border border-white"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletButtons;
