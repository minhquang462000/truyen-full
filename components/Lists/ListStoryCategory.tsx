import Link from 'next/link';
import * as React from 'react';
import { FaPencil } from 'react-icons/fa6';
import { ImBook } from 'react-icons/im';
import CardPageCategory from '../Cards/CardPageCategory';
import RootPanagation from '../Functions/RootPanagation';

export interface IListStoryCategoryProps {
}

export default function ListStoryCategory(props: IListStoryCategoryProps) {
    return (
        <div className='w-full '>
            <div className="w-full border-b border-[#ccc] flex items-end justify-between font-medium ">
                <h2 className="text-sm md:text-xl pb-2 border-b border-[#333] pl-1 md:pl-0">
                    <Link href=""> {("Truyện mới cập nhật").toUpperCase()}</Link>
                </h2>
                <p className='text-[10px] md:text-base pb-2'> TRUYỆN MỚI CẬP NHẬT HOÀN (FULL)</p>
            </div>
            <div className='w-full mt-3 '>
                <CardPageCategory />
                <CardPageCategory />
                <CardPageCategory />
                <CardPageCategory />
                <CardPageCategory />
            </div>
            <RootPanagation />
        </div>
    );
}
