import CardItemDetail from '@/components/Cards/CardItemDetail';
import ChangeListByRat from '@/components/Functions/ChangeListByRat';
import ListCategoryHome from '@/components/Lists/ListCategoryHome';
import ListStoryCategory from '@/components/Lists/ListStoryCategory';
import { MainLayout } from '@/layouts';
import Link from 'next/link';
import * as React from 'react';
import { IoMdHome } from 'react-icons/io';

export interface IpageProps {
}

export default function page(props: IpageProps) {
    return (
        <MainLayout>
            <main className="w-full  text-[#4e4e4e] pb-5   m-auto ">
                <div className="w-full border-b mt-5 border-[#ccc] flex items-end justify-between font-medium ">
                    <h2 className=" text-xl pb-2 border-b border-[#333] pl-1 md:pl-0">
                        <Link href=""> {("Thông tin truyện").toUpperCase()}</Link>
                    </h2>
                </div>
                <CardItemDetail />
            </main>
        </MainLayout>
    );
}
