"use client";
import { IBook, ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { timeFormat } from "@/utils/getTimeDifference";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export interface IListNewUpdateStoryProps {}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function ListNewUpdateStory({
  bookNewUpdate,
  categories,
}: {
  bookNewUpdate: IBook[];
  categories: ICategory[];
}) {
  const [listBook, setListBook] = useState<IBook[]>(bookNewUpdate);
  const [categoryFilter, setCategoryFilter] = useState({ id: "", name: "" });
  useEffect(() => {
    const fetchBookByCategory = async () => {
      try {
        const res = await axios.get(
          `${DOMAIN}/api/client/books?limit=25&page=1&categories=${categoryFilter.id}`
        );
        setListBook(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBookByCategory();
  }, [categoryFilter]);
  return (
    <div className="w-full lg:text-base  font-medium">
      <div className="w-full relative dark:border-none  border-b border-[#ccc] flex items-center font-medium justify-between">
        <h4 className="flex dark:text-white  text-lg md:text-xl dark:border-none  pl-1 border-b border-[#333] py-2 md:pl-0  items-center">
          <Link href="/the-loai/ten-the-loai"> TRUYỆN MỚI CẬP NHẬT</Link>
          <IoIosArrowForward size={20} />
        </h4>
        <select
          className="border-[1px] mr-2 lg:mr-0 text-sm bg-transparent outline-none focus:border-[#26b7fe] border-[#333] mt-[5px]  p-1 py-2  w-[120px]"
          name="categoryFilter"
          onChange={(e) => {
            const selectedOption = e.target.options[e.target.selectedIndex];
            const categoryName = selectedOption.text;
            setCategoryFilter({
              id: e.target.value,
              name: categoryName,
            });
          }}
          id=""
        >
          <option value="">TẤT CẢ</option>
          {categories.map((category, index) => (
            <option key={index} value={category?._id}>
              {category?.name}
            </option>
          ))}
        </select>
      </div>
      <ul className="w-full flex mt-2   flex-col">
        {listBook?.map((book, index) => {
          // const dayCurrent = daysSinceRelease(book.updatedAt);
          return (
            <li
              key={index}
              className="flex w-full text-sm border-b border-dashed dark:border-none dark:bg-[#292929] border-[#b8b8b8]"
            >
              <div className="lg:w-1/2 w-3/4 flex justify-between overflow-hidden truncate border-r p-2  gap-1 items-center border-[#b8b8b8] dark:border-none border-dashed ">
                <span className="flex w-full items-center">
                  <IoIosArrowForward size={20} color="#8E8C8C" />
                  <p className="hover:underline lg:text-base text-sm w-3/4 md:w-[250px] overflow-hidden truncate">
                    <Link
                      href={`/${convertToSlug(book.name)}-${convertToSlug(
                        book._id
                      )}.html`}
                    >
                      {book?.name}
                    </Link>
                  </p>
                </span>
                <ul className="md:flex gap-2 hidden   text-sm">
                  <li className="border rounded px-1 border-[#FD8383] text-[#FD8383]">
                    Hot
                  </li>
                  <li className="border rounded px-1 border-[#86AD86] text-[#86AD86]">
                    New
                  </li>
                  <li
                    className={`border rounded px-1 border-[#8eb3fd] text-[#8eb3fd] ${
                      book?.status === 2 ? "" : "hidden"
                    }`}
                  >
                    Full
                  </li>
                </ul>
              </div>
              <span className="hidden w-1/4 lg:w-1/5 line-clamp-1 md:block border-r border-dashed p-2 md:px-4 dark:border-none border-[#b8b8b8] overflow-hidden truncate">
                {categoryFilter.id === "" ? (
                  book?.categories.map((category, index) => (
                    <Link
                      key={index}
                      className="hover:underline mr-1"
                      href={`/the-loai/${convertToSlug(category.name)}-${
                        category._id
                      }.html`}
                    >
                      {category.name}
                      {index < book.categories.length - 1 && ","}
                    </Link>
                  ))
                ) : (
                  <Link
                    href={`/the-loai/${convertToSlug(
                      categoryFilter?.name
                    )}-${convertToSlug(categoryFilter?.id)}.html`}
                  >
                    {categoryFilter?.name}
                  </Link>
                )}
              </span>
              <p className="lg:w-max w-1/4 text-end p-2 border-r border-dashed hover:underline md:px-4 dark:border-none border-[#b8b8b8] dark:text-[#A9CF54] text-[#31708f]">
                <Link href={"/ten-truyen/ten-chap"}>Chương 46</Link>
              </p>
              <p className="hidden lg:block p-2 md:px-4 w-max">
                {timeFormat(book?.updatedAt)} truước
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
