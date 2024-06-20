import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { TbArrowBadgeRightFilled } from "react-icons/tb";


export interface IListStoryByAuthorProps {
}

export default function ListStoryByAuthor(props: IListStoryByAuthorProps) {
    return (
        <div className="bg-[#ecf0f1] border-[1px] mb-8 border-[#D9E1E4] p-2 ">
            <div className="w-full relative  border-b border-[#ccc] flex items-center font-medium justify-between">
                <h2 className="flex gap-1  text-xl pl-1 border-b border-[#333] md:pl-0 pb-2 items-center">
                    <Link href=""> {"Truyện cùng tác giả".toUpperCase()}</Link>
                </h2>
            </div>
            <ul className="w-full mt-3 text-sm flex flex-col">
                <li className="flex  items-center py-2 border-b border-dashed border-[#ccc]  hover:underline">
                    <TbArrowBadgeRightFilled className="text-[20px]" />
                    <Link href={""} className="w-[100%-20px] overflow-hidden truncate hover:underline">Một ngôi sao sáng ,Hai ngôi sáng sao</Link>
                </li>
                <li className="flex  items-center py-2 border-b border-dashed border-[#ccc]  hover:underline">
                    <TbArrowBadgeRightFilled className="text-[20px]" />
                    <Link href={""} className="w-[100%-20px] overflow-hidden truncate hover:underline">Một ngôi sao sáng ,Hai ngôi sáng sao</Link>
                </li>
                <li className="flex  items-center py-2 border-b border-dashed border-[#ccc]  hover:underline">
                    <TbArrowBadgeRightFilled className="text-[20px]" />
                    <Link href={""} className="w-[100%-20px] overflow-hidden truncate hover:underline">Một ngôi sao sáng ,Hai ngôi sáng sao</Link>
                </li>
            </ul>
        </div>
    );
}
