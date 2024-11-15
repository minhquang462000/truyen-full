'use client'
import { ICategory } from "@/interfaces";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdViewList } from "react-icons/md";

export interface IAppProps {
    wrapperRefClassifyChart: any,
    setShowList: (showList: boolean) => void,
    showClassifyChart: boolean,
    setShowCategories: (showCategories: boolean) => void,
    setShowClassifyChart: (showClassifyChart: boolean) => void
}

export default function PoUpClassifyCharHeader({ wrapperRefClassifyChart, setShowList, showClassifyChart, setShowCategories, setShowClassifyChart }: IAppProps) {
    return (
        <div
            ref={wrapperRefClassifyChart}
            className="relative cursor-pointer h-full w-full  lg:w-max"
        >
            <div
                onClick={() => {
                    setShowClassifyChart(!showClassifyChart),
                        setShowCategories(false),
                        setShowList(false)
                }}
                className={`flex gap-[2px] p-3 py-2 lg:py-3   h-full  items-center ${showClassifyChart && "bg-[#2f566d] border-b border-[#14425d]"
                    }`}
            >
                <MdViewList size={22} />
                <p className="line-clamp-1"> Phân loại theo Chương</p>
                <IoMdArrowDropdown size={16} />
            </div>
            <ul
                className={`lg:pb-2 ${!showClassifyChart && "hidden"
                    } lg:w-[220px] left-0 lg:absolute  top-[100%] lg:bg-[#2f566d] z-20 `}
            >
                <Link href={"/danh-sach/chapter:100"}>
                    <li className="p-2 lg:pl-4 pl-9  hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                        Dưới 100 chương
                    </li>
                </Link>
                <Link href={"/danh-sach/chapter:100-500"}>
                    <li className="p-2 lg:pl-4 pl-9  hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                        100-500 chương
                    </li>
                </Link>
                <Link href={"/danh-sach/chapter:500-1000"}>
                    <li className="p-2 lg:pl-4 pl-9  hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                        500-1000 chương
                    </li>
                </Link>
                <Link href={"/danh-sach/chapter:1000"}>
                    <li className="p-2 lg:pl-4 pl-9  hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                        Trên 1000 chương
                    </li>
                </Link>

            </ul>
        </div>
    );
}
