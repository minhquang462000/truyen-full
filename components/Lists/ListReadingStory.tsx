import Link from 'next/link';
import * as React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

export interface IListReadingStoryProps {
}

export default function ListReadingStory(props: IListReadingStoryProps) {
    return (
        <div className='w-full text-sm font-medium'>
            <div className="w-full relative  border-b border-[#ccc] flex items-center font-medium justify-between">
                <h2 className="flex gap-1 lg:text-base text-xl pl-1 md:pl-0 pb-2 items-center">
                    <Link href=""> TRUYỆN ĐANG ĐỌC</Link>
                </h2>
                <div className="bg-[#999] absolute mt-[6px] bottom-[-1px] w-[200px] lg:w-[160px] h-[2px]" />
            </div>
            <ul className='w-full flex   flex-col'>
                <li className='flex w-full border-b border-dashed border-[#b8b8b8]'>
                    <span className='w-3/5 md:w-1/2 lg:w-3/5 overflow-hidden truncate border-r p-2 lg:px-0 flex items-center  border-[#b8b8b8] border-dashed '>
                        <IoIosArrowForward size={20} color='#8E8C8C' />
                        <p className='hover:underline'> <Link href={""}>Thế Giới Hoàn Mỹ</Link></p>
                    </span>
                    <p className='w-2/5 p-2 md:w-1/2 lg:w-2/5 text-[#31708f] '><Link href={""}>Đọc tiếp C1</Link></p>
                </li>
               
            </ul>
        </div>
    );
}
