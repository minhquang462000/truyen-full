'use client';
import { handleUpdateView } from "@/api/updateView";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import Image from "next/image";
import Link from "next/link";

export interface ICardComplatedStpryHomeProps { }
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardCompletedStoryHome({ book }: { book: IBook }) {
  return (
    <div onClick={() => handleUpdateView(book._id)} className=" text-xs md:text-sm  w-full text-center">
      <Image
        className="w-full aspect-[2/3] border-[3px] border-black object-cover"
        width={150}
        height={200}
        src={`${DOMAIN}/api/books/${book.images[0]}`}
        alt=""
      />
      <p className="font-bold mt-2 lg:mt-1 w-full h-[45px] line-clamp-2 px-2 overflow-hidden text-center">
        {book?.name}
      </p>
      <span className="bg-[#2A5893] w-max text-white dark:text-[#A9CF54] dark:bg-transparent dark:border dark:border-[#A9CF54] font-bold text-[10px] md:text-xs px-1 py-[3px] rounded-sm ">
      {`  Full-${book?.totalChap || 0} chương`}
      </span>
    </div>
  );
}
