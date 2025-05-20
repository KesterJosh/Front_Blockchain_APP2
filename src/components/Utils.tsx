"use client";

import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { BsCoin } from "react-icons/bs";
import { GiPodiumWinner } from "react-icons/gi";
import { motion } from "framer-motion";

// Dummy data interface
interface StatsData {
  totalPlayers: number;
  totalAmountWon: number;
  totalWinners: number;
}

const Utils = () => {
  // Dummy data
  const stats: StatsData = {
    totalPlayers: 1234,
    totalAmountWon: 56789,
    totalWinners: 789,
  };

  return (
    <div className="container">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1.5] }}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row justify-between gap-10 px-10 py-10 border border-[#3881AE] bg-[#1F204E] rounded-3xl"
      >
        <div className="flex gap-2 flex-col justify-center items-center text-center text-[#39F4F9]">
          <HiUserGroup className="text-6xl lg:text-7xl xl:text-8xl " />
          <div className="flex flex-col gap-1 justify-center items-center">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-500">
              {stats.totalPlayers}
            </h1>
            <p className="text-base lg:text-lg xl:text-xl text-white">
              Total Players
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-col justify-center items-center text-center text-[#39F4F9]">
          <BsCoin className="text-6xl lg:text-7xl xl:text-8xl " />
          <div className="flex flex-col gap-1 justify-center items-center">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-500">
              ${stats.totalAmountWon}
            </h1>
            <p className="text-base lg:text-lg xl:text-xl text-white">
              Total Amount Won
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-col justify-center items-center text-center text-[#39F4F9]">
          <GiPodiumWinner className="text-6xl lg:text-7xl xl:text-8xl " />
          <div className="flex flex-col gap-1 justify-center items-center">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-500">
              {stats.totalWinners}
            </h1>
            <p className="text-base lg:text-lg xl:text-xl text-white">
              Total Winners
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Utils;
