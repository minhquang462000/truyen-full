"use client";

import { useState } from "react";
import { FaCommentAlt, FaFlag } from "react-icons/fa";
import ListComment from "../Lists/ListCommemt";

export interface ICommentChapterProps {}

export default function CommentChapter(props: ICommentChapterProps) {
  const [openListComment, setOpenListComment] = useState(false);
  return (
    <div className="w-full pb-4 ">
      <div className="flex gap-2  w-max m-auto text-white font-semibold">
        <button className="bg-[#f0ad4e] border dark:bg-[#121212] text-xs dark:text-[#eea236] dark:hover:bg-[#121212] border-[#eea236] hover:bg-[#EC971F] flex items-center rounded px-2 py-[6px] gap-1">
          {" "}
          <FaFlag />
          Báo lỗi chương
        </button>
        <button className="bg-[#5bc0de] border dark:bg-[#121212] text-xs dark:text-[#46b8da] dark:hover:bg-[#121212] border-[#46b8da] hover:bg-[#31B0D5] flex items-center rounded px-2 py-[6px] gap-1">
          <FaCommentAlt /> Bình luận
        </button>
      </div>
      <div className="border-[#2D9FD8] dark:border-[#6d6d6d] dark:bg-[#121212] border-[1px] hidden lg:block border-dashed w-[500px]  mx-auto my-[10px] rounded-md bg-[#d9edf7] text-center px-3 py-1 ">
        Bạn có thể dùng phím mũi tên hoặc WASD để lùi/sang chương.
      </div>
      <div className="md:w-2/3 dark:border-b border-[#000] m-auto">
        <ListComment />
      </div>
    </div>
  );
}
