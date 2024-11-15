"use client";
import { convertNumber } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
export interface IRootPaginationProps {
  page: any;
  limit: number;
  total: number;
}
export default function PaginationDesktop(props: IRootPaginationProps) {
  const { page, limit, total } = props;
  const pathName = usePathname();
  const totalPage = Math.ceil(total / Number(limit));
  const nextPage = page + 1 > totalPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  const renderPagination = () => {
    if (totalPage <= 10) {
      return Array.from({ length: totalPage }, (_, index) => (
        <Link href={`${pathName}/?page=${index + 1}`} key={index}>
          <button
            className={`flex items-center ${page === index + 1
              ? " dark:border-[#92bb35] text-white  bg-[#34495e] dark:bg-transparent dark:text-[#92bb35] "
              : " "
              } justify-center px-2 hover:text-white   border-transparent dark:hover:text-[#92bb35] dark:hover:border-[#92bb35] border hover:bg-[#34495e]
                              h-6 text-xs md:h-8 dark:hover:bg-transparent md:text-sm `}
          >
            {index + 1}
          </button>
        </Link>
      ));
    }
    let pages = [page];
    let results: string[] = [];
    const firstPages = [1, 2];
    const lastPages = [totalPage - 1, totalPage];
    let i = 1;
    const doneSides: string[] = [];

    while (pages.length < 7) {
      const left = page - i;
      if (left <= 0 || firstPages.includes(left)) {
        if (!doneSides.includes("left")) {
          const filter = pages.filter((item) => !firstPages.includes(item));
          pages = [...firstPages, ...filter];
          doneSides.push("left");
        }
      } else {
        pages = [left, ...pages];
      }

      const right = page + i;

      if (right > totalPage || lastPages.includes(right)) {
        if (!doneSides.includes("right")) {
          const filter = pages.filter((item) => !lastPages.includes(item));
          pages = [...filter, ...lastPages];
          doneSides.push("right");
        }
      } else {
        if (!pages.includes(right)) {
          pages = [...pages, right];
        }
      }
      i++;
    }

    results = pages.map((item) => item.toString());
    if (!doneSides.includes("left")) {
      results = [
        ...firstPages.map((item) => item.toString()),
        "...",
        ...pages.map((item) => item.toString()),
      ];
    }

    if (!doneSides.includes("right")) {
      results = [
        ...results.map((item) => item.toString()),
        "...",
        ...lastPages.map((item) => item.toString()),
      ];
    }
    return results.map((item, index) => {
      if (item == "...") {
        return (
          <li
            key={index}
            className={`flex px-2 h-6 text-xs md:h-8 md:text-sm  cursor-wait items-end    page-item text-primarySecond`}
          >
            {item}
          </li>
        );
      }
      return (
        <Link href={`${pathName}/?page=${item}`} key={index}>
          <button
            className={`flex items-center ${parseInt(item) == page
              ? " dark:border-[#92bb35] text-white  bg-[#34495e] dark:bg-transparent dark:text-[#92bb35] "
              : " "
              } justify-center px-2 hover:text-white text-start   border-transparent dark:hover:text-[#92bb35] dark:hover:border-[#92bb35] border hover:bg-[#34495e]
                              h-6 text-xs md:h-8 dark:hover:bg-transparent md:text-sm `}
          >
            {convertNumber(parseInt(item))}
          </button>
        </Link>
      );
    });
  };
  return (
    <div
      className={`w-max max-w-full m-auto mt-6 p-[1px] border border-[#999]  ${totalPage <= 1 && "hidden"}`}
      aria-label="Page navigation example"
    >
      <ul className="flex  dark:text-white text-[#34495e] text- items-center justify-start -space-x-px h-6 text-xs md:h-8 md:text-sm ">
        <Link className={`${page == 1 ? "hidden" : "block"}`} href={`?page=${1}`}>
          <li className="md:h-8  h-6 flex items-center hover:bg-[#34495e]  border-transparent  border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] hover:text-white justify-center w-max px-2 gap-1">
            <MdKeyboardDoubleArrowLeft />
            Đầu
          </li>
        </Link>
        <Link href={`${pathName}/?page=${prevPage ?? 1}`}>
          <li className="md:h-8  h-6 flex items-center hover:bg-[#34495e]  border-transparent  border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] hover:text-white justify-center w-8">
            <IoIosArrowBack />
          </li>
        </Link>

        {renderPagination()}
        <Link href={`page=${nextPage ?? 1}`}>
          <li
            className="md:h-8  h-6 flex items-center hover:bg-[#34495e]  border-transparent border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] hover:text-white justify-center w-8">

            <IoIosArrowForward />
          </li>
        </Link>
        <Link className={`${page == totalPage ? "hidden" : "block"}`} href={`${pathName}/?page=${totalPage}`}>
          <li className="md:h-8 h-6  flex items-center hover:bg-[#34495e] border-transparent  border dark:hover:border-[#92bb35] dark:hover:bg-transparent dark:hover:text-[#92bb35] hover:text-white justify-center w-max px-2 gap-1">
            Cuối <MdKeyboardDoubleArrowRight />
          </li>
        </Link>
      </ul>
    </div>
  );
}
