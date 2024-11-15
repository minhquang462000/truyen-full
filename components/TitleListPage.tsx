import Link from 'next/link';
import * as React from 'react';
import { IoMdHome } from 'react-icons/io';

export interface IAppProps {
}

export default function TitleListPage({ params }: { params: string }) {
    const title = params
    return (
        <div className="w-full text-[#b1b1b1] bg-white dark:bg-[#2e3740] dark:shadow-transparent p-1  text-sm  shadow-md shadow-[#ccc]">
            <ul className="w-full text-sm font-medium  md:max-w-[750px]   m-auto lg:max-w-[1200px] flex  gap-2 items-center flex-wrap ">
                <Link href={"/"}>
                    {" "}
                    <li className={`flex font-semibold hover:underline items-center gap-1`}>
                        <IoMdHome size={22} /> Truyện
                    </li>
                </Link>
                <li className='font-bold'>/</li>
                <Link href={""}>
                    <li className=' hover:underline '>
                        {" "}
                        {title}
                    </li>
                </Link>
            </ul>
        </div>
    );
}
