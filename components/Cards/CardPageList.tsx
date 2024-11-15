"use client";
import { handleUpdateView } from "@/api/updateView";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { daysSinceRelease } from "@/utils/daysSinceRelease";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { IoListSharp } from "react-icons/io5";
export interface ICardPageListCategoryProps {
  book: IBook;
  index: number;
  category?: boolean;
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardPageList({
  book,
  index,
  category,
}: ICardPageListCategoryProps) {
  return (
    <div
      className={`w-full  py-5 ${
        (index + 1) % 2 !== 0 ? "dark:bg-[#282828]" : ""
      } flex text-xs md:text-sm   dark:text-[#b1b1b1] px-2 justify-between border-b dark:border-transparent md:gap-4 border-dashed border-[#7e7e7e] gap-2 text-[#4e4e4e]  items-center`}
    >
      <div className="lg:w-[200px] w-1/3 aspect-[2/0.9] lg:aspect-[2/1] border dark:border-white border-black ">
        <Image
          width={200}
          height={100}
          className="w-full p-1 h-full object-[center_-30px]   object-cover"
          src={`${DOMAIN}/api/books/${book?.images[0]}`}
          alt=""
        />
      </div>
      <div className=" lg:w-[calc(100%-200px)] w-2/3  font-semibold ">
        <div className=" table-cell  m-0 align-middle   ">
          <Link href={`/${convertToSlug(book?.name)}-${book?._id}.html`}>
            <h3
              onClick={() => handleUpdateView(book?._id)}
              className={`hover:underline m-0  text-[18px] inline  mb-[5px] font-content icon-book text-sm  lg:text-lg  font-bold  `}
            >
              {book?.name}
            </h3>
          </Link>
          <span
            className={`border   ml-2 mt-2  align-center px-1 py-[1px]  border-[#FD8383] text-[#FD8383] ${
              book?.views < 100 && "hidden"
            }`}
          >
            Hot
          </span>
          <span
            className={`ml-2 mt-2  align-center px-1 py-[1px]  border-[#86AD86] text-[#86AD86]
               ${daysSinceRelease(book?.createdAt) > 10 && "hidden"}`}
          >
            New
          </span>
          <span
            className={`border   ml-2 mt-2  align-center px-1 py-[1px]  border-[#8eb3fd] text-[#8eb3fd] ${
              book?.status !== 2 && "hidden"
            }`}
          >
            Full
          </span>
        </div>
        <ul
          className={`${
            category ? "block" : "hidden"
          } flex items-center  gap-1 my-1 italic  font-content   text-sm `}
        >
          <BiSolidCategoryAlt size={20} />
          {book?.categories?.map((item, index) => (
            <li className="hover:underline" key={index}>
              <Link
                href={`/the-loai/${convertToSlug(item?.name)}-${
                  item?._id
                }.html`}
              >
                {item?.name},
              </Link>
            </li>
          ))}
        </ul>
        <span
          className={`flex items-center my-1  hover:underline gap-2 italic  font-content   text-sm  ${
            category ? "hidden" : ""
          }`}
        >
          <FaPencilAlt />
          <Link
            href={`/tac-gia/${convertToSlug(book?.authors[0].name)}-${
              book?.authors[0]._id
            }.html`}
          >
            {book?.authors[0].name}
          </Link>
        </span>
        <span className="flex gap-2 items-center text-sm">
          <IoListSharp />
          {book?.totalChap} Chương
        </span>
      </div>
    </div>
  );
}
