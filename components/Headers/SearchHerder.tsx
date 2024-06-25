"use client";

import { FaSearch } from "react-icons/fa";
import ListSearchHeader from "../Lists/ListSearchHeader";

export interface ISearchHeaderProps {}

export default function SearchHeader(props: ISearchHeaderProps) {
  return (
    <div className="w-full border-y relative text-[#333] lg:border-none border-white  p-3  lg:p-0">
      <div className="w-full flex justify-between items-center  bg-white dark:bg-[#1c242d] h-[32px]">
        <input
          placeholder="Tìm kiếm..."
          className="bg-transparent w-full p-2 px-3 h-full outline-none"
          type="text"
        ></input>
        <FaSearch className="dark:text-[#92bb35] dark:border dark:border-[#92bb35] w-10 p-2 h-full" />
      </div>
      <div className="absolute z-[99] lg:left-0 left-4 top-12 lg:top-9">
        <ListSearchHeader />
      </div>
    </div>
  );
}
