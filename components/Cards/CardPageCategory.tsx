import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.css';
export interface ICardPageCategoryProps {}

export default function CardPageCategory(props: ICardPageCategoryProps) {
  return (
    <div className="w-full dark:bg-[#2b2b2b] flex text-xs md:text-sm md:py-2 pt-1 dark:text-[#b1b1b1] px-2 justify-between border-t dark:border-none md:gap-4 border-dashed border-[#ccc] gap-2 text-[#4e4e4e]  items-center">
      <Link className="w-[25%]   lg:w-[20%]   " href={""}>
        <img
          className="w-full  h-full   object-cover"
          src="https://lh3.googleusercontent.com/pw/AP1GczNiG_xTkYcgHpfg596JzAiukXWEUnpXNjog0B3aTbNhPaErprQntAdZmxPxvUKuKodsBg_qpWdDf6Zg7hToqncivR-M2d1X3J-Hs6qHdqrNEsNRDTy0Q2nr2N_4hSCFNJQAYp-5XfjbhOeUoGFEpft7=w180-h80-c"
          alt=""
        />
      </Link>
      <div className=" w-[55%] p-1 ">
        <div className=" table-cell m-0 align-middle  ">
          <h3
            className={`hover:underline m-0  text-[18px] inline  leading-3  mb-[5px] font-content icon-book text-lg md:text-xl  font-bold  `}
          >
            <Link className="font-sans text-[#4e4e4e]" href={""}>
              {" "}
              Nữ Đế Chấn Kinh: Ta Sư Tôn Hắn Không Phải Bại Hoại Sao
            </Link>
          </h3>
          <span className="border   ml-[5px] align-bottom px-1 py-[1px] border-[#FD8383] text-[#FD8383]">
            Hot
          </span>
          <span className="border   ml-[5px] align-bottom px-1 py-[1px] border-[#86AD86] text-[#86AD86]">
            New
          </span>
          <span className="border   ml-[5px] align-bottom px-1 py-[1px] border-[#8eb3fd] text-[#8eb3fd]">
            Full
          </span>
          <span className="icon-pencil block italic font-medium font-content md:text-lg mt-1 text-base ">
            <Link
              className="font-sans text-[#4e4e4e] hover:text-[#4e4e4e]"
              href={""}
            >
              Tên Tác Giả
            </Link>
          </span>
        </div>
      </div>
      <span className="text-[#31708f] hover:underline w-[20%] text-lg font-medium dark:text-[#A9CF54] text-center">
        <Link href={""}> C3500</Link>
      </span>
    </div>
  );
}
