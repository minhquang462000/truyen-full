"use client";
import { ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdViewList } from "react-icons/md";

export interface IAppProps {
  wrapperRefCategory: any;
  setShowList: (showList: boolean) => void;
  showCategories: boolean;
  setShowCategories: (showCategories: boolean) => void;
  setShowClassifyChart: (showClassifyChart: boolean) => void;
  categories: ICategory[];
}

export default function PopUpCategoryHeader({
  wrapperRefCategory,
  categories,
  setShowList,
  showCategories,
  setShowCategories,
  setShowClassifyChart,
}: IAppProps) {
  return (
    <div
      ref={wrapperRefCategory}
      className="relative cursor-pointer h-full w-full  lg:w-max"
    >
      <div
        onClick={() => {
          setShowCategories(!showCategories),
            setShowList(false),
            setShowClassifyChart(false);
        }}
        className={`flex gap-[2px] p-3 py-2 lg:py-3 line-clamp-1  h-full  items-center ${showCategories && "bg-[#2f566d] border-b border-[#14425d]"
          }`}
      >
        <MdViewList size={22} />
        <p className="line-clamp-1">Thể loại</p>
        <IoMdArrowDropdown size={16} />
      </div>
      <ul
        className={` lg:pb-2 ${!showCategories && "hidden"
          } lg:w-[450px]  left-0 lg:absolute  top-[100%] lg:bg-[#2f566d] grid  grid-cols-3 z-20 `}
      >
        {categories?.map((category, index) => (
          <Link
            key={index}
            href={`/the-loai/${convertToSlug(category?.name)}-${category?._id
              }.html`}
          >
            <li
              className="p-2 lg:pl-4 pl-9  hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]"
            >

              {category?.name?.split(" ").slice(0, 2).join(" ")}
            </li>
            {" "}

          </Link>

        ))}
      </ul>
    </div>
  );
}
