"use client";
import Link from "next/link";
import { useState } from "react";
import CardComment from "../Cards/CardComment";

export interface IListCommentProps {}

export default function ListComment(props: IListCommentProps) {
  const [showBtnPost, setShowBtnPost] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full border-b dark:border-none border-[#ccc] flex items-end justify-between font-medium ">
        <h2 className="text-lg md:text-xl pb-2 dark:text-white dark:border-none border-b border-[#333] pl-1 md:pl-0">
          <Link href=""> {"Bình luận truyện".toUpperCase()}</Link>
        </h2>
      </div>
      <div className="w-full md:p-0 p-2 mt-5">
        <ul className="flex justify-between  items-center ">
          <li className="font-bold">127 bình luận</li>
          <li className="font-medium flex gap-2 items-center">
            Sắp xếp theo
            <select
              className="border border-[#333] dark:bg-[#000] p-1 rounded"
              name=""
              id=""
            >
              <option value="">Mới nhất</option>
              <option value="">Cũ nhất</option>
            </select>
          </li>
        </ul>
        <div className="w-full  flex border-[1px] dark:bg-[#08090A] dark:border-[#2d2d2d] pb-2 mt-[50px]  flex-col h-max items-end">
          <textarea
            onClick={() => setShowBtnPost(true)}
            className="w-full  h-[80px] py-2 px-3 dark:bg-[#000] dark:border-b dark:border-[#2d2d2d] dark:outline-none text-sm  font-medium md:text-xl"
            placeholder="Viết bình luận"
            name=""
            id=""
          ></textarea>
          <button
            className={`w-max bg-[#9cb4d8] dark:bg-[#385264] text-white dark:text-[#000] font-bold px-3 py-1 rounded mt-2 mr-3 border-[#9cb4d8] ${
              !showBtnPost && "hidden"
            }`}
          >
            Đăng nhập vào bài viết
          </button>
        </div>
        <div className="w-full mt-4   flex flex-col gap-3">
          <CardComment />
          <CardComment />
          <CardComment />
        </div>
      </div>
    </div>
  );
}
