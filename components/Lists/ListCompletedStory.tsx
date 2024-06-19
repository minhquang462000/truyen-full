import Link from 'next/link';
import * as React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import CardCompletedStoryHome from '../Cards/CardCompletedStoryHome';

export interface IListComplatedProps {
}

export default function ListCompletedStory(props: IListComplatedProps) {
  return (
    <section className='w-full mt-5'>
      <div className="w-full   border-b border-[#ccc] flex items-center font-medium justify-between">
        <h2 className="text-sm md:text-xl pb-2 border-b border-[#333] pl-1 md:pl-0">
                    <Link href=""> {("Truyện đã hoàn thành").toUpperCase()}</Link>
          <IoIosArrowForward size={25} />
        </h2>
      </div>
      <div className='w-full gap-5 px-2 py-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        <CardCompletedStoryHome />
        <CardCompletedStoryHome />
        <CardCompletedStoryHome />
        <CardCompletedStoryHome />
        <CardCompletedStoryHome />
        <CardCompletedStoryHome />
        <CardCompletedStoryHome />
      </div>
    </section>
  );
}
