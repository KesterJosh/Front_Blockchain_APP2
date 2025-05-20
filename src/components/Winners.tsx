"use client";

import { motion } from "framer-motion";
import { FaEthereum } from "react-icons/fa";

interface Winner {
  playerAddress: string;
  amount: string;
  timestamp: number;
}

const dummyWinners: Winner[] = [
  {
    playerAddress: "0x12345abcdef67890",
    amount: "100.00",
    timestamp: 1710000000,
  },
  {
    playerAddress: "0x54321fedcba09876",
    amount: "50.00",
    timestamp: 1710100000,
  },
  {
    playerAddress: "0x54321fedcba09876",
    amount: "50.00",
    timestamp: 1710100000,
  },
  {
    playerAddress: "0x54321fedcba09876",
    amount: "50.00",
    timestamp: 1710100000,
  },
  {
    playerAddress: "0x54321fedcba09876",
    amount: "50.00",
    timestamp: 1710100000,
  },
  {
    playerAddress: "0x12345abcdef67890",
    amount: "100.00",
    timestamp: 1710000000,
  },
  {
    playerAddress: "0x54321fedcba09876",
    amount: "50.00",
    timestamp: 1710100000,
  },
  {
    playerAddress: "0x54321fedcba09876",
    amount: "50.00",
    timestamp: 1710100000,
  },
  {
    playerAddress: "0x54321fedcba09876",
    amount: "50.00",
    timestamp: 1710100000,
  },
  {
    playerAddress: "0x54321fedcba09876",
    amount: "50.00",
    timestamp: 1710100000,
  },
];

const Winners: React.FC = () => {
  return (
    <motion.div
      className="text-white py-10 sm:py-20 container "
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-[30px] sm:text-[40px] text-left sm:text-left font-semibold">
        Recent Winners
      </h1>
      <div className="w-full flex max-sm:justify-center mb-8">
        {/* <div className="overflow-x-auto">
          <table className="min-w-max border-collapse rounded-2xl border-2 border-[#39F4F9]">
            <thead className="bg-[#1F204E] border-2 border-[#39F4F9]">
              <tr>
                {tabOptions.map((tab) => (
                  <th
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`text-[13px] sm:text-[14px] font-semibold tracking-[0.35px] px-4 py-2 sm:py-3 cursor-pointer border border-[#121341] transition-colors ${
                      activeTab === tab.key
                        ? "bg-[#39F4F9] text-black"
                        : "text-white bg-[#1F204E]"
                    }`}
                  >
                    {tab.label}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {dummyWinners.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-row border border-[#39F4F9] bg-[#1F204E] p-5 gap-3 rounded-xl items-center"
          >
            <span className="flex justify-center items-center w-12 h-12 rounded-full border border-[#39F4F9] bg-[#39F4F9] mr-2">
              <FaEthereum className="text-white text-2xl" />
            </span>
            <div className="flex flex-col justify-evenly">
              <p className="text-[16px] text-left font-medium">
                {item.playerAddress.slice(0, 5)}...
                {item.playerAddress.slice(-4)}
              </p>
              <p className="text-gray-400 text-[14px] text-left">
                {new Date(item.timestamp * 1000).toDateString()}
              </p>
              <p className="text-[#39F4F9] text-xl text-left font-bold">
                {item.amount} USD
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Winners;
