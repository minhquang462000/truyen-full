import { getListBooksNoTotal } from "@/api/books";
import ListCategoryHome from "@/components/Lists/ListCategoryHome";
import ListCompletedStory from "@/components/Lists/ListCompletedStory";
import ListNewUpdateStory from "@/components/Lists/ListNewUpdateStory";
import ListReadingStory from "@/components/Lists/ListReadingStory";
import { IFilter, ITag } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { getListCategory } from "@/api/category";
import ListBookHot from "@/components/Lists/ListBookHot";
import ListTag from "@/components/Lists/ListTag";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default async function Home() {
  const booksHot = await getListBooksNoTotal({ sortKey: "views", limit: 13 } as IFilter);
  const bookNewUpdate = await getListBooksNoTotal({ limit: 25 } as IFilter);
  const categories = await getListCategory({} as IFilter);
  const bookComplete = await getListBooksNoTotal({
    limit: 24,
    status: 2,
  } as IFilter);
  return (
    <MainLayout>
      <main className="w-full   dark:text-[#b1b1b1] pb-5">
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
              <div className="border border-[#d9e1e4] p-3 dark:bg-transparent dark:border-transparent rounded bg-[#ecf0f1]">
                <ListReadingStory />
              </div>
              <div className="border border-[#d9e1e4] p-3 mt-5 dark:bg-transparent dark:border-transparent rounded bg-[#ecf0f1]">
                <ListCategoryHome />
              </div>
              <ListTag />
            </div>
          </div>
          <ListCompletedStory listBookComplete={bookComplete} />
        </section>
      </main>
    </MainLayout>
  );
}
