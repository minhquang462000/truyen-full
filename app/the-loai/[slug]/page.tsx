import { getListBooksByViews, getListBooksNoTotal } from "@/api/books";
import { getOneCategory } from "@/api/category";
import CardPageCategory from "@/components/Cards/CardPageCategory";
import ChangeListByRat from "@/components/Functions/ChangeListByRat";
import RootPagination from "@/components/Functions/RootPagination";
import ListCategoryHome from "@/components/Lists/ListCategoryHome";
import TitlePage from "@/components/TitlePage";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import * as React from "react";
import { IoMdHome } from "react-icons/io";

export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug?.toString();
  const id = slug?.split("-").pop()?.split(".")[0];
  const category = await getOneCategory(id as string);
  return {
    title: category?.name,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: category?.description,

  };
}

export default async function page({ params, searchParams }: PropParams) {
  const slug = (await params).slug?.toString();
  const status = (await searchParams).status || "";
  const id = slug?.split("-").pop()?.split(".")[0];

  const category = await getOneCategory(id as string);
  const bookByCategory = await getListBooksNoTotal({ categories: [id], page: 1, limit: 24, status: Number(status) || "" } as IFilter);
  const bookByView = await getListBooksByViews("weekly");
  return (
    <MainLayout>
      <main className="w-full dark:bg-[#222222] font-arial dark:text-[#b1b1b1] pb-5">
        <TitlePage title={`Truyện ${category?.name}`} />
        <section className="w-full md:max-w-[750px]   m-auto lg:max-w-[1200px]">
          <div className="w-full grid grid-cols-1 py-1 mt-4 gap-5 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="w-full border-b font-sans border-[#ccc] dark:border-none flex items-end justify-between font-medium ">
                <h2 className="text-sm md:text-lg pb-2 border-b dark:border-none dark:pb-0 dark:text-white border-[#333] pl-1 md:pl-0">
                  {`TRUYỆN ${category?.name.toUpperCase()}`}
                </h2>
                <Link href={`?status=2`}>
                  <p className="text-[10px] bg-[#444] text-sm text-white p-2">
                    {" "}
                    {`${category?.name.toUpperCase()} (FULL)`}
                  </p>
                </Link>
              </div>
              <div className="w-full mt-3 dark:mt-2">
                {bookByCategory?.map((item: IBook, index: number) => (
                  <CardPageCategory key={index} book={item} />
                ))}
              </div>
              <RootPagination />
            </div>
            <div className="hidden  lg:block">
              <p className="bg-[#ecf0f1] dark:border-none text-sm dark:bg-[#2b2b2b] border-[#D9E1E4] border p-3 ">
                {category?.description}
              </p>
              <div className="bg-[#ecf0f1] dark:bg-transparent dark:border-none border-[#D9E1E4] border  text-base mt-8 p-2 ">
                <ListCategoryHome />
              </div>
              <div className="text-xs mt-8  ">
                <ChangeListByRat books={bookByView} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
