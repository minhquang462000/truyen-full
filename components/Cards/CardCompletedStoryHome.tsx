'use client'
import Link from 'next/link';

export interface ICardComplatedStpryHomeProps {
}

export default function CardCompletedStoryHome(props: ICardComplatedStpryHomeProps) {
  return (
    <div className=' text-xs md:text-sm  w-full text-center'>
      <img className='w-full h-[150px] md:h-[220px] lg:h-[245px] object-cover' src="https://static.8cache.com/cover/o/eJzLyTDR100qKnJ08QhzLS0M1A_z8zUJcs0zsMz31HeEghwzA32PJCfTqky_MIOMcv1yIzNT3QxjSzMATggSLQ==/the-gioi-hoan-my.jpg" alt="" />
      <p className='font-bold mt-2 lg:mt-1 w-full overflow-hidden truncate'><Link href="">The Gioi Hoan My</Link></p>
      <span className='bg-[#2A5893] text-white dark:text-[#A9CF54] dark:bg-transparent dark:border dark:border-[#A9CF54] font-bold text-[10px] md:text-xs px-1 py-[3px] rounded-sm '>Full-460 chương</span>
    </div>
  );
}
