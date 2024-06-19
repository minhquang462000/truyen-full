'use client'

import { FaSearch } from "react-icons/fa";

export interface ISearchHeaderProps {
}

export default function SearchHeader (props: ISearchHeaderProps) {
  return (
      <div className="w-full border-y text-[#333] lg:border-none border-white p-3  lg:p-0">
          <div className="w-full flex justify-between items-center p-2 px-3 bg-white h-[32px]">
              <input placeholder="Tìm kiếm..." className="bg-transparent w-full h-full outline-none" type="text" ></input>
              <FaSearch />
          </div>
      </div>
  );
}
