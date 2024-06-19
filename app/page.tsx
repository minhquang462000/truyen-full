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
      <main className="w-full md:max-w-[750px]   pb-5  m-auto lg:max-w-[1200px]">
        <p className="w-full p-1 mb-5  font-medium  overflow-hidden truncate">
          Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên tục.
        </p>
        <div className="w-full relative border-b border-[#ccc] flex items-center font-medium justify-between">
          <h2 className="flex gap-1 pl-1 md:pl-0 text-xl items-center">
            <Link href=""> TRUYỆN HOT</Link>
            <ImFire />
          </h2>
          <div className="bg-[#999] absolute mt-[6px] bottom-[-1px] w-[135px] h-[2px]" />
          <select className="border-[1px] text-base bg-transparent outline-none focus:border-[#26b7fe] border-[#333] mt-[5px]  p-1  w-[150px]" name="" id="">
            <option value="">TẤT CẢ</option>
          </select>
        </div>
        <div className="w-full grid grid-cols-4 gap-3 md:grid-cols-5 lg:grid-cols-8 p-3">
          <Link href={""}> <CardStoryHome /></Link>
          <Link href={""}> <CardStoryHome /></Link>
          <Link href={""}> <CardStoryHome /></Link>
          <Link href={""}> <CardStoryHome /></Link>
          <Link href={""}> <CardStoryHome /></Link>
          <Link href={""}> <CardStoryHome /></Link>
          <Link href={""}> <CardStoryHome /></Link>
          <Link href={""}> <CardStoryHome /></Link>
          <Link href={""}> <CardStoryHome /></Link>
          <Link href={""}> <CardStoryHome /></Link>
        </div>
        <section className=" lg:grid grid-cols-4 gap-5">
          <div className="lg:hidden">
            <ListReadingStory />
          </div>
          <div className="col-span-3">
            <ListNewUpdateStory />
          </div>
          <div className="col-span-1 hidden lg:block">
            <div className="border border-[#d9e1e4] p-3 rounded bg-[#ecf0f1]">
              <ListReadingStory />
            </div>
            <div className="border border-[#d9e1e4] p-3 mt-5 rounded bg-[#ecf0f1]">
              <ListCategoryHome />
            </div>
          </div>
        </section>
        <ListCompletedStory />
      </main>
    </MainLayout>
  );
}
