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
                Phân loại theo Chương
                <IoMdArrowDropdown size={16} />
            </div>
            <ul
                className={`lg:py-2 ${!showClassifyChart && "hidden"
                    } lg:w-[450px] left-0 lg:absolute  top-[100%] lg:bg-[#2f566d] z-20 `}
            >
                <li className="p-2 lg:pl-4 pl-9 lg:max-w-[120px] hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                    <Link href={""}>Dưới 100 chương</Link>
                </li>
                <li className="p-2 lg:pl-4 pl-9 lg:max-w-[120px] hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                    <Link href={""}>100-500 chương</Link>
                </li>
                <li className="p-2 lg:pl-4 pl-9 lg:max-w-[120px] hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                    <Link href={""}>500-1000 chương</Link>
                </li>
                <li className="p-2 lg:pl-4 pl-9 lg:max-w-[120px] hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                    <Link href={""}>Trên 1000 chương</Link>
                </li>
            </ul>
        </div>
    );
}
