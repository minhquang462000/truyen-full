"use client";
import MainHeaderDesktop from "../Headers/MainHeaderDesktop";
import MainHeader from "../Headers/MailHeaderMobile";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { IoMdHome } from "react-icons/io";

export interface IHiddenHeaderChapterProps {}

export default function HiddenHeaderChapter(props: IHiddenHeaderChapterProps) {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="relative">
      <div
        className={`${
          !showHeader
            ? "max-h-[1000px] visible  shadow-[#ccc] shadow-md delay-0"
            : "max-h-0 invisible"
        }  overflow-hidden duration-1000 transitionProperty-[max-height] ease-in-out`}
      >
        <MainHeader />
        <MainHeaderDesktop />
        <div className="w-full  bg-white p-2 py-1   text-sm ">
          <ul className="w-full   md:max-w-[750px]   m-auto lg:max-w-[1200px] flex  gap-2 items-center flex-wrap ">
            <li className="flex hover:underline font-semibold items-center gap-1">
              <IoMdHome /> Truyện
            </li>
            <li className='before:content-["/"] before:mr-1 hover:underline truncate overflow-hidden max-w-[300px] md:max-w-[700px] lg:max-w-[1150px] '>
              {" "}
              Truyện mới cập nhật asdas asdas asd asdd asd asd asd asd asd das
              asd asd asd asd
            </li>
          </ul>
        </div>
      </div>
      <div className="relative w-full md:max-w-[750px] lg:max-w-[1200px] m-auto">
        <button
          onClick={() => setShowHeader(!showHeader)}
          className="w-8 h-8 md:w-10 md:h-10 bg-[#5cb85c] border-[#4cae4c] opacity-40 hover:opacity-100 border rounded focus:outline-black text-white flex justify-center items-center absolute md:top-5 top-2 md:left-0 left-2"
        >
          <MdOutlineKeyboardArrowUp
            size={25}
            className={`${
              showHeader ? "rotate-180" : "rotate-0"
            } transition-all duration-1000`}
          />
        </button>
      </div>
    </div>
  );
}
