"use client";
import { IBook, ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import Link from "next/link";
import { ImFire } from "react-icons/im";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
import Image from "next/image";
import CardStoryHome from "../Cards/CardStoryHome";
import iconFull from "@/public/images/full-label.png";
import { useEffect, useState } from "react";
import axios from "axios";
export interface IListBookHotProps {
  booksHot: IBook[];
  categories: ICategory[];
}
export default function ListBookHot({
  booksHot,
  categories,
}: IListBookHotProps) {
  const [listBook, setListBook] = useState<IBook[]>(booksHot);
  const [categoryFilter, setCategoryFilter] = useState({ id: "", name: "" });
  useEffect(() => {
    const fetchBookByCategory = async () => {
      try {
        const res = await axios.get(
          `${DOMAIN}/api/client/books?limit=13&page=1&categories=${categoryFilter.id}`
        );
        setListBook(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBookByCategory();
  }, [categoryFilter]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="w-full dark:text-white dark:border-none  relative border-b border-[#ccc] flex items-center font-medium justify-between">
        <h2 className="flex gap-1 p-1 border-b border-[#333] dark:border-none md:pl-0 text-lg md:text-xl items-center">
          <Link href="">{"truyện hot".toUpperCase()}</Link>
          <ImFire />
        </h2>
        <select
          className="border-[1px] text-sm bg-transparent outline-none focus:border-[#26b7fe] border-[#333] mt-[5px]  p-1 py-2  w-[120px]"
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
      <div className="w-full md:grid-cols-5 flex  p-4 gap-5 lg:grid-cols-8">
        <div className="w-1/4 hidden lg:block aspect-[3/4] relative hover:scale-105 transition-all duration-300 ">
          <Link
            href={`/${convertToSlug(listBook[0].name)}-${convertToSlug(
              listBook[0]?._id
            )}.html`}
          >
            <Image
              className="w-full m-auto rounded h-full object-cover"
              width={300}
              height={400}
              src={`${DOMAIN}/api/books/${listBook[0]?.images[0]}`}
              alt=""
            />
          </Link>
          <h3 className="bg-[#333] line-clamp-1 rounded-b absolute w-full bottom-0 text-[10px] leading-3   md:text-xs font-medium  bg-opacity-70 left-0 text-white text-center py-[6px] text-wrap ">
            <Link
              href={`/${convertToSlug(listBook[0].name)}-${convertToSlug(
                listBook[0]?._id
              )}.html`}
            >
              {listBook[0]?.name}
            </Link>
          </h3>
          {listBook[0].status == 2 && (
            <Image
              className="lg:w-[50px] w-[40px] absolute -left-[6px] bottom-6 lg:bottom-0 z-10"
              src={iconFull}
              width={100}
              height={100}
              alt=""
            />
          )}
        </div>
        <div className="w-full lg:w-3/4 grid grid-cols-4 lg:grid-cols-6 gap-4">
          {listBook
            ?.slice(isLargeScreen ? 1 : 0, isLargeScreen ? undefined : -1)
            .map((book: IBook, index: number) => (
              <CardStoryHome key={index} book={book} />
            ))}
        </div>
      </div>
    </div>
  );
}
