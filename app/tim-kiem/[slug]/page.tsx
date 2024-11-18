import { getListBooks, getListBooksNoTotal } from "@/api/books";
import { getOneCategory } from "@/api/category";
import CardPageList from "@/components/Cards/CardPageList";
import ChangeListByRat from "@/components/Functions/ChangeListByRat";
import RootPagination from "@/components/Functions/RootPagination";
import ListCategoryHome from "@/components/Lists/ListCategoryHome";
import ListTag from "@/components/Lists/ListTag";
import TitlePage from "@/components/TitlePage";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
function convertToTitleCase(str: string) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
export async function generateMetadata(
  { params, searchParams }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug?.toString() || "";
  return {
    title: `Tìm kiếm theo: ${convertToTitleCase(slug)}`,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: `Tìm kiếm theo ${slug?.toString()}`,
  };
}

export default async function page({ params, searchParams }: PropParams) {
  const slug = (await params).slug?.toString() || "";
  const limit = 24;
  const page = Number((await searchParams).page) || 1;
  const { data: bookByNameSearch, total } = (await getListBooks({
    search: slug,
    page: 1,
    limit,
  } as IFilter)) || { data: [], total: 0 };
  const { data: bookByView } = (await getListBooks({
    sortKey: "day",
  } as IFilter)) || { data: [], total: 0 };
  return (
    <MainLayout>
      <main className="w-full  relative font-arial dark:text-[#b1b1b1] pb-5">
        <TitlePage
          title={`Tìm truyện với từ khóa: ${convertToTitleCase(slug)}`}
        />
        <section className="w-full md:max-w-[750px] relative  m-auto lg:max-w-[1200px]">
          <div className="w-full grid grid-cols-1 py-1 mt-4 gap-5 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="w-full border-b font-sans border-[#ccc] dark:border-transparent flex items-end justify-between font-medium ">
                <h2 className="text-sm md:text-lg pb-2 border-b dark:border-transparent  dark:text-white border-[#333] pl-1 md:pl-0">
                  {`Tìm truyện với từ khóa: ${convertToTitleCase(
                    slug
                  )}`.toUpperCase()}
                </h2>
                <p className="text-[10px] dark:text-[#b1b1b1] text-sm text-black p-2">
                  {" "}
                  {`${bookByNameSearch.length} KẾT QUẢ`}
                </p>
              </div>
              <div className="w-full mt-3 ">
                {bookByNameSearch?.map((item: IBook, index: number) => (
                  <CardPageList index={index} key={index} book={item} />
                ))}
              </div>
              <RootPagination page={page} limit={limit} total={total} />
            </div>
            <div className="hidden  lg:block">
              <div className="bg-[#ecf0f1] dark:bg-transparent dark:border-[#2b2b2b] border-[#D9E1E4] border  text-base mt-8 pt-5 p-2 ">
                <ListCategoryHome />
              </div>
              <div className="text-xs mt-8  ">
                <ChangeListByRat books={bookByView} />
                <ListTag />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
