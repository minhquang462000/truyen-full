import Link from 'next/link';
import * as React from 'react';
import { IoMdHome } from 'react-icons/io';

export interface ITitlePageProps {
}

export default function TitlePage({ title }: { title: string }) {
    return (
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
                        {title}
                    </li>
                </Link>
            </ul>
        </div>
    );
}
