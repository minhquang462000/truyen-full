"use client";
import MainHeaderDesktop from "../Headers/MainHeaderDesktop";
import MainHeader from "../Headers/MailHeaderMobile";
import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { ICategory } from "@/interfaces";

export interface IHiddenHeaderChapterProps {}

export default function HiddenHeaderChapter({categories}: {categories: ICategory[]}) {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="w-full  ">
      <div
        className={` duration-700 transitionProperty-[max-height]  ${
          !showHeader
            ? "max-h-[1000px] visible relative  "
            : "max-h-[0px] invisible overflow-hidden "
        }`}
      >
        <MainHeader categories={categories}/>
        <MainHeaderDesktop categories={categories}/>
        <div className="w-full text-[#b1b1b1] bg-white dark:bg-[#2e3740] dark:shadow-transparent p-1  text-sm  shadow-md shadow-[#6d6d6d]">
          <ul className="w-full text-base  md:max-w-[750px]   m-auto lg:max-w-[1200px] flex  gap-2 items-center flex-wrap ">
            <li className="flex font-semibold items-center gap-1">
              <IoMdHome size={25} /> Truyện
            </li>
            <li className='before:content-["/"] before:mr-1'>
              {" "}
              Truyện mới cập nhật
            </li>
          </ul>
        </div>
      </div>
      <div className=" relative w-full md:max-w-[750px] lg:max-w-[1200px] m-auto">
        <button
          onClick={() => setShowHeader(!showHeader)}
          className="w-16 h-16 bg-[#5cb85c] border-[#4cae4c] dark:border-[#82A82D] dark:bg-opacity-50 dark:bg-[#000] dark:text-[#82A82D] opacity-40 hover:opacity-100 border rounded focus:outline-black text-white flex justify-center items-center absolute  top-10 md:left-0 left-2"
        >
          <MdOutlineKeyboardArrowUp
            size={45}
            className={`${
              showHeader ? "rotate-180" : "rotate-0"
            } transition-all duration-1000`}
          />
        </button>
      </div>
    </div>
  );
}
