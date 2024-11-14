"use client";
import { useCallback, useEffect, useState } from "react";
import ListRatingStory from "../Lists/ListRatingStory";
import { IBook } from "@/interfaces";
import axios from "axios";
export interface IAppProps {}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function ChangeListByRat({ books }: { books: IBook[] }) {
  const [activeRat, setActiveRat] = useState<string>("weekly");
  const [bookData, setBookData] = useState<IBook[]>(books);
  useEffect(() => {
    const fetchDataBookByRat = async () => {
      try {
        const res = await axios.get(
          `${DOMAIN}/api/client/books-views?key=${activeRat}`
        );
        setBookData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    if (activeRat !== null) {
      fetchDataBookByRat();
    }
  }, [activeRat]);
  const renderListByIndex = useCallback(() => {
    return <ListRatingStory books={bookData} />;
  }, [bookData]);
  return (
    <div className="w-full text-sm ">
      <div className="w-full relative dark:border-transparent  border-b border-[#ccc] flex items-center font-medium justify-between">
        <h2 className="flex  border-b border-[#333] dark:border-transparent dark:text-white pb-1 text-lg pl-1 md:pl-0  items-center">
          {" truyện đang hot".toUpperCase()}
        </h2>{" "}
      </div>
      <div className="flex w-full mt-4 text-[12px] font-semibold justify-center items-center gap-2">
        <button
          onClick={() => setActiveRat("weekly")}
          className={`border min-w-[60px] px-4  py-[6px] border-[#aaa]  rounded-full hover:bg-[#4e4e4e] hover:text-white ${
            activeRat === "weekly"
              ? "bg-[#4e4e4e] border-[#4e4e4e] text-white"
              : "text-[#4e4e4e] "
          }`}
        >
          NGÀY
        </button>
        <button
          onClick={() => setActiveRat("monthly")}
          className={`border min-w-[60px] px-4  py-[6px] border-[#aaa]  rounded-full hover:bg-[#4e4e4e] hover:text-white ${
            activeRat === "monthly"
              ? "bg-[#4e4e4e] border-[#4e4e4e] text-white"
              : "text-[#4e4e4e] "
          }`}
        >
          THÁNG
        </button>
        <button
          onClick={() => setActiveRat("")}
          className={`border min-w-[60px] px-4  py-[6px] border-[#aaa]  rounded-full hover:bg-[#4e4e4e]  hover:text-white ${
            activeRat === ""
              ? "bg-[#4e4e4e] border-[#4e4e4e] text-white"
              : "text-[#4e4e4e] "
          }`}
        >
          ALL TIME
        </button>
      </div>
      {renderListByIndex()}
    </div>
  );
}
