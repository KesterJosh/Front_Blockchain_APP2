"use client";

import React from "react";
import { motion } from "framer-motion";

const Cta: React.FC = () => {
  return (
    <motion.div
      className=" bg-[#1F204E] py-10 sm:py-20"
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col justify-center items-center text-white font-500 text-center">
        <p className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-xl sm:text-2xl mb-6 sm:mb-8">
          You could be the next winner. Take the bold step and stand a chance to
          win big
        </p>
        <div className="flex justify-center items-center ">
          <a
            href="#heroarea"
            className="text-black px-[60px] py-[10px] rounded-[15px] bg-[#39F4F9] font-medium text-lg hover:bg-[#2ad3d6] transition-colors"
          >
            Play Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Cta;
