import CardItemDetail from "@/components/Cards/CardItemDetail";
import ChangeListByRat from "@/components/Functions/ChangeListByRat";
import ListChapter from "@/components/Lists/ListChapter";
import ListComment from "@/components/Lists/ListCommemt";
import ListStoryByAuthor from "@/components/Lists/ListStoryByAuthor";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main className="w-full  text-[#4e4e4e] dark:bg-[#222222] dark:text-[#b1b1b1] pb-5   m-auto ">
        <div className="w-full text-[#b1b1b1] bg-white dark:bg-[#2e3740] dark:shadow-none p-1  text-sm  shadow-md shadow-[#ccc]">
          <ul className="w-full text-base  md:max-w-[750px]   m-auto lg:max-w-[1200px] flex  gap-2 items-center flex-wrap ">
            <li className="flex font-semibold items-center gap-1">
              <IoMdHome size={25} /> Truyện
            </li>
            <li className='before:content-["/"] before:mr-1'>
              {" "}
              Truyện mới cập nhật
            </li>
          </ul>
        </div>
        <div className="w-full md:max-w-[750px] lg:max-w-[1200px] m-auto">
          <div className="w-full dark:border-none border-b mt-5 border-[#ccc] flex items-end justify-between font-medium ">
            <h2 className=" text-xl pb-2 border-b dark:text-white dark:border-none border-[#333] pl-1 md:pl-0">
              <Link href=""> {"Thông tin truyện".toUpperCase()}</Link>
            </h2>
          </div>
          <div className="w-full lg:grid lg:mt-5  grid-cols-4">
            <div className="lg:col-span-3">
              <CardItemDetail />
              <ListChapter />
            </div>
            <div className="hidden  lg:block">
              <ListStoryByAuthor />
              <ChangeListByRat />
            </div>
            <div className="w-full lg:col-span-3">
              <ListComment />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
