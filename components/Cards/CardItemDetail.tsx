"use client";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ListChapterNewest from "../Lists/ListChapterNewest";
import { IBook } from "@/interfaces";
import Image from "next/image";
import { convertToSlug } from "@/utils/converToSlug";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardItemDetail({ bookData }: { bookData: IBook }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className=" p-4 grid md:grid-cols-3 md:gap-y-1 md:gap-x-5  ">
      <h3 className="text-xl text-center md:col-span-3 md:flex md:justify-end w-full md:text-2xl font-bold">
        <Link className="w-full md:w-2/3" href="">
          {bookData?.name}
        </Link>
      </h3>
      <div className="md:col-span-1 pt-2 w-full  lg:-translate-y-14  md:text-sm ">
        <div className="w-[220px] aspect-[2/3] image-detail relative lg:shadow-lg lg:shadow-[#666] lg:w-[85%]   my-2 m-auto ">
          <Image
            className="object-cover w-full h-full lg:border-[1px] lg:border-black lg:border-l-[5px]"
            src={` ${DOMAIN}/api/books/${bookData?.images[0]}`}
            alt=""
            width={220}
            height={400}
          />
        </div>
        <ul className="flex flex-col font-medium gap-2 pt-3 lg:px-1 lg:pt-8 lg border-r dark:border-dashed">
          <li className="flex items-center flex-wrap w-full ">
            <strong className="w-max  mr-2">Tác giả:</strong>
            <Link
              href={`/tac-gia/${convertToSlug(bookData?.authors[0].name)}-${
                bookData?.authors[0]._id
              }`}
              className="hover:underline  overflow-hidden"
            >
              {bookData?.authors[0].name}
            </Link>
          </li>
          <li className="flex items-center flex-wrap w-full ">
            <strong className="w-max inline mr-1">Thể loại:</strong>
            {bookData?.categories.map((category, index) => (
              <Link
                key={index}
                href={`/the-loai/${convertToSlug(category?.name)}-${
                  category?._id
                }.html`}
                className='hover:underline after:content-[","]'
              >
                {category?.name}
              </Link>
            ))}
          </li>
          <li className="flex items-center w-full gap-2">
            <strong className="w-max">Trạng thái :</strong>
            <span className=" text-[#428bca] dark:text-[#3c763d]">
              {bookData?.status == 0
                ? "Sắp ra mắt"
                : bookData?.status == 1
                ? "Đang ra"
                : "Hoàn thành"}
            </span>
          </li>
        </ul>
      </div>
      <div className="md:col-span-2 md:border-[#ccc] md:border-t pt-2 font-medium flex text-sm flex-col gap-1">
        <ul>
          <li className="flex items-center gap-1 w-max text-[#ccc] m-auto text-[20px]">
            <FaStar className="hover:text-[#efa500]" />
            <FaStar className="hover:text-[#efa500]" />
            <FaStar className="hover:text-[#efa500]" />
            <FaStar className="hover:text-[#efa500]" />
            <FaStar className="hover:text-[#efa500]" />
            <FaStar className="hover:text-[#efa500]" />
            <FaStar className="hover:text-[#efa500]" />
            <FaStar className="hover:text-[#efa500]" />
            <FaStar className="hover:text-[#efa500]" />
            <FaStar className="hover:text-[#efa500]" />
          </li>
          <li className="italic mt-2 flex gap-1 items-center w-max m-auto">
            <p>Đánh giá:</p>
            <strong>6.3</strong>
            <p>/10 từ</p>
            <strong>3 lượt</strong>
          </li>
        </ul>
        <p
          className={`whitespace-pre-wrap   mt-2  overflow-hidden ${
            showMore ? "" : "line-clamp-[10]"
          }`}
        >
          {bookData?.description.replace(/([.,!?])/g, "$1")}
        </p>
        <div className="w-full flex pr-4 md:p-0 justify-end">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`right-4 bottom-0 hover:shadow p-1 border rounded  flex items-center w-max mr-0 gap-1 py-[2px] ${
              showMore && "hidden"
            }`}
          >
            Xem thêm <MdKeyboardDoubleArrowRight />
          </button>
        </div>
        <ListChapterNewest />
      </div>
    </div>
  );
}
