"use client";
import { useState } from "react";
import { IoIosListBox } from "react-icons/io";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export interface IButtonChangeChapterProps {}

export default function ButtonChangeChapter(props: IButtonChangeChapterProps) {
  const [showListChapter, setShowListChapter] = useState(false);
  return (
    <div className="flex justify-center gap-1 text-sm text-white items-center">
      <button className="h-10 md:h-12 w-[100px] md:w-[160px] flex justify-center rounded-l hover:bg-[#449d44] bg-[#5cb85c] border-[#4cae4c] items-center">
        <MdOutlineKeyboardArrowLeft size={25} />
        Trước
      </button>
      <button
        onClick={() => setShowListChapter(true)}
        className={`h-10 md:h-12 min-w-[60px]  flex px-1 justify-center hover:bg-[#449d44] bg-[#5cb85c] border-[#4cae4c] items-center`}
      >
        {showListChapter ? (
          <select
            className="w-[100px] md:w-[180px] px-3 outline-none h-full  text-white hover:bg-[#449d44] bg-[#5cb85c] "
            name=""
            id=""
          >
            <option value="">Chương 1</option>
            <option value="">Chương 2</option>
            <option value="">Chương 3</option>
          </select>
        ) : (
          <IoIosListBox size={20} />
        )}
      </button>
      <button className="h-10 md:h-12 w-[100px] md:w-[160px]  flex justify-center rounded-r  hover:bg-[#449d44] bg-[#5cb85c] border-[#4cae4c] items-center">
        Tiếp
        <MdOutlineKeyboardArrowRight size={25} />
      </button>
    </div>
  );
}
