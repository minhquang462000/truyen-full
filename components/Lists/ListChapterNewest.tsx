import Link from "next/link";
import { FaCertificate } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";

export interface IListChapterProps {}

export default function ListChapterNewest(props: IListChapterProps) {
  return (
    <div className="w-full mt-4 text-sm ">
      <div className="w-full border-b dark:border-none  border-[#ccc] flex items-end justify-between font-medium ">
        <h2 className="text-lg md:text-xl dark:border-none dark:text-white pb-2 border-b border-[#333] pl-1 md:pl-0">
          <Link href=""> {"Các chương mới nhất".toUpperCase()}</Link>
        </h2>
      </div>
      <ul className="mt-3 font-medium flex flex-col gap-2 pl-3">
        <li className="flex w-full items-center gap-1 ">
          <GiSevenPointedStar />
          <p className=" w-full overflow-hidden truncate hover:underline">
            {" "}
            C30: 30: Ngươi Nếu Không Phục Tiến Lên Nhận Lãnh Cái Chết
          </p>
        </li>
        <li className="flex w-full items-center gap-1 ">
          <GiSevenPointedStar />
          <p className=" w-full overflow-hidden truncate hover:underline">
            {" "}
            C30: 30: Ngươi Nếu Không Phục Tiến Lên Nhận Lãnh Cái Chết
          </p>
        </li>
        <li className="flex w-full items-center gap-1 ">
          <GiSevenPointedStar />
          <p className=" w-full overflow-hidden truncate hover:underline">
            {" "}
            C30: 30: Ngươi Nếu Không Phục Tiến Lên Nhận Lãnh Cái Chết
          </p>
        </li>
      </ul>
    </div>
  );
}
