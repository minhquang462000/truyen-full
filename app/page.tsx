import { getListBooksNoTotal } from "@/api/books";
import CardStoryHome from "@/components/Cards/CardStoryHome";
import ListCategoryHome from "@/components/Lists/ListCategoryHome";
import ListCompletedStory from "@/components/Lists/ListCompletedStory";
import ListNewUpdateStory from "@/components/Lists/ListNewUpdateStory";
import ListReadingStory from "@/components/Lists/ListReadingStory";
import { IFilter, ITag } from "@/interfaces";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import { getListCategory } from "@/api/category";
import { IoIosArrowForward } from "react-icons/io";
import { getListTags } from "@/api/tags";
import ListBookHot from "@/components/Lists/ListBookHot";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default async function Home() {
  const booksHot = await getListBooksNoTotal({ page: 1, limit: 13 } as IFilter);
  const bookNewUpdate = await getListBooksNoTotal({ limit: 25 } as IFilter);
  const categories = await getListCategory({} as IFilter);
  const bookComplete = await getListBooksNoTotal({
    limit: 24,
    status: 2,
  } as IFilter);
  const listTags = await getListTags();
  return (
    <MainLayout>
      <main className="w-full dark:bg-[#222222] dark:text-[#b1b1b1] pb-5">
        <div className="w-full dark:text-[#b1b1b1] bg-white dark:bg-[#2E3740]  shadow-md ">
          <p className="w-full p-1 mb-5 md:max-w-[750px] text-sm  m-auto lg:max-w-[1200px]  font-medium  overflow-hidden truncate">
            Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp
            đầy đủ và cập nhật liên tục.
          </p>
        </div>
        <section className="w-full  md:max-w-[750px]   m-auto lg:max-w-[1200px] ">
          <ListBookHot categories={categories} booksHot={booksHot} />
          <div className=" lg:grid grid-cols-4 gap-5">
            <div className="lg:hidden mb-2">
              <ListReadingStory />
            </div>
            <div className="col-span-3  ">
              <ListNewUpdateStory
                categories={categories}
                bookNewUpdate={bookNewUpdate}
              />
            </div>
            <div className="col-span-1 hidden lg:block">
              <div className="border border-[#d9e1e4] p-3 dark:bg-transparent dark:border-none rounded bg-[#ecf0f1]">
                <ListReadingStory />
              </div>
              <div className="border border-[#d9e1e4] p-3 mt-5 dark:bg-transparent dark:border-none rounded bg-[#ecf0f1]">
                <ListCategoryHome categories={categories} />
              </div>
              <div className="w-full relative dark:border-none mt-4  border-b border-[#ccc] flex items-center font-medium justify-between">
                <h4 className="flex dark:text-white  dark:border-none  pl-1 border-b border-[#333] py-2 md:pl-0  items-center">
                  <Link href="/the-loai/ten-the-loai"> TAGS</Link>
                  <IoIosArrowForward size={20} />
                </h4>
              </div>
              <ul className="flex mt-4 justify-center flex-wrap gap-2">
                {listTags?.map((tag: ITag, index: number) => (
                  <li
                    className="border rounded-md text-sm border-gray-300 px-2"
                    key={index}
                  >
                    {tag?.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ListCompletedStory listBookComplete={bookComplete} />
        </section>
      </main>
    </MainLayout>
  );
}
