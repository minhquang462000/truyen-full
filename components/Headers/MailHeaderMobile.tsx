"use client";
import Link from "next/link";
import logoHome from "@/public/images/spriteimg_new_white_op.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdViewList } from "react-icons/md";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { FaBook, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import SearchHeader from "./SearchHerder";

export interface IMainHeaderProps {}

export default function MainHeader(props: IMainHeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showClassifyChart, setShowClassifyChart] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <header className="w-full text-sm lg:hidden  ">
      <div className="w-full  bg-[#14425d] dark:bg-[#242F39] pt-2  overflow-hidden m-auto">
        <div className="w-full md:max-w-[750px] lg:max-w-[1200px] m-auto">
          <div className="items-center  px-3 pb-2 flex justify-between ">
            <Link href="/">
              <h1
                className="w-[196px] h-[36px] whitespace-nowrap "
                style={{ backgroundImage: `url(${logoHome.src})` }}
              />
            </Link>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-[#888888] flex justify-center border hover:bg-[#ddd] border-[#ddd] items-center w-[44px] h-[34px]  rounded"
            >
              <IoReorderThreeOutline size={40} />
            </button>
          </div>
          <ul
            className={`border-t font-medium text-white transitionProperty-[max-height] duration-300 lg:border-none border-white ${
              showMenu ? "max-h-full py-2 " : "max-h-0 overflow-hidden"
            }`}
          >
            <li>
              <div
                onClick={() => {
                  setShowList(!showList),
                    setShowCategories(false),
                    setShowClassifyChart(false),
                    setShowSetting(false);
                }}
                className={`flex gap-[2px]  items-center p-3 ${
                  showList && "bg-[#2f566d]"
                }`}
              >
                <MdViewList size={22} />
                Danh sách
                <IoMdArrowDropdown size={16} />
              </div>
              <ul className={`ml-7 ${!showList && "hidden"}  overflow-hidden`}>
                <li className="py-2">Truyện mới cập nhật</li>
              </ul>
            </li>
            <li>
              <div
                onClick={() => {
                  setShowCategories(!showCategories),
                    setShowList(false),
                    setShowClassifyChart(false),
                    setShowSetting(false);
                }}
                className={`flex gap-[2px]  items-center p-3 ${
                  showCategories && "bg-[#2f566d]"
                }`}
              >
                <MdViewList size={22} />
                Thể loại
                <IoMdArrowDropdown size={16} />
              </div>
              <ul
                className={`ml-7 ${
                  !showCategories && "hidden"
                }  overflow-hidden`}
              >
                <li className="py-2">Truyện mới cập nhật</li>
              </ul>
            </li>
            <li>
              <div
                onClick={() => {
                  setShowClassifyChart(!showClassifyChart),
                    setShowCategories(false),
                    setShowList(false),
                    setShowSetting(false);
                }}
                className={`flex gap-[2px]  items-center p-3 ${
                  showClassifyChart && "bg-[#2f566d]"
                }`}
              >
                <MdViewList size={22} />
                Phân loại theo Chương
                <IoMdArrowDropdown size={16} />
              </div>
              <ul
                className={`ml-7 ${
                  !showClassifyChart && "hidden"
                }  overflow-hidden`}
              >
                <li className="py-2">
                  <Link href={""}>Dưới 100 chương</Link>
                </li>
                <li className="py-2">
                  <Link href={""}>100-500 chương</Link>
                </li>
                <li className="py-2">
                  <Link href={""}>500-1000 chương</Link>
                </li>
                <li className="py-2">
                  <Link href={""}>Trên 1000 chương</Link>
                </li>
              </ul>
            </li>

            <li className="flex gap-[2px]  items-center p-3 ">
              <FaBook size={16} />
              Truyện Tranh
            </li>
            <li>
              <div
                onClick={() => {
                  setShowSetting(!showSetting),
                    setShowCategories(false),
                    setShowList(false),
                    setShowClassifyChart(false);
                }}
                className={`flex gap-[2px] p-3 items-center ${
                  showSetting && "bg-[#2f566d]"
                }`}
              >
                <IoMdSettings size={22} />
                Tùy chỉnh
                <IoMdArrowDropdown size={16} />
              </div>
              <div
                className={`p-3 ${
                  !showSetting && "hidden"
                }  flex flex-col gap-1  overflow-hidden`}
              >
                <label htmlFor="setting">Màu nền</label>
                <select
                  name="setting"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="bg-white text-[#666] p-2 px-3 outline-none rounded"
                  id=""
                >
                  <option value="light">Xám nhạt</option>
                  <option value="dark">Màu tối</option>
                </select>
              </div>
            </li>
            <SearchHeader />
          </ul>
        </div>
      </div>
    </header>
  );
}
