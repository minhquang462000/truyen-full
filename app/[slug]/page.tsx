import { getListBooksNoTotal, getOneBook } from "@/api/books";
import CardItemDetail from "@/components/Cards/CardItemDetail";
import ChangeListByRat from "@/components/Functions/ChangeListByRat";
import ListChapter from "@/components/Lists/ListChapter";
import ListComment from "@/components/Lists/ListCommemt";
import ListStoryByAuthor from "@/components/Lists/ListStoryByAuthor";
import ListTag from "@/components/Lists/ListTag";
import { IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug?.toString();
  const id = slug?.split("-").pop()?.split(".")[0];
  const book = await getOneBook(id as string);

  return {
    title: book?.name,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: book?.description,
    openGraph: {
      title: book?.name,
      description: book?.description,
      type: "website",
      images: [
        `${process.env.NEXT_PUBLIC_API_URL}/api/books/${book?.images[0]}`,
      ],
    },
  };
}
export default async function page({ params }: PropParams) {
  const slug = (await params).slug?.toString();
  const id = slug?.split("-").pop()?.split(".")[0];
  const bookData = await getOneBook(id as string);
  console.log(bookData);
  const booksHot = await getListBooksNoTotal({ page: 1, limit: 10 } as IFilter);
  const bookSameAuthor = await getListBooksNoTotal({
    author: bookData?.authors[0]._id,
    page: 1,
    limit: 10,
  } as IFilter);
  return (
    <MainLayout>
      <main className="w-full  text-[#4e4e4e] font-arial  dark:bg-[#222222] dark:text-[#b1b1b1] pb-5   m-auto ">
        <div className="w-full text-[#b1b1b1] bg-white dark:bg-[#2e3740] dark:shadow-none p-1  text-sm  shadow-md shadow-[#ccc]">
          <ul className="w-full text-sm font-medium  md:max-w-[750px]   m-auto lg:max-w-[1200px] flex  gap-2 items-center flex-wrap ">
            <Link href={"/"}>
              {" "}
              <li className="flex font-semibold hover:underline items-center gap-1">
                <IoMdHome size={22} /> Truyện
              </li>
            </Link>
            <Link href={""}>
              <li className='before:content-["/"] hover:underline before:mr-1'>
                {" "}
                {bookData?.name}
              </li>
            </Link>
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
              <CardItemDetail bookData={bookData} />
              <ListChapter />
            </div>
            <div className="hidden  lg:block">
              <ListStoryByAuthor books={bookSameAuthor} />
              <ListTag />
              <ChangeListByRat books={booksHot} />
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