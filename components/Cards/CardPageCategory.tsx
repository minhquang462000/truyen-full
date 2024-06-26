import Link from "next/link";
export interface ICardPageCategoryProps {}

export default function CardPageCategory(props: ICardPageCategoryProps) {
  return (
    <div className="w-full dark:bg-[#2b2b2b] flex text-xs md:text-sm md:py-1 pt-1 dark:text-[#b1b1b1] px-2 justify-between border-t dark:border-none md:gap-4 border-dashed border-[#ccc] gap-2 text-[#4e4e4e]  items-center">
      <Link className="w-[25%] md:h-[75px] " href={""}>
        <img
          className="w-full  h-full   object-cover"
          src="https://lh3.googleusercontent.com/pw/AP1GczNiG_xTkYcgHpfg596JzAiukXWEUnpXNjog0B3aTbNhPaErprQntAdZmxPxvUKuKodsBg_qpWdDf6Zg7hToqncivR-M2d1X3J-Hs6qHdqrNEsNRDTy0Q2nr2N_4hSCFNJQAYp-5XfjbhOeUoGFEpft7=w180-h80-c"
          alt=""
        />
      </Link>
      <div className=" w-[65%]   ">
        <div className=" table-cell  m-0 align-middle   ">
          <Link href={""}>
            <h3
              className={`hover:underline m-0  text-[18px] inline  mb-[5px] font-content icon-book text-lg  font-bold  `}
            >
              Nữ Đế Chấn Kinh: Ta Sư Tôn Hắn Không Phải Bại Hoại Sao
            </h3>
          </Link>
          <span className="border   ml-[5px]  align-super px-1 py-[1px]  border-[#FD8383] text-[#FD8383]">
            Hot
          </span>
          <span className="border   ml-[5px]  align-super px-1 py-[1px]  border-[#86AD86] text-[#86AD86]">
            New
          </span>
          <span className="border   ml-[5px]  align-super px-1 py-[1px]  border-[#8eb3fd] text-[#8eb3fd]">
            Full
          </span>
          <span className="icon-pencil -mt-1 block italic font-medium font-content   text-sm ">
            <Link href={""}>Tên Tác Giả</Link>
          </span>
        </div>
      </div>
      <span className="w-[20%]">
        <Link href={""}>
          {" "}
          <p className="text-[#31708f] hover:underline  before:content-['C'] md:before:content-['Chương'] md:before:mr-1 text-base font-medium dark:text-[#A9CF54] text-start pl-5">
            3500
          </p>
        </Link>
      </span>
    </div>
  );
}
