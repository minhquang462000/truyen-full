import Link from "next/link";
import { GiSevenPointedStar } from "react-icons/gi";
import RootPanagation from "../Functions/RootPanagation";
import ChapterPanagation from "../Functions/ChapterPanagation";

export interface IListChapterProps { }

export default function ListChapter(props: IListChapterProps) {
  return (
    <div className="w-full mt-4 text-sm font-medium">
      <div className="w-full border-b border-[#ccc] flex items-end justify-between font-medium ">
        <h2 className="text-lg md:text-xl pb-2 border-b border-[#333] pl-1 md:pl-0">
          <Link href=""> {"danh sách chương".toUpperCase()}</Link>
        </h2>
      </div>
      <ul className="mt-3 text-sm font-medium grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-8 px-5">
        <li className="flex w-full items-center gap-1 ">
          <GiSevenPointedStar />
          <p className=" w-full overflow-hidden truncate hover:underline">
            {" "}
            Chương 30: 30: Ngươi Nếu Không Phục Tiến Lên Nhận Lãnh Cái Chết
          </p>
        </li>
      </ul>
      <ChapterPanagation />
    </div>
  );
}
