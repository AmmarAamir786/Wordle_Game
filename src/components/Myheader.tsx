"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import chart from "@/assets/chart.svg";
import donut from "@/assets/donut 1.svg";
import setting from "@/assets/setting-2.svg";
import Mybutton from "@/components/Mybutton";
import { useState } from "react";
import MobNav from "./MobNav";

const Myheader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="lg:h-[70px] h-[50px] bg-white shadow border-b border-black border-opacity-10 flex justify-center items-center relative z-20">

      <nav className="flex justify-between items-center px-[30px] w-full mx-auto">

        <div>
          <Link href={"/"}>
            <Image
              src={donut}
              alt="donut"
              className="lg:w-[42px] lg:h-[42px] h-[34px] w-[34px]"
            ></Image>
          </Link>
        </div>

        <div className="flex justify-center items-center lg:gap-4 gap-[19px]">
          <Link href={"#howtoplay"}>
            <Image
              src={setting}
              alt="setting"
              className="lg:w-[36px] lg:h-[36px] h-[26px] w-[26px]"
            ></Image>
          </Link>
          <Link href={"#leaderboard"}>
            <Image
              src={chart}
              alt="chart"
              className="lg:w-[36px] lg:h-[36px] h-[26px] w-[26px]"
            ></Image>
          </Link>
          <div className="justify-center items-center hidden sm:flex lg:gap-4 gap-[19px]">
            <Mybutton text="New Game" style="hidden sm:flex" link="/"></Mybutton>
            <Mybutton text="Login" style="w-[68px] hidden sm:flex" link="/"></Mybutton>
          </div>

          <div className="flex justify-center items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none focus:text-black"
            >
              <svg
                className="w-[22px]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 14 14"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 2H.5m13 5H.5m13 5H.5"
                />
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <MobNav>
              <div className="flex flex-col w-full items-end gap-4">
                <svg
                  className="w-[24px] hover:cursor-pointer"
                  onClick={toggleMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <Mybutton text="New Game" link="/"></Mybutton>
                <Mybutton text="Login" style="w-[68px]" link="/"></Mybutton>
                <div className="w-full mx-auto h-px border border-black border-opacity-10"></div>
              </div>
            </MobNav>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Myheader;
