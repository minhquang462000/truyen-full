'use client'
import { ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdViewList } from "react-icons/md";

export interface IAppProps {
    wrapperRefCategory: any,
    setShowList: (showList: boolean) => void,
    showCategories: boolean,
    setShowCategories: (showCategories: boolean) => void,
    setShowClassifyChart: (showClassifyChart: boolean) => void
    categories: ICategory[]
}

export default function PopUpCategoryHeader({ wrapperRefCategory, categories, setShowList, showCategories, setShowCategories, setShowClassifyChart }: IAppProps) {
    return (
        <div
            ref={wrapperRefCategory}
            className="relative cursor-pointer h-full w-full  lg:w-max"
        >
            <div
                onClick={() => {
                    setShowCategories(!showCategories),
                        setShowList(false),
                        setShowClassifyChart(false)
                }}
                className={`flex gap-[2px] p-3 py-2 lg:py-3  h-full  items-center ${showCategories && "bg-[#2f566d] border-b border-[#14425d]"
                    }`}
            >
                <MdViewList size={22} />
                Thể loại
                <IoMdArrowDropdown size={16} />
            </div>
            <ul
                className={`lg:py-2 ${!showCategories && "hidden"
                    } lg:w-[450px] left-0 lg:absolute  top-[100%] lg:bg-[#2f566d] grid  grid-cols-3 z-20 `}
            >
                {categories?.map((category, index) => (
                    <li
                        key={index}
                        className="p-2 lg:pl-4 pl-9 lg:max-w-[120px] hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]"
                    >
                        <Link href={`/the-loai/${convertToSlug(category?.name)}-${category?._id}.html`}>
                            {" "}
                            {category?.name?.split(" ").slice(0, 2).join(" ")}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
