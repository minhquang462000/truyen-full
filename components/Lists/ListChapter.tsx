import Link from "next/link";
import { GiSevenPointedStar } from "react-icons/gi";
import RootPagination from "../Functions/RootPagination";
import { convertToSlug } from "@/utils/converToSlug";

export interface IListChapterProps {
  page: number;
  bookName: string;
}

export default function ListChapter({ page, bookName }: IListChapterProps) {
  return (
    <div className="w-full mt-4 text-sm font-medium">
      <div className="w-full border-b dark:border-transparent  border-[#ccc] flex items-end justify-between font-medium ">
        <h2 className="text-lg md:text-xl pb-2 border-b dark:border-transparent dark:text-white border-[#333] pl-1 md:pl-0">
          <Link href=""> {"danh sách chương".toUpperCase()}</Link>
        </h2>
      </div>
      <ul className="mt-3 text-sm font-medium grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-8 px-5">
        <Link href={`/${convertToSlug(bookName)}/chuong-30.html`}>
          <li className="flex w-full items-center gap-1 ">
            <GiSevenPointedStar/>

            <p className=" w-full overflow-hidden truncate hover:underline">
              {" "}
              Chương 30: 30: Ngươi Nếu Không Phục Tiến Lên Nhận Lãnh Cái Chết
            </p>
          </li>
        </Link>
      </ul>
      <RootPagination limit={10} page={page} total={11}/>
    </div>
  );
}
