import Link from "next/link";
import * as React from "react";
import { IoIosArrowForward } from "react-icons/io";

export interface IListNewUpdateStoryProps {}

export default function ListNewUpdateStory(props: IListNewUpdateStoryProps) {
  return (
    <div className="w-full lg:text-base  font-medium">
      <div className="w-full relative dark:border-none  border-b border-[#ccc] flex items-center font-medium justify-between">
        <h2 className="flex dark:text-white  dark:border-none text-lg pl-1 border-b border-[#333] py-2 md:pl-0  items-center">
          <Link href="/the-loai/ten-the-loai"> TRUYỆN MỚI CẬP NHẬT</Link>
          <IoIosArrowForward size={25} />
        </h2>
        <select
          className="border-[1px] text-sm bg-transparent outline-none focus:border-[#26b7fe] border-[#333] mt-[5px]  p-1 py-2  w-[120px]"
          name=""
          id=""
        >
          <option value="">TẤT CẢ</option>
        </select>
      </div>
      <ul className="w-full flex   flex-col">
        <li className="flex w-full border-b border-dashed dark:border-none dark:bg-[#292929] border-[#b8b8b8]">
          <span className="w-3/4 md:w-1/2 lg:w-2/5 overflow-hidden truncate border-r p-2 flex gap-1 items-center  border-[#b8b8b8] dark:border-none border-dashed ">
            <span className="flex items-center">
              <IoIosArrowForward size={20} color="#8E8C8C" />
              <p className="hover:underline">
                {" "}
                <Link href={"/ten-truyen"}>Thế Giới Hoàn Mỹ</Link>
              </p>
            </span>
            <span className="border rounded px-1 border-[#FD8383] text-[#FD8383]">
              Hot
            </span>
            <span className="border rounded px-1 border-[#86AD86] text-[#86AD86]">
              New
            </span>
            <span className="border rounded px-1 border-[#8eb3fd] text-[#8eb3fd]">
              Full
            </span>
          </span>
          <div className="hidden w-1/4 lg:w-1/5 md:block border-r border-dashed p-2 md:px-4 dark:border-none border-[#b8b8b8] overflow-hidden truncate">
            <Link className="hover:underline" href={"/the-loai/ten-the-loai"}>
              Đam Mỹ,
            </Link>
          </div>
          <p className="w-1/4 p-2  border-r border-dashed hover:underline md:px-4 dark:border-none  border-[#b8b8b8] dark:text-[#A9CF54] text-[#31708f] ">
            <Link href={"/ten-truyen/ten-chap"}>Chương 46</Link>
          </p>
          <p className=" hidden lg:block p-2 md:px-4 w-1/5">2 giờ trước</p>
        </li>
      </ul>
    </div>
  );
}
