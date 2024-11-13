"use client";
import Link from "next/link";
import logoHome from "@/public/images/spriteimg_new_white_op.png";
import { MdViewList } from "react-icons/md";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { FaBook, FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SearchHeader from "./SearchHerder";
import { ICategory } from "@/interfaces";
import ButtonChangeTheme from "../ButtonChangeTheme";
import PopUpListHeader from "../PopUp/PopUpListHeader";
import PopUpCategoryHeader from "../PopUp/PopUpCategoryHeader";
import PoUpClassifyCharHeader from "../PopUp/PoUpClassifyCharHeader";

export interface IMainHeaderProps {
  categories: ICategory[];
}

export default function MainHeaderDesktop({ categories }: IMainHeaderProps) {
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
    <header className="w-full sticky top-0 z-50 text-sm  hidden lg:block ">
      <section className="w-full  bg-[#14425d] dark:bg-[#242F39]    m-auto">
        <div className="w-full max-w-[1200px] h-[50px] flex justify-between items-center gap-5 m-auto">
          <div className="flex gap-2 items-center">
            <Link href="/">
              <h2
                className="w-[196px] h-[36px] whitespace-nowrap "
                style={{ backgroundImage: `url(${logoHome.src})` }}
              />
            </Link>
            <div
              className={`border-t flex h-full  items-center  text-white transitionProperty-[max-height] duration-300 lg:border-none border-white `}
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
                wrapperRefCategory={wrapperRefCategory}
                setShowList={setShowList}
                showCategories={showCategories}
                setShowCategories={setShowCategories}
                setShowClassifyChart={setShowClassifyChart}
              />
              <PoUpClassifyCharHeader
                wrapperRefClassifyChart={wrapperRefClassifyChart}
                setShowList={setShowList}
                showClassifyChart={showClassifyChart}
                setShowCategories={setShowCategories}
                setShowClassifyChart={setShowClassifyChart}
              />
              <li className="flex gap-[2px] px-2 items-center ">
                <FaBook size={16} />
                <Link href={""}>Truyện Tranh</Link>
              </li>

            </div>
          </div>
          <div className="flex gap-3 items-center">
            <ButtonChangeTheme />
            <SearchHeader />
          </div>
        </div>
      </section>
    </header>
  );
}
