import { getListBooks } from "@/api/books";
import { getOneCategory } from "@/api/category";
import { getOneTag } from "@/api/tags";
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
export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug?.toString();
  const id = slug?.split("-").pop()?.split(".")[0];
  const tag = await getOneTag(id as string);
  return {
    title: `Truyện ${tag?.name}`,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: tag?.description,
  };
}

export default async function page({ params, searchParams }: PropParams) {
  const slug = (await params).slug?.toString();
  const status = (await searchParams).status || "";
  const id = slug?.split("-").pop()?.split(".")[0];
  const page = Number((await searchParams).page) || 1;
  const tag = await getOneTag(id as string);
  const limit = 24;
  const { data: bookByTag, total } = await getListBooks({
    tag: id,
    page: 1,
    limit,
    status: Number(status) || "",
  } as IFilter) || { data: [], total: 0 };
  const { data: bookByView } = await getListBooks({ keySort: "weekly" } as IFilter)|| { data: [], total: 0 };
  return (
    <MainLayout>
      <main className="w-full  relative font-arial dark:text-[#b1b1b1] pb-5">
        <TitlePage title={`Truyện ${tag?.name}`} />
        <section className="w-full md:max-w-[750px] relative  m-auto lg:max-w-[1200px]">
          <div className="w-full grid grid-cols-1 py-1 mt-4 gap-5 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="w-full border-b font-sans border-[#ccc] dark:border-transparent flex items-end justify-between font-medium ">
                <h2 className="text-sm md:text-lg pb-2 border-b dark:border-transparent  dark:text-white border-[#333] pl-1 md:pl-0">
                  {`TRUYỆN ${tag?.name.toUpperCase()}`}
                </h2>
                <Link href={`?status=2`}>
                  <p className="text-[10px] bg-[#444] text-sm text-white p-2">
                    {" "}
                    {`${tag?.name.toUpperCase()} (FULL)`}
                  </p>
                </Link>
              </div>
              <div className="w-full mt-3 ">
                {bookByTag?.map((item: IBook, index: number) => (
                  <CardPageList index={index} key={index} book={item} />
                ))}
              </div>
              <RootPagination page={page} limit={limit} total={total} />
            </div>
            <div className="hidden  lg:block">
              <p className="bg-[#ecf0f1] dark:border-transparent text-sm dark:bg-[#2b2b2b] border-[#D9E1E4] border p-3 ">
                {tag?.description}
              </p>
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
