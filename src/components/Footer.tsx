"use client";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-[#1F204E] py-12">
      <footer>
        <div className="container">
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-8">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <h4 className="text-[18px] text-[#39F4F9] uppercase font-medium mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:h-[2px] after:w-[50px]">
                COMPANY
              </h4>
              <ul className="list-none">
                <li
                  onClick={() => router.push("/")}
                  className="text-white text-base capitalize font-light block transition-all duration-300 ease-in-out cursor-pointer hover:text-[#39F4F9] hover:pl-2 mb-2.5"
                >
                  Privacy and Policy
                </li>
                <li
                  onClick={() => router.push("/")}
                  className="text-white text-base capitalize font-light block transition-all duration-300 ease-in-out cursor-pointer hover:text-[#39F4F9] hover:pl-2 mb-2.5"
                >
                  Terms and Conditions
                </li>
                <li className="text-white text-base capitalize font-light block transition-all duration-300 ease-in-out cursor-pointer hover:text-[#39F4F9] hover:pl-2 mb-2.5">
                  CodePeeps
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4  mb-8 md:mb-0">
              <h4 className="text-[18px] text-[#39F4F9] uppercase font-medium mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:h-[2px] after:w-[50px]">
                QUICK LINKS
              </h4>
              <ul className="list-none">
                <li
                  onClick={() => router.push("/")}
                  className="text-white text-base capitalize font-light block transition-all duration-300 ease-in-out cursor-pointer hover:text-[#39F4F9] hover:pl-2 mb-2.5"
                >
                  Home
                </li>
                <li
                  onClick={() => router.push("/")}
                  className="text-white text-base capitalize font-light block transition-all duration-300 ease-in-out cursor-pointer hover:text-[#39F4F9] hover:pl-2 mb-2.5"
                >
                  About Us
                </li>
                <li
                  onClick={() => router.push("/")}
                  className="text-white text-base capitalize font-light block transition-all duration-300 ease-in-out cursor-pointer hover:text-[#39F4F9] hover:pl-2 mb-2.5"
                >
                  My Transations
                </li>
                <li
                  onClick={() => router.push("/")}
                  className="text-white text-base capitalize font-light block transition-all duration-300 ease-in-out cursor-pointer hover:text-[#39F4F9] hover:pl-2 mb-2.5"
                >
                  Contact us
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4  mb-8 md:mb-0">
              <h4 className="text-[18px] text-[#39F4F9] uppercase font-medium mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:h-[2px] after:w-[50px]">
                GET HELP
              </h4>
              <ul className="list-none">
                <li
                  onClick={() => router.push("/")}
                  className="text-white text-base capitalize font-light block transition-all duration-300 ease-in-out cursor-pointer hover:text-[#39F4F9] hover:pl-2 mb-2.5"
                >
                  FAQ
                </li>
                <li
                  onClick={() => router.push("/")}
                  className="text-white text-base capitalize font-light block transition-all duration-300 ease-in-out cursor-pointer hover:text-[#39F4F9] hover:pl-2 mb-2.5"
                >
                  Contact us
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 ">
              <h4 className="text-[18px] text-[#39F4F9] uppercase font-medium mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:h-[2px] after:w-[50px]">
                FOLLOW US
              </h4>
              <div className="flex flex-wrap gap-2 ">
                <a
                  href="#"
                  target="_blank"
                  className="bg-[#3B5998] text-white p-[0.7rem] rounded-[0.7rem] flex items-center justify-center border border-transparent"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white p-[0.7rem] rounded-[0.7rem] flex items-center justify-center border border-transparent"
                >
                  <FiInstagram />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="bg-[#00ACEE] text-white p-[0.7rem] rounded-[0.7rem] flex items-center justify-center border border-transparent"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
