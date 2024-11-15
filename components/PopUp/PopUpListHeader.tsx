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
                <p className="line-clamp-1">Danh sách</p>
                <IoMdArrowDropdown size={16} />
            </div>
            <ul
                className={`lg:pb-2 ${!showList && "hidden"
                    } lg:w-[220px] left-0 lg:absolute  top-[100%] lg:bg-[#2f566d]  z-20 `}
            >
                <Link href="/danh-sach/truyen-moi-cap-nhat">
                    <li className="p-2 lg:pl-4 pl-9  hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                        Truyện mới cập nhật
                    </li>
                </Link>
                <Link href="/danh-sach/truyen-full">
                    <li className="p-2 lg:pl-4 pl-9  hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                        Truyện Full
                    </li>
                </Link>
                <Link href="/danh-sach/truyen-hot">
                    <li className="p-2 lg:pl-4 pl-9  hover:bg-[#2f566d] text-start lg:hover:bg-[#14425d]">
                        Truyện Hot
                    </li>
                </Link>

            </ul>
        </div>
    );
}
