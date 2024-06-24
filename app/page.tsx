import CardStoryHome from "@/components/Cards/CardStoryHome";
import ListCategoryHome from "@/components/Lists/ListCategoryHome";
import ListCompletedStory from "@/components/Lists/ListCompletedStory";
import ListNewUpdateStory from "@/components/Lists/ListNewUpdateStory";
import ListReadingStory from "@/components/Lists/ListReadingStory";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import { ImFire } from "react-icons/im";

export default function Home() {
  return (
    <MainLayout>
      <main className="w-full dark:bg-[#222222] dark:text-[#b1b1b1] pb-5">
        <div className="w-full dark:text-[#b1b1b1] bg-white dark:bg-[#2E3740]  shadow-md ">
          <p className="w-full p-1 mb-5 md:max-w-[750px]   m-auto lg:max-w-[1200px]  font-medium  overflow-hidden truncate">
            Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp
            đầy đủ và cập nhật liên tục.
          </p>
        </div>
        <div className="w-full  md:max-w-[750px]   m-auto lg:max-w-[1200px] ">
          <div className="w-full dark:text-white  relative border-b border-[#ccc] flex items-center font-medium justify-between">
            <h2 className="flex gap-1 p-1 border-b border-[#333] md:pl-0 text-xl items-center">
              <Link href="">{"truyện hot".toUpperCase()}</Link>
              <ImFire />
            </h2>
            <select
              className="border-[1px] text-base bg-transparent outline-none focus:border-[#26b7fe] border-[#333] mt-[5px]  p-1  w-[150px]"
              name=""
              id=""
            >
              <option value="">TẤT CẢ</option>
            </select>
          </div>
          <div className="w-full grid grid-cols-4 gap-3 md:grid-cols-5 lg:grid-cols-8 p-3">
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
            <Link href={""}>
              {" "}
              <CardStoryHome />
            </Link>
          </div>
          <section className=" lg:grid grid-cols-4 gap-5">
            <div className="lg:hidden mb-2">
              <ListReadingStory />
            </div>
            <div className="col-span-3  ">
              <ListNewUpdateStory />
            </div>
            <div className="col-span-1 hidden lg:block">
              <div className="border border-[#d9e1e4] p-3 dark:bg-transparent dark:border-none rounded bg-[#ecf0f1]">
                <ListReadingStory />
              </div>
              <div className="border border-[#d9e1e4] p-3 mt-5 dark:bg-transparent dark:border-none rounded bg-[#ecf0f1]">
                <ListCategoryHome />
              </div>
            </div>
          </section>
          <ListCompletedStory />
        </div>
      </main>
    </MainLayout>
  );
}
