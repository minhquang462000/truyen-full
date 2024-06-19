import Link from 'next/link';

export interface ICardPageCategoryProps {
}

export default function CardPageCategory(props: ICardPageCategoryProps) {
    return (
        <div className='w-full flex text-xs md:text-sm py-1 px-2 justify-between border-t md:gap-4 border-dashed border-[#ccc] gap-2 text-[#4e4e4e]  items-center'>
            <Link className='w-[25%] lg:w-[22%] lg:h-[80px] ' href={""}>
                <img
                    className='w-full  h-full   object-cover'
                    src="https://lh3.googleusercontent.com/pw/AP1GczNiG_xTkYcgHpfg596JzAiukXWEUnpXNjog0B3aTbNhPaErprQntAdZmxPxvUKuKodsBg_qpWdDf6Zg7hToqncivR-M2d1X3J-Hs6qHdqrNEsNRDTy0Q2nr2N_4hSCFNJQAYp-5XfjbhOeUoGFEpft7=w180-h80-c" alt="" />
            </Link>
            <div className='leading-6 table w-[60%] lg:w-[67%]  table-fixed whitespace-normal'>
                <div className=' table-cell m-0 align-middle  '>
                    <h3 className={`hover:underline m-0  text-[18px]  leading-4 md:leading-5  mb-[5px] icon-book text-sm md:text-xl   font-bold  `}>
                        <Link className='' href={""}> Nữ Đế Chấn Kinh: Ta Sư Tôn Hắn Không Phải Bại Hoại Sao</Link>
                    </h3>
                    <span className='border   ml-[5px] align-bottom px-1 py-[1px] border-[#FD8383] text-[#FD8383]'>Hot</span>
                    <span className='border   ml-[5px] align-bottom px-1 py-[1px] border-[#86AD86] text-[#86AD86]'>New</span>
                    <span className='border   ml-[5px] align-bottom px-1 py-[1px] border-[#8eb3fd] text-[#8eb3fd]'>Full</span>
                    <span className='icon-pencil block italic font-medium md:text-lg mt-1 text-sm '>Tên Tác Giả</span>
                </div>
            </div>
            <span className='text-[#31708f] hover:underline w-[15%] font-medium  text-start md:text-center'>C3500</span>
        </div>
    );
}
