"use client";
import Link from "next/link";
import logoHome from "@/public/images/spriteimg_new_white_op.png";
import { MdViewList } from "react-icons/md";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { FaBook, FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SearchHeader from "./SearchHerder";
import { ICategory } from "@/interfaces";

export interface IMainHeaderProps {
  categories: ICategory[];
}

export default function MainHeaderDesktop({ categories }: IMainHeaderProps) {
  const [showList, setShowList] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showClassifyChart, setShowClassifyChart] = useState(false);
  const wrapperRefSetting = useRef<any>(null);
  const wrapperRefCategory = useRef<any>(null);
  const wrapperRefList = useRef<any>(null);
  const wrapperRefClassifyChart = useRef<any>(null);
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setShowSetting(false);
  }, [theme]);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        wrapperRefList.current &&
        !wrapperRefList.current!.contains(event.target) &&
        showList
      ) {
        setShowList(false);
      }
      if (
        wrapperRefCategory.current &&
        !wrapperRefCategory.current!.contains(event.target) &&
        showCategories
      ) {
        setShowCategories(false);
      }
      if (
        wrapperRefSetting.current &&
        !wrapperRefSetting.current!.contains(event.target) &&
        showSetting
      ) {
        setShowSetting(false);
      }
      if (
        wrapperRefClassifyChart.current &&
        !wrapperRefClassifyChart.current!.contains(event.target) &&
        showClassifyChart
      ) {
        setShowClassifyChart(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    wrapperRefList,
    showList,
    wrapperRefSetting,
    showSetting,
    wrapperRefCategory,
    showCategories,
    wrapperRefClassifyChart,
    showClassifyChart,
  ]);
  return (
    <header className="w-full sticky top-0 z-50 text-sm hidden lg:block  ">
      <section className="w-full  bg-[#14425d] dark:bg-[#242F39]    m-auto">
        <div className="w-full max-w-[1200px] h-[50px] flex justify-between items-center gap-5 m-auto">
          <div className="flex gap-2 items-center">
            <Link href="/">
              <h2
                className="w-[196px] h-[36px] whitespace-nowrap "
                style={{ backgroundImage: `url(${logoHome.src})` }}
              />
            </Link>
            <ul
              className={`border-t flex h-full  items-center  text-white transitionProperty-[max-height] duration-300 lg:border-none border-white `}
            >
              <li
                ref={wrapperRefList}
                className="relative cursor-pointer h-full  w-max"
              >
                <div
                  onClick={() => {
                    setShowList(!showList),
                      setShowCategories(false),
                      setShowClassifyChart(false),
                      setShowSetting(false);
                  }}
                  className={`flex h-full  gap-[2px] px-2    items-center ${
                    showList && "bg-[#2f566d] border-b border-[#333]"
                  }`}
                >
                  <MdViewList size={22} />
                  Danh sách
                  <IoMdArrowDropdown size={16} />
                </div>
                <ul
                  className={`py-2 ${
                    !showList && "hidden"
                  } w-[200px] left-0 absolute top-[100%] bg-[#2f566d]  z-20 `}
                >
                  <li className="p-2 hover:bg-[#14425d]">
                    <Link href="">Truyện mới cập nhật</Link>
                  </li>
                  <li className="p-2 hover:bg-[#14425d]">
                    <Link href="">Truyện Full</Link>
                  </li>
                  <li className="p-2 hover:bg-[#14425d]">
                    <Link href="">Truyện Hot</Link>
                  </li>
                </ul>
              </li>
              <li
                ref={wrapperRefCategory}
                className="relative cursor-pointer h-full  w-max"
              >
                <div
                  onClick={() => {
                    setShowCategories(!showCategories),
                      setShowList(false),
                      setShowClassifyChart(false),
                      setShowSetting(false);
                  }}
                  className={`flex gap-[2px] px-2   h-full  items-center ${
                    showCategories && "bg-[#2f566d] border-b border-[#333]"
                  }`}
                >
                  <MdViewList size={22} />
                  Thể loại
                  <IoMdArrowDropdown size={16} />
                </div>
                <ul
                  className={`py-2 ${
                    !showCategories && "hidden"
                  } w-[450px] left-0 absolute  top-[100%] bg-[#2f566d] grid  grid-cols-3 z-20 `}
                >
                  {categories?.map((category, index) => (
                    <li
                      key={index}
                      className="p-2 pl-4 max-w-[120px] text-start hover:bg-[#14425d]"
                    >
                      <Link href="">
                        {" "}
                        {category?.name?.split(" ").slice(0, 2).join(" ")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                ref={wrapperRefClassifyChart}
                className="relative cursor-pointer h-full  w-max"
              >
                <div
                  onClick={() => {
                    setShowClassifyChart(!showClassifyChart),
                      setShowCategories(false),
                      setShowList(false),
                      setShowSetting(false);
                  }}
                  className={`flex gap-[2px] px-2    h-full items-center ${
                    showClassifyChart && "bg-[#2f566d] border-b border-[#333]"
                  }`}
                >
                  <MdViewList size={22} />
                  Phân loại theo Chương
                  <IoMdArrowDropdown size={16} />
                </div>
                <ul
                  className={`py-2 ${
                    !showClassifyChart && "hidden"
                  } w-[180px] left-0 absolute top-[100%] bg-[#2f566d] b z-20 `}
                >
                  <li className="p-2 hover:bg-[#14425d]">
                    <Link href={""}>Dưới 100 chương</Link>
                  </li>
                  <li className="p-2 hover:bg-[#14425d]">
                    <Link href={""}>100-500 chương</Link>
                  </li>
                  <li className="p-2 hover:bg-[#14425d]">
                    <Link href={""}>500-1000 chương</Link>
                  </li>
                  <li className="p-2 hover:bg-[#14425d]">
                    <Link href={""}>Trên 1000 chương</Link>
                  </li>
                </ul>
              </li>
              {/* <li className="flex gap-[2px] px-2 items-center ">
              <FaBook size={16} />
              <Link href={""}>Truyện Tranh</Link>
            </li>
            */}
            </ul>
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => setTheme(!theme)}
              className={`relative inline-flex px-1  items-center cursor-pointer bg-white w-[80px] h-[30px] rounded-full`}
            >
              <div
                className={`w-6 h-6  rounded-full flex  items-center justify-center transition-all duration-300 ${
                  theme ? " translate-x-8 bg-[#242F39]" : "bg-[#14425D]"
                }`}
              >
                {theme ? <FaMoon color="yellow" /> : <FaSun color="yellow" />}
              </div>
            </button>

            <SearchHeader />
          </div>
        </div>
      </section>
    </header>
  );
}
