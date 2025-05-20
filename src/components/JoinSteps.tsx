"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiWallet } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";

interface StepData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const JoinSteps: React.FC = () => {
  const steps: StepData[] = [
    {
      icon: <BiWallet className="text-5xl text-white" />,
      title: "Connect Wallet",
      description:
        "Connect your Wallet by using any of the wallet provider at the top",
    },
    {
      icon: <BsCoin className="text-5xl text-white" />,
      title: "Select the Raffle type",
      description:
        "Select any of the available crypto currencies and their various prices to play with",
    },
    {
      icon: <AiOutlinePlayCircle className="text-5xl text-white" />,
      title: "Enter the Raffle",
      description: "Confirm your transaction and enter the raffle",
    },
    {
      icon: <MdTimer className="text-5xl text-white" />,
      title: "Wait and Win",
      description: "Wait for the Raffle time to end and receive your reward",
    },
  ];

  return (
    <div className="text-white py-10 sm:py-20">
      <div className="text-center px-[30px]">
        <h1 className="text-[35px] sm:text-[40px] mb-4">
          It&apos;s Easy to Join and get rewards
        </h1>
        <p className="text-[20px] sm:text-[30px]">
          You get to make money on the blockchain with Raffledefi
          <br /> With the following steps
        </p>
      </div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-5"
      >
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="flex flex-col items-center p-5">
              <div className="flex justify-center">
                <div className="flex justify-center bg-[#1F204E] h-[150px] w-[150px] mb-[50px] rounded-full items-center border-2 border-[#39F4F9]">
                  {step.icon}
                </div>
              </div>
              <div className="text-center text-white font-['Poppins']">
                <h2 className="text-[25px] mb-2">{step.title}</h2>
                <p className="text-[16px]">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center absolute right-[-30px] top-1/2 transform -translate-y-1/2">
                <BsArrowReturnRight className="text-[60px] text-[#39F4F9]" />
              </div>
            )}
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-10">
        <div className="w-4/5 h-[1px] bg-gray-500" />
      </div>
    </div>
  );
};

export default JoinSteps;
