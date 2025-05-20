"use client";

import { motion } from "framer-motion";
import { FaEthereum } from "react-icons/fa";
import {
  SiBinance,
  SiBitcoinsv,
  SiChainlink,
  SiDogecoin,
  SiLitecoin,
} from "react-icons/si";
import Image from "next/image";
import images from "../../public/images";

const HeroArea = () => {
  return (
    <div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center pt-[70px] text-white"
      >
        <div className="max-w-[1170px] mx-auto px-4">
          <span className="flex justify-center items-center">
            <Image
              src={images.logoFull}
              alt="logo"
              width={260}
              height={70}
              className="self-center"
            />
          </span>

          <br />

          <p className="text-center text-[19px] font-['Poppins'] pb-[70px]">
            <b className="text-[25px]">
              Play, make money and win big with raffleDEFI
            </b>
            <br />
            The lucky winners are picked randomly using a decentralized system{" "}
            <br />
            Get paid instantly with transparency and accountability
          </p>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            <div
              className="h-full w-full flex justify-center items-center"
              style={{ perspective: "1000px", WebkitPerspective: "1000px" }}
            >
              <div
                className="h-[200px] w-[200px] relative animate-dice-rotate"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0 m-auto h-[150px] w-[150px] bg-gradient-to-br from-[#0093E9] to-[#80D0C7] border border-[#3881AE] flex items-center justify-center"
                  style={{ transform: "translateZ(75px)" }}
                >
                  <SiBinance className="text-[60px]" />
                </div>
                <div
                  className="absolute inset-0 m-auto h-[150px] w-[150px] bg-gradient-to-br from-[#0093E9] to-[#80D0C7] border border-[#3881AE] flex items-center justify-center"
                  style={{ transform: "translateZ(-75px)" }}
                >
                  <SiDogecoin className="text-[60px]" />
                </div>
                <div
                  className="absolute inset-0 m-auto h-[150px] w-[150px] bg-gradient-to-br from-[#0093E9] to-[#80D0C7] border border-[#3881AE] flex items-center justify-center right-[50px]"
                  style={{ transform: "rotateY(-90deg) translateZ(50px)" }}
                >
                  <FaEthereum className="text-[60px]" />
                </div>
                <div
                  className="absolute inset-0 m-auto h-[150px] w-[150px] bg-gradient-to-br from-[#0093E9] to-[#80D0C7] border border-[#3881AE] flex items-center justify-center left-[125px]"
                  style={{ transform: "rotateY(90deg) translateZ(-25px)" }}
                >
                  <SiBitcoinsv className="text-[60px]" />
                </div>
                <div
                  className="absolute inset-0 m-auto h-[150px] w-[150px] bg-gradient-to-br from-[#0093E9] to-[#80D0C7] border border-[#3881AE] flex items-center justify-center bottom-[125px]"
                  style={{ transform: "rotateX(90deg) translateZ(13px)" }}
                >
                  <SiChainlink className="text-[60px]" />
                </div>
                <div
                  className="absolute inset-0 m-auto h-[150px] w-[150px] bg-gradient-to-br from-[#0093E9] to-[#80D0C7] border border-[#3881AE] flex items-center justify-center top-[125px]"
                  style={{ transform: "rotateX(-90deg) translateZ(12px)" }}
                >
                  <SiLitecoin className="text-[60px]" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex justify-center items-center mt-20 mb-[90px]">
              <div>
                <a
                  href="#crypto-modal"
                  className="bg-[#1F204E] text-white px-[60px] py-[10px] border-2 border-[#39F4F9] rounded-[5px] font-['Poppins']"
                >
                  Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes dice-rotate {
          0% {
            transform: rotateX(45deg) rotateY(-45deg);
          }
          25% {
            transform: rotateX(-45deg) rotateY(-45deg);
          }
          50% {
            transform: rotateX(45deg) rotateY(45deg);
          }
          75% {
            transform: rotateX(-45deg) rotateY(45deg);
          }
          100% {
            transform: rotateX(45deg) rotateY(-45deg);
          }
        }

        :global(.animate-dice-rotate) {
          animation: dice-rotate 3.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroArea;
