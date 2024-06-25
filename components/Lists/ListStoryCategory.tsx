import Link from "next/link";
import CardPageCategory from "../Cards/CardPageCategory";
import RootPagination from "../Functions/RootPagination";

export interface IListStoryCategoryProps {}

export default function ListStoryCategory(props: IListStoryCategoryProps) {
  return (
    <div className="w-full ">
      <div className="w-full border-b font-sans border-[#ccc] dark:border-none flex items-end justify-between font-medium ">
        <h2 className="text-sm md:text-xl pb-2 border-b dark:border-none dark:text-white border-[#333] pl-1 md:pl-0">
          <Link href=""> {"Truyện mới cập nhật".toUpperCase()}</Link>
        </h2>
        <p className="text-[10px] md:text-base pb-2">
          {" "}
          TRUYỆN MỚI CẬP NHẬT HOÀN (FULL)
        </p>
      </div>
      <div className="w-full mt-3 ">
        <CardPageCategory />
        <CardPageCategory />
        <CardPageCategory />
        <CardPageCategory />
        <CardPageCategory />
      </div>
      <RootPagination />
    </div>
  );
}
