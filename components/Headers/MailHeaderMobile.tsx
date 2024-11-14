"use client";
import Link from "next/link";
import logoHome from "@/public/images/spriteimg_new_white_op.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdViewList } from "react-icons/md";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SearchHeader from "./SearchHerder";
import { ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import PopUpCategoryHeader from "../PopUp/PopUpCategoryHeader";
import PopUpListHeader from "../PopUp/PopUpListHeader";
import PoUpClassifyCharHeader from "../PopUp/PoUpClassifyCharHeader";
import ButtonChangeTheme from "../ButtonChangeTheme";

export interface IMainHeaderProps {
  categories: ICategory[]
}

export default function MainHeader({ categories }: IMainHeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showClassifyChart, setShowClassifyChart] = useState(false);
  const wrapperRefCategory = useRef<HTMLDivElement | null>(null);
  const wrapperRefList = useRef<HTMLDivElement | null>(null);
  const wrapperRefClassifyChart = useRef<HTMLDivElement | null>(null);
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
    wrapperRefCategory,
    showCategories,
    wrapperRefClassifyChart,
    showClassifyChart,
  ]);
  return (
    <header className="w-full sticky top-0 z-50 text-sm lg:hidden  ">
      <div className="w-full  bg-[#14425d] dark:bg-[#242F39] pt-2   m-auto">
        <div className="w-full md:max-w-[750px] lg:max-w-[1200px] m-auto">
          <div className="items-center  px-3 pb-2 flex justify-between ">
            <Link href="/">
              <h1
                className="w-[196px] h-[36px] whitespace-nowrap "
                style={{ backgroundImage: `url(${logoHome.src})` }}
              />
            </Link>
            <div className="flex gap-2 items-center">
              <ButtonChangeTheme />
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={`text-[#888888] flex justify-center border hover:bg-[#ddd] border-[#ddd] items-center w-[44px] h-[34px]  rounded`}
              >
                <IoReorderThreeOutline size={40} />
              </button>
            </div>
          </div>
          <ul
            className={`border-t font-medium text-white transitionProperty-[max-height] duration-300 lg:border-transparent  ${showMenu ? "max-h-[2000px] border-white py-2 " : "max-h-0 invisible overflow-hidden"
              }`}
          >
            <PopUpListHeader
              wrapperRefList={wrapperRefList}
              setShowList={setShowList}
              showList={showList}
              setShowCategories={setShowCategories}
              setShowClassifyChart={setShowClassifyChart}
            />
            <PopUpCategoryHeader
              categories={categories}
              setShowCategories={setShowCategories}
              setShowClassifyChart={setShowClassifyChart}
              setShowList={setShowList}
              showCategories={showCategories}
              wrapperRefCategory={wrapperRefCategory}
            />
            <PoUpClassifyCharHeader
              wrapperRefClassifyChart={wrapperRefClassifyChart}
              setShowList={setShowList}
              showClassifyChart={showClassifyChart}
              setShowCategories={setShowCategories}
              setShowClassifyChart={setShowClassifyChart}
            />
            <li className="flex gap-[2px]  items-center p-3 ">
              <FaBook size={16} />
              Truyện Tranh
            </li>
            <SearchHeader />
          </ul>
        </div>
      </div>
    </header>
  );
}
