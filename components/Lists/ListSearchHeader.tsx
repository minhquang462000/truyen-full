import * as React from "react";
import { FaSearch } from "react-icons/fa";

export interface IListSearchHeaderProps {}

export default function ListSearchHeader(props: IListSearchHeaderProps) {
  return (
    <div className="w-[270px]  dark:text-white text-sm dark:bg-[#1C242D] pt-2 shadow-md dark:border-[#333] dark:border-[1px] dark:shadow-none shadow-[#999] rounded bg-white ">
      <div className="w-7 h-7 border-[3px] m-auto  text-blue-400  animate-spin border-gray-300  border-t-blue-400 rounded-full"></div>
      <ul className="mt-2  max-h-[300px] overflow-y-auto">
        <li className="p-2 hover:bg-[#f5f5f5] dark:hover:bg-[#000] cursor-pointer dark:border-[#333] border-b">
          Tứ Đại Công Chúa Tài Năng và Tứ Đại Công Tử Lạnh Lùng
        </li>
      </ul>
      <button className="flex p-2 hover:bg-[#f5f5f5] dark:hover:bg-[#000] w-full  font-light italic gap-3 items-center">
        Xem thêm kết quả khác
        <FaSearch />
      </button>
    </div>
  );
}

