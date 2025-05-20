"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Types
interface CalendarProps {
  className?: string;
  coin?: string;
  Name?: boolean;
}

interface LotteryData {
  id: string;
  title: string;
  startDate: string;
  duration: string;
  maxPlayers: string;
  playersEntered: number;
  status: string;
  winnings: number;
}

const Calendar: React.FC<CalendarProps> = ({ className, coin, Name }) => {
  const router = useRouter();

  // Dummy data
  const lotteryData: LotteryData[] = [
    {
      id: "polygon1",
      title: "POLYGON($1)",
      startDate: "15-03-2024 14:30",
      duration: "24HRS",
      maxPlayers: "UNLIMITED",
      playersEntered: 1234,
      status: "OPEN",
      winnings: 5678.9,
    },
    {
      id: "polygon2",
      title: "POLYGON($10)",
      startDate: "15-03-2024 15:30",
      duration: "24HRS",
      maxPlayers: "UNLIMITED",
      playersEntered: 567,
      status: "OPEN",
      winnings: 12345.67,
    },
    {
      id: "polygon3",
      title: "POLYGON($50)",
      startDate: "15-03-2024 16:30",
      duration: "24HRS",
      maxPlayers: "UNLIMITED",
      playersEntered: 234,
      status: "OPEN",
      winnings: 34567.89,
    },
    {
      id: "polygon4",
      title: "POLYGON($100)",
      startDate: "15-03-2024 17:30",
      duration: "12HRS",
      maxPlayers: "UNLIMITED",
      playersEntered: 123,
      status: "OPEN",
      winnings: 45678.9,
    },
    {
      id: "polygon5",
      title: "POLYGON($500)",
      startDate: "15-03-2024 18:30",
      duration: "12HRS",
      maxPlayers: "UNLIMITED",
      playersEntered: 45,
      status: "OPEN",
      winnings: 56789.01,
    },
    {
      id: "polygon6",
      title: "POLYGON($1000)",
      startDate: "15-03-2024 19:30",
      duration: "12HRS",
      maxPlayers: "UNLIMITED",
      playersEntered: 23,
      status: "OPEN",
      winnings: 67890.12,
    },
  ];

  const filteredData = coin
    ? lotteryData.filter((item) => item.id === coin)
    : lotteryData;

  return (
    <>
      {!className || className === "openState" ? (
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="container mx-auto mt-10"
        >
          {!Name && (
            <h1 className="text-4xl text-center text-white mb-4 sm:mb-8">
              Lottery Calendar
            </h1>
          )}

          <div className="w-full overflow-x-auto">
            {/* Table for md+ screens */}
            <table className="w-full border-collapse rounded-[15px] hidden md:table">
              <thead className="bg-[#39F4F9] text-black border border-[#39F4F9]">
                <tr>
                  <th className="text-sm font-semibold tracking-[0.35px] p-3 align-top">
                    BLOCKCHAIN
                  </th>
                  <th className="text-sm font-semibold tracking-[0.35px] p-3 align-top">
                    START DATE
                  </th>
                  <th className="text-sm font-semibold tracking-[0.35px] p-3 align-top">
                    DURATION
                  </th>
                  <th className="text-sm font-semibold tracking-[0.35px] p-3 align-top">
                    MAX PLAYERS
                  </th>
                  <th className="text-sm font-semibold tracking-[0.35px] p-3 align-top">
                    PLAYERS ENTERED
                  </th>
                  <th className="text-sm font-semibold tracking-[0.35px] p-3 align-top">
                    STATUS
                  </th>
                  <th className="text-sm font-semibold tracking-[0.35px] p-3 align-top">
                    WINNINGS
                  </th>
                  <th className="text-sm font-semibold tracking-[0.35px] p-3 align-top">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="md:table-row">
                    <td className="text-sm tracking-[0.35px] font-normal text-white bg-[#1F204E] p-4 text-center">
                      {item.title}
                    </td>
                    <td className="text-sm tracking-[0.35px] font-normal text-white bg-[#1F204E] p-4 text-center">
                      {item.startDate}
                    </td>
                    <td className="text-sm tracking-[0.35px] font-normal text-white bg-[#1F204E] p-4 text-center">
                      {item.duration}
                    </td>
                    <td className="text-sm tracking-[0.35px] font-normal text-white bg-[#1F204E] p-4 text-center">
                      {item.maxPlayers}
                    </td>
                    <td className="text-sm tracking-[0.35px] font-normal text-white bg-[#1F204E] p-4 text-center">
                      {item.playersEntered}
                    </td>
                    <td className="text-sm tracking-[0.35px] font-normal text-white bg-[#1F204E] p-4 text-center">
                      {item.status}
                    </td>
                    <td className="text-sm tracking-[0.35px] font-normal text-white bg-[#1F204E] p-4 text-center">
                      ${item.winnings.toFixed(2)}
                    </td>
                    <td className="text-sm tracking-[0.35px] font-normal text-white bg-[#1F204E] p-4 text-center">
                      <button
                        onClick={() => router.push(`/`)}
                        className="w-[130px] inline-block leading-[35px] font-medium text-center align-middle select-none text-[#39F4F9] border border-[#39F4F9] rounded-[5px] text-sm hover:bg-[#39F4F9] hover:text-white transition-colors"
                      >
                        ENTER
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Card layout for small screens */}
            <div className="flex flex-col gap-6 md:hidden mt-4">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1F204E] rounded-lg shadow p-4 flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center border-b border-[#39F4F9] pb-2 mb-2">
                    <span className="text-xs font-semibold text-[#39F4F9]">
                      BLOCKCHAIN
                    </span>
                    <span className="text-sm text-white">{item.title}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#39F4F9]">
                      START DATE
                    </span>
                    <span className="text-sm text-white">{item.startDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#39F4F9]">
                      DURATION
                    </span>
                    <span className="text-sm text-white">{item.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#39F4F9]">
                      MAX PLAYERS
                    </span>
                    <span className="text-sm text-white">
                      {item.maxPlayers}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#39F4F9]">
                      PLAYERS ENTERED
                    </span>
                    <span className="text-sm text-white">
                      {item.playersEntered}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#39F4F9]">
                      STATUS
                    </span>
                    <span className="text-sm text-white">{item.status}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#39F4F9]">
                      WINNINGS
                    </span>
                    <span className="text-sm text-white">
                      ${item.winnings.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => router.push(`/`)}
                      className="w-[110px] leading-[35px] font-medium text-center align-middle select-none text-[#39F4F9] border border-[#39F4F9] rounded-[5px] text-sm hover:bg-[#39F4F9] hover:text-white transition-colors"
                    >
                      ENTER
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default Calendar;
