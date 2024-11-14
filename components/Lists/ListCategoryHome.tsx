import { getListCategory } from "@/api/category";
import { ICategory, IFilter } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export interface IListCategoryHomeProps {}

export default async function ListCategoryHome() {
  const categories = await getListCategory({} as IFilter);
  return (
    <div className="w-full ">
      <div className="w-full relative dark:border-transparent  border-b border-[#ccc] flex items-center font-medium justify-between">
        <h2 className="text-sm md:text-xl dark:text-white pb-2  dark:pb-0 border-b dark:border-transparent border-[#333] pl-1 md:pl-0">
          {"Thể loại truyện".toUpperCase()}
        </h2>
      </div>
      <ul className="w-full dark:bg-[#2c2c2c] p-1 text-center  mt-3 grid grid-cols-2">
        {categories?.map((category:ICategory, index:number) => (
          <li
            key={index}
            className="w-full p-1  font-medium text-start  hover:underline"
          >
            <Link
              href={`/the-loai/${convertToSlug(category?.name)}-${convertToSlug(
                category?._id
              )}.html`}
            >
              {category?.name?.split(" ").slice(0, 2).join(" ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
