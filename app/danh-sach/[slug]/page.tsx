import { getListBooks } from "@/api/books";
import CardPageList from "@/components/Cards/CardPageList";
import ChangeListByRat from "@/components/Functions/ChangeListByRat";
import RootPagination from "@/components/Functions/RootPagination";
import ListCategoryHome from "@/components/Lists/ListCategoryHome";
import ListTag from "@/components/Lists/ListTag";
import TitlePage from "@/components/TitlePage";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = String((await params).slug).replace("%3A", ":");
  return {
    title: convertTitleCase(slug)?.title,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: convertTitleCase(slug)?.title,
  };
}
function convertTitleCase(slug: string) {
  let title;
  let slugViews = "";
  let slugChap = "";
  let slugStatus;
  switch (slug) {
    case "truyen-moi-cap-nhat":
      title = "Truyện mới cập nhật";
      break;
    case "truyen-full":
      title = "Truyện Full";
      slugStatus = 2;
      break;
    case "truyen-hot":
      title = "Truyện Hot";
      slugViews = "views";
      break;
    case "chapter:100":
      title = "Truyện dưới 100 chương";
      slugChap = "100";
      break;
    case "chapter:100-500":
      title = "Truyện từ 100 đến 500 chương";
      slugChap = "100-500";
      break;
    case "chapter:500-1000":
      title = "Truyện từ 500 đến 1000 chương";
      slugChap = "500-1000";
      break;
    case "chapter:1000":
      title = "Truyện trên 100 chương";
      slugChap = "1000";
      break;
    default:
      title = "Danh sách";
  }
  return { title, slugViews, slugChap, slugStatus };
}
export default async function page({ searchParams, params }: PropParams) {
  const page = Number((await searchParams)?.page) || 1;
  const slug = String((await params).slug).replace("%3A", ":");
  const keyFilter = convertTitleCase(slug);
  const { data: bookByView } = (await getListBooks({
    sortKey: "day",
  } as IFilter)) || { data: [] };
  const limit = 25;
  const { data: listBook, total } = await getListBooks(
    {
      limit, page,
      status: keyFilter.slugStatus,
      sortKey: keyFilter.slugViews,
      chapter: keyFilter.slugChap
    } as IFilter)
    || { data: [], total: 0 };
  return (
    <MainLayout>
      <main className="w-full dark:bg-[#222222] dark:text-[#b1b1b1] pb-5">
        <TitlePage title={convertTitleCase(slug).title} />
        <section className="w-full md:max-w-[750px] relative  m-auto lg:max-w-[1200px]">
          <div className="w-full grid grid-cols-1 py-1 mt-4 gap-5 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="w-full border-b font-sans border-[#ccc] dark:border-transparent flex items-end justify-between font-medium ">
                <h2 className="text-sm md:text-lg pb-2 border-b dark:border-transparent  dark:text-white border-[#333] pl-1 md:pl-0">
                  {convertTitleCase(slug).title.toUpperCase()}
                </h2>
              </div>
              <div className="w-full mt-3 ">
                {listBook?.map((item: IBook, index: number) => (
                  <CardPageList index={index} key={index} book={item} />
                ))}
              </div>
              <RootPagination page={page} total={total} limit={limit} />
            </div>
            <div className="hidden  lg:block">
              <p className="bg-[#ecf0f1] dark:border-transparent text-sm dark:bg-[#2b2b2b] border-[#D9E1E4] border p-3 ">
                {convertTitleCase(slug).title}
              </p>
              <div className="bg-[#ecf0f1] dark:bg-transparent dark:border-[#2b2b2b] border-[#D9E1E4] border  text-base mt-8 pt-5 p-2 ">
                <ListCategoryHome />
              </div>
              <div className="text-xs mt-8  ">
                <ChangeListByRat books={bookByView?.data} />
                <ListTag />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
