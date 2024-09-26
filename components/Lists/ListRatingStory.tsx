import Link from "next/link";
import * as React from "react";

export interface IListRatingStoryProps {}

export default function ListRatingStory(props: IListRatingStoryProps) {
  return (
    <ul className="w-full mt-4 flex   flex-col">
      <li className="border-b border-[#ccc] dark:border-none dark:bg-[#292929] p-2 flex gap-3 items-center border-dashed">
        <span className="w-9 h-9 font-semibold bg-[#e74c3c]  text-white border-[#e74c3c] rounded-full flex items-center justify-center">
          1
        </span>
        <div className="w-[100%-36px]">
          <p className="w-full overflow-hidden text-[#083767]  dark:text-[#92bb35] font-medium hover:underline truncate">
            <Link href="/truyen">Thần Đạo Ma Tôn</Link>
          </p>
          <span className="flex text-sm w-full overflow-hidden truncate  items-center">
            <Link className="hover:underline" href="/the-loai/ten-the-loai">
              Tiên hiệp,
            </Link>
            <Link className="hover:underline" href="/the-loai/ten-the-loai">
              Huyễn huyền
            </Link>
          </span>
        </div>
      </li>
      <li className="border-b border-[#ccc] dark:border-none dark:bg-[#292929] p-2 flex gap-3 items-center border-dashed">
        <span className="w-9 h-9 font-semibold bg-[#5eb949] text-white border-[#5eb949] rounded-full flex items-center justify-center">
          2
        </span>
        <span className="w-[100%-36px]">
          <p className="w-full overflow-hidden text-[#083767]  dark:text-[#92bb35] font-medium hover:underline truncate">
          <Link href="/truyen">Thần Đạo Ma Tôn</Link>
          </p>
          <span className="flex text-sm w-full overflow-hidden truncate  items-center">
            <Link className="hover:underline" href="">
              Tiên hiệp,
            </Link>
            <Link className="hover:underline" href="">
              Huyễn huyền
            </Link>
          </span>
        </span>
      </li>
      <li className="border-b border-[#ccc] dark:border-none dark:bg-[#292929] p-2 flex gap-3 items-center border-dashed">
        <span className="w-9 h-9 font-semibold bg-[#5cabb8] text-white border-[#5cabb8] rounded-full flex items-center justify-center">
          3
        </span>
        <span className="w-[100%-36px]">
          <p className="w-full overflow-hidden text-[#083767]  dark:text-[#92bb35] font-medium hover:underline truncate">
            <Link href="">Thần Đạo Ma Tôn</Link>
          </p>
          <span className="flex text-sm w-full overflow-hidden truncate  items-center">
            <Link className="hover:underline" href="">
              Tiên hiệp,
            </Link>
            <Link className="hover:underline" href="">
              Huyễn huyền
            </Link>
          </span>
        </span>
      </li>
      <li className="border-b border-[#ccc] dark:border-none dark:bg-[#292929] p-2 flex gap-3 items-center border-dashed">
        <span className="w-9 h-9 font-semibold bg-transparent text-[#4e4e4e] dark:text-white border-[#cbcbcb] border rounded-full flex items-center justify-center">
          4
        </span>
        <span className="w-[100%-36px]">
          <p className="w-full overflow-hidden text-[#083767]  dark:text-[#92bb35] font-medium hover:underline truncate">
            <Link href="">Thần Đạo Ma Tôn</Link>
          </p>
          <span className="flex text-sm w-full overflow-hidden truncate  items-center">
            <Link className="hover:underline" href="">
              Tiên hiệp,
            </Link>
            <Link className="hover:underline" href="">
              Huyễn huyền
            </Link>
          </span>
        </span>
      </li>
    </ul>
  );
}
