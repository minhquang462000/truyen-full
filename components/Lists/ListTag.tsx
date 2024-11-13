import { getListTags } from '@/api/tags';
import { ITag } from '@/interfaces';
import { convertToSlug } from '@/utils/converToSlug';
import Link from 'next/link';
import * as React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
export default async function ListTag() {
    const listTags = await getListTags();
    return (
        <div className='mb-4'>
            <div className="w-full relative dark:border-none mt-4  border-b border-[#ccc] flex items-center font-medium justify-between">
                <h4 className="flex dark:text-white  dark:border-none  pl-1 border-b border-[#333] py-2 md:pl-0  items-center">
                    <Link href="/the-loai/ten-the-loai"> TAGS</Link>
                    <IoIosArrowForward size={20} />
                </h4>
            </div>
            <ul className="flex mt-4 justify-center flex-wrap gap-2">
                {listTags?.map((tag: ITag, index: number) => (
                    <li
                        className="border rounded-md text-sm border-gray-300 px-2"
                        key={index}
                    >
                        <Link href={`/tag/${convertToSlug(tag?.name)}-${tag?._id}}.html`}>
                            {tag?.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
