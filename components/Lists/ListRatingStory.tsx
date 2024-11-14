import { handleUpdateView } from "@/api/updateView";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import Link from "next/link";
import * as React from "react";

export interface IListRatingStoryProps { }

export default function ListRatingStory({ books }: { books: IBook[] }) {
  return (
    <ul className="w-full mt-4 flex   flex-col">
      {books?.map((book, index) => (
        <li
          key={index}
          className="border-b  border-[#ccc] dark:border-none dark:bg-[#292929] p-2 flex gap-3 items-center border-dashed"
        >
          <span
            className={`w-7 h-7 text-xs font-semibold 
             ${index === 0
                ? "bg-[#e74c3c] text-white border-[#e74c3c]"
                : index === 1
                  ? "bg-[#5eb949] text-white border-[#5eb949]"
                  : index === 2
                    ? "bg-[#5cabb8] text-white  border-[#5cabb8]"
                    : "text-[#4e4e4e] border  border-[#4e4e4e]"
              } 
               rounded-full flex items-center justify-center`}
          >
            {index + 1}
          </span>
          <div className="w-[100%-32px]">
            <p className=" overflow-hidden text-[#083767] lg:w-[220px] font-semibold dark:text-[#92bb35]  hover:underline truncate">
              <Link href="/truyen">{book?.name}</Link>
            </p>
            <span
              onClick={() => { handleUpdateView(book?._id) }}
              className={`flex text-xs  lg:w-[220px] overflow-hidden truncate  items-center`}
            >
              {book?.categories?.map((category, index) => (
                <Link
                  key={index}
                  className={`hover:underline mr-1 after:content-[","] `}
                  href={`/the-loai/${convertToSlug(category?.name)}-${category?._id
                    }.html`}
                >
                  {category?.name}
                </Link>
              ))}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
