"use client";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import default_avt from "@/public/images/default-avatar.jpg"
import Image from "next/image";
export interface ICardCommentProps { }

export default function CardComment(props: ICardCommentProps) {
  const [showMore, setShowMore] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full flex gap-3 relative group text-xs md:text-sm text-start items-start">
      <div className="w-10 h-10 mt-1 border-b bg-[#ccc]">
        <Image
          className="w-full h-full object-cover"
          width={40}
          height={40}
          src={default_avt}
          alt=""
        />
      </div>
      <div className="w-[100%-40px] ">
        <h4 className="md:text-base text-sm font-extrabold text-start text-[#385898]  hover:underline cursor-pointer">
          Nguyễn Minh Quang
        </h4>
        {showMore ? (
          <div className="w-full text-start">
            <p className="font-medium">Truyện hay!</p>
            <ul className="flex md:text-[15px] text-[10px] items-center font-medium text-[#4267b2] ">
              <li className="hover:underline cursor-pointer">Thích</li>
              <span>
                <LuDot />
              </span>
              <li className="hover:underline cursor-pointer">Phản hồi</li>
              <span>
                <LuDot />
              </span>
              <li className="hover:underline cursor-pointer">
                Đánh dâu là span
              </li>
              <span>
                <LuDot />
              </span>
              <li className=" flex items-start gap-2">
                <button className=" md:w-5 md:h-5 w-4 h-4 p-1 rounded-full cursor-pointer  flex items-center mb-1 justify-center bg-gradient-to-t from-[#1A67F4] to-[#34a6fc] text-white">
                  <FaThumbsUp size={11} />
                </button>
                5
              </li>
              <span>
                <LuDot />
              </span>
              <li className="hover:underline cursor-pointer text-[#999] ">
                2 năm
              </li>
            </ul>
          </div>
        ) : (
          <span className="foint-semibold italic flex gap-1">
            <p> Bình luận này đã được thu gọn.</p>
            <button
              onClick={() => setShowMore(true)}
              className="text-[#385898] italic hover:underline"
            >
              Hoàn tác
            </button>
          </span>
        )}
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`absolute  top-0 right-2 ${showMenu ? "block" : "group-hover:block hidden"
          }`}
      >
        <IoIosArrowDown size={25} color="#999" />
      </button>
      {showMenu && (
        <div className="bg-white dark:bg-[#000] dark:border-transparent  flex flex-col py-1 text-xs absolute right-2 top-6 z-10 font-medium   border border-[#999] md:text-sm shadow-md rounded">
          <button
            onClick={() => {
              setShowMore(false), setShowMenu(false);
            }}
            className={`px-3 py-1 hover:text-white w-full text-start hover:bg-[#4267b2] ${!showMore && "hidden"
              }`}
          >
            Thu gọn bình luận
          </button>
          <button
            className={`px-3 py-1 hover:text-white w-full text-start hover:bg-[#4267b2] ${!showMore && "hidden"
              }`}
          >
            Đánh dấu là span
          </button>
          <button className="px-3 py-1 hover:text-white w-full text-start hover:bg-[#4267b2]">
            Báo cáo với FaceBook
          </button>
          <button className="px-3 py-1 hover:text-white w-full text-start hover:bg-[#4267b2]">
            Nhúng
          </button>
        </div>
      )}
    </div>
  );
}
