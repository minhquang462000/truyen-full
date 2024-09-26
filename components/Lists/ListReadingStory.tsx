import Link from "next/link";
import * as React from "react";
import { IoIosArrowForward } from "react-icons/io";

export interface IListReadingStoryProps {}

export default function ListReadingStory(props: IListReadingStoryProps) {
  return (
    <div className="w-full text-sm   font-medium">
      <div className="w-full relative  border-b dark:border-none border-[#ccc] flex items-center font-medium justify-between">
        <h2 className="flex gap-1 dark:text-white lg:text-base text-xl dark:border-none pl-1 border-b border-[#333] md:pl-0 pb-2 items-center">
          <Link href=""> TRUYỆN ĐANG ĐỌC</Link>
        </h2>
      </div>
      <ul className="w-full flex dark:bg-[#2c2c2c] p-1  flex-col">
        <li className="flex w-full border-b border-dashed dark:border-none border-[#b8b8b8]">
          <span className="w-3/5 md:w-1/2 lg:w-3/5 overflow-hidden truncate border-r p-2 lg:px-0 flex items-center dark:border-none border-[#b8b8b8] border-dashed ">
            <IoIosArrowForward size={20} color="#8E8C8C" />
            <p className="hover:underline">
              {" "}
              <Link href={"/ten-truyen"}>Thế Giới Hoàn Mỹ</Link>
            </p>
          </span>
          <p className="w-2/5 p-2 md:w-1/2 lg:w-2/5 dark:text-[#A9CF54] text-[#31708f] ">
            <Link href={"/ten-truyen/ten-chap"}>Đọc tiếp C1</Link>
          </p>
        </li>
      </ul>
    </div>
  );
}
