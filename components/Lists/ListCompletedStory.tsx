import Link from "next/link";
import * as React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CardCompletedStoryHome from "../Cards/CardCompletedStoryHome";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";

export interface IListComplatedProps {}

export default function ListCompletedStory({
  listBookComplete,
}: {
  listBookComplete: IBook[];
}) {
  return (
    <section className="w-full  mt-5">
      <div className="w-full   border-b dark:text-white border-[#ccc] dark:border-transparent flex items-center font-medium justify-between">
        <h4 className="text-lg md:text-xl flex items-center dark:border-transparent pb-2 border-b border-[#333] pl-1 md:pl-0">
          <Link href=""> {"Truyện đã hoàn thành".toUpperCase()}</Link>
          <IoIosArrowForward size={25} />
        </h4>
      </div>
      <div className="w-full gap-5 m-1 px-2 py-3 grid grid-cols-4 dark:bg-[#292929] rounded lg:grid-cols-8">
        {listBookComplete?.map((book, index) => (
          <Link key={index} href={`/${convertToSlug(book?.name)}-${convertToSlug(book?._id)}.html`}>
            {" "}
            <CardCompletedStoryHome book={book}/>
          </Link>
        ))}
      </div>
    </section>
  );
}
