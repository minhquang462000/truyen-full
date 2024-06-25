import ChangeListByRat from "@/components/Functions/ChangeListByRat";
import ListCategoryHome from "@/components/Lists/ListCategoryHome";
import ListStoryCategory from "@/components/Lists/ListStoryCategory";
import { MainLayout } from "@/layouts";
import * as React from "react";
import { IoMdHome } from "react-icons/io";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
     <main className="w-full dark:bg-[#222222] dark:text-[#b1b1b1] pb-5">
        <div className="w-full  bg-white p-2  shadow-md shadow-[#ccc]">
          <ul className="w-full text-base  md:max-w-[750px]   m-auto lg:max-w-[1200px] flex  gap-2 items-center flex-wrap ">
            <li className="flex font-semibold items-center gap-1">
              <IoMdHome size={25} /> Truyện
            </li>
            <li className='before:content-["/"] before:mr-1'>
              {" "}
              Dưới 100 chương
            </li>
          </ul>
        </div>
        <div className="w-full md:max-w-[750px]   m-auto lg:max-w-[1200px]">
          <div className="w-full grid grid-cols-1 py-1 mt-4 gap-5 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <ListStoryCategory />
            </div>
            <div className="hidden  lg:block">
              <p className="bg-[#ecf0f1] border-[#D9E1E4] border p-3 ">
                Danh sách truyện có liên quan tới từ khoá 'one'
              </p>
              <div className="bg-[#ecf0f1] border-[#D9E1E4] border  text-base mt-8 p-2 ">
                <ListCategoryHome />
              </div>
              <div className="text-xs mt-8 p-2 ">
                <ChangeListByRat />
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
