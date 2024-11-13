'use client'
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdViewList } from "react-icons/md";

export interface IAppProps {
    wrapperRefList: any,
    setShowList: (showList: boolean) => void,
    showList: boolean,
    setShowCategories: (showCategories: boolean) => void,
    setShowClassifyChart: (showClassifyChart: boolean) => void
}

export default function PopUpListHeader({ wrapperRefList, setShowList, showList, setShowCategories, setShowClassifyChart }: IAppProps) {
    return (
        <div
            ref={wrapperRefList}
            className="relative cursor-pointer h-full w-full  lg:w-max"
        >
            <div
                onClick={() => {
                    setShowList(!showList),
                        setShowCategories(false),
                        setShowClassifyChart(false)
                }}
                className={`flex gap-[2px] p-3 py-2 lg:py-3   h-full  items-center ${showList && "bg-[#2f566d] border-b border-[#14425d]"
                    }`}
            >
                <MdViewList size={22} />
                Danh sách
                <IoMdArrowDropdown size={16} />
            </div>
            <ul
                className={`lg:py-2 ${!showList && "hidden"
                    } lg:w-[450px] left-0 lg:absolute  top-[100%] lg:bg-[#2f566d]  z-20 `}
            >
                <li className="p-2 lg:pl-4 pl-9 lg:max-w-[120px] hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                    <Link href="">Truyện mới cập nhật</Link>
                </li>
                <li className="p-2 lg:pl-4 pl-9 lg:max-w-[120px] hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                    <Link href="">Truyện Full</Link>
                </li>
                <li className="p-2 lg:pl-4 pl-9 lg:max-w-[120px] hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                    <Link href="">Truyện Hot</Link>
                </li>
            </ul>
        </div>
    );
}
