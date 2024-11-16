import Link from "next/link";
import * as React from "react";
import imgFooter from "@/public/images/88x31.png";
import ButtonBackToTopPage from "../Functions/ButtonBackToTopPage";
import Image from "next/image";
import { ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";

export interface IMainFooterProps {}

export default function MainFooter({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <footer className="w-full border-t dark:border-transparent text-xs p-3 z-40 dark:bg-[#121212] bg-[#f8f8f8] shadow  text-[#4E4E4E]">
      <div className="w-full  flex flex-col relative gap-5 md:max-w-[750px] m-auto lg:max-w-[1200px] ">
        <h2 className="text-center w-full text-xl font-bold">
          Liên hệ: <Link href="">contact@truyenfull.vn</Link>
        </h2>
        <div className="w-full md:flex gap-5  lg:gap-10  ">
          <p className=" w-full md:w-2/5 font-medium">
            <strong> Truyện Full</strong> - Đọc truyện online, đọc truyện chữ,
            truyện hay. Website luôn cập nhật những bộ truyện mới thuộc các thể
            loại đặc sắc như truyện tiên hiệp, truyện kiếm hiệp, hay truyện ngôn
            tình một cách nhanh nhất. Hỗ trợ mọi thiết bị như di động và máy
            tính bảng.
          </p>
          <div className="hidden w-3/5 md:block ">
            <ul className="flex gap-2 flex-wrap">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="border rounded px-2 bg-[#f3f3f3] dark:bg-transparent dark:hover:border-[#A9CF54] dark:hover:text-[#A9CF54] py-1"
                >
                  <Link
                    href={`/the-loai/${convertToSlug(item?.name)}-${
                      item?._id
                    }.html`}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="m-auto md:absolute right-0 top-2">
          <ButtonBackToTopPage />
        </div>
        <Image
          width={88}
          height={31}
          className="w-max"
          src={imgFooter}
          alt=""
        />
        <p>
          Website hoạt động dưới Giấy phép truy cập mở{" "}
          <Link className="hover:underline" href="">
            Creative Commons Attribution 4.0
          </Link>{" "}
          International License
        </p>
      </div>
    </footer>
  );
}
