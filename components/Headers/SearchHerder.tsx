"use client";
import { FaSearch } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { IBook } from "@/interfaces";
import axios from "axios";
import Link from "next/link";
import { convertToSlug } from "@/utils/converToSlug";
import { handleUpdateView } from "@/api/updateView";
import { useRouter } from "next/navigation";

export interface ISearchHeaderProps {}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function SearchHeader(props: ISearchHeaderProps) {
  const [keyWord, setKeyWord] = useState("");
  const [bookBySearch, setBookBySearch] = useState<IBook[]>([]);
  useEffect(() => {
    const fetchBookByCategory = async () => {
      try {
        const res = await axios.get(
          `${DOMAIN}/api/client/books?limit=5&page=1&name=${keyWord}`
        );
        setBookBySearch(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    if (keyWord.length > 2) {
      fetchBookByCategory();
    }
  }, [keyWord]);
  const router = useRouter();
  const handleSearch = async () => {
    if (bookBySearch.length > 0) {
      router.push(`/tim-kiem/${convertToSlug(keyWord)}`);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="w-full border-y relative text-[#333] lg:border-transparent border-white  p-3  lg:p-0">
      <div className="w-full flex justify-between items-center  bg-white dark:bg-[#1c242d] h-[32px]">
        <input
          placeholder="Tìm kiếm..."
          className="bg-transparent dark:text-white w-full p-2 px-3 h-full outline-none"
          type="text"
          value={keyWord}
          onKeyDown={handleKeyDown}
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <FaSearch className="dark:text-[#92bb35] dark:border dark:border-[#92bb35] w-10 p-2 h-full" />
      </div>
      <div
        className={`absolute ${
          keyWord.length < 3 && "hidden"
        } z-[99] lg:left-0 left-4 top-12 lg:top-9 `}
      >
        <div className="w-[270px]  dark:text-white text-sm dark:bg-[#1C242D] pt-2 shadow-md dark:border-[#333] dark:border-[1px] dark:shadow-transparent shadow-[#999] rounded bg-white ">
          {bookBySearch.length === 0 ? (
            <div className="w-7 h-7 border-[3px] m-auto  text-blue-400  animate-spin border-gray-300  border-t-blue-400 rounded-full" />
          ) : (
            <ul className="mt-2  max-h-[300px] overflow-y-auto">
              {bookBySearch?.map((book, index) => (
                <li
                  onClick={() => {
                    handleUpdateView(book._id);
                  }}
                  key={index}
                  className="p-2 hover:bg-[#f5f5f5] dark:hover:bg-[#000]  dark:border-[#333] border-b"
                >
                  <Link
                    href={`/${convertToSlug(book?.name)}-${book?._id}.html`}
                  >
                    {" "}
                    {book?.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={handleSearch}
            className="flex p-2 hover:bg-[#f5f5f5] dark:hover:bg-[#000] w-full  font-light italic gap-3 items-center"
          >
            Xem thêm kết quả khác
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
function handleSearch() {
  throw new Error("Function not implemented.");
}

