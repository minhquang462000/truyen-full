import Link from "next/link";
import * as React from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropup,
} from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export interface IRootPanagationProps {}

export default function RootPagination(props: IRootPanagationProps) {
  return (
    <div className="w-max m-auto text-sm mt-6 flex items-center ">
      <Link
        href={""}
        className="h-8  flex items-center hover:bg-[#34495e] border-y-[1px] border-l-[1px] border-[#999] dark:hover:border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] hover:text-white justify-center w-max px-2 gap-1"
      >
        <MdKeyboardDoubleArrowLeft />
        Đầu
      </Link>
      <Link
        href={""}
        className="h-8  flex items-center hover:bg-[#34495e] border-y-[1px] border-[#999] dark:hover:border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] hover:text-white justify-center w-8"
      >
        <IoIosArrowBack />
      </Link>
      <Link
        href={""}
        className="h-8 flex items-center hover:bg-[#34495e] border-y-[1px] border-[#999] dark:hover:border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] hover:text-white justify-center w-8"
      >
        1
      </Link>
      <Link
        href={""}
        className="h-8  flex items-center hover:bg-[#34495e] border-y-[1px] border-[#999] dark:hover:border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] hover:text-white justify-center w-8"
      >
        <IoIosArrowForward />
      </Link>
      <Link
        href={""}
        className="h-8  flex items-center hover:bg-[#34495e] border-y-[1px] border-[#999] dark:hover:border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] hover:text-white justify-center w-max px-2 gap-1"
      >
        Cuối <MdKeyboardDoubleArrowRight />
      </Link>
      <button className="h-8  flex items-center hover:bg-[#34495e] border-y-[1px] border-r-[1px] border-[#999] dark:hover:border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] cursor-pointer hover:text-white justify-center w-max px-2 gap-1">
        Chọn trang <IoMdArrowDropup />
      </button>
    </div>
  );
}
