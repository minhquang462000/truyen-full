import ChangeListByRat from '@/components/Functions/ChangeListByRat';
import ListCategoryHome from '@/components/Lists/ListCategoryHome';
import ListStoryCategory from '@/components/Lists/ListStoryCategory';
import { MainLayout } from '@/layouts';
import * as React from 'react';
import { IoMdHome } from 'react-icons/io';

export interface IpageProps {
}

export default function page(props: IpageProps) {
    return (
        <MainLayout>
           <main className="w-full dark:bg-[#222222] dark:text-[#b1b1b1] pb-5">
                <div className='w-full  bg-white p-2  shadow-md shadow-[#ccc]'>
                    <ul className='w-full text-base  md:max-w-[750px]   m-auto lg:max-w-[1200px] flex  gap-2 items-center flex-wrap '>
                        <li className='flex font-semibold items-center gap-1'><IoMdHome size={25} /> Truyện</li>
                        <li className='before:content-["/"] before:mr-1'> Truyện mới cập nhật</li>
                    </ul>
                </div>
                <div className='w-full md:max-w-[750px]   m-auto lg:max-w-[1200px]'>
                    <div className='w-full grid grid-cols-1 py-1 mt-4 gap-5 lg:grid-cols-4'>
                        <div className='lg:col-span-3'>
                            <ListStoryCategory />
                        </div>
                        <div className='hidden  lg:block'>
                            <div className='bg-[#ecf0f1] text-xs flex flex-col gap-3 border-[#D9E1E4] border p-3 '>
                                <p className='leading-5'>Truyện tiên hiệp thường kể về quá trình tu luyện và khám phá thế giới tu sĩ thần tiên đầy bí ẩn của nhân vật chính.</p>
                                <p className='leading-5'>Trong truyện tiên hiệp thường chia ra những cấp bậc tu luyện trước khi thành tiên như sau:</p>
                                <ul className='list-disc list-inside ml-6 flex flex-col gap-1'>
                                    <li>Luyện Khí</li>
                                    <li>Khai Quang</li>
                                    <li>Trúc Cơ</li>
                                    <li>  Ích Cốc</li>
                                    <li>  Kết Đan (Kim Đan)</li>
                                    <li> Nguyên Anh</li>
                                    <li>  Hóa Thần (Phân Thần)</li>
                                    <li> Hợp Thể</li>
                                    <li>  Độ Kiếp</li>
                                    <li> Đại Thừa</li>
                                </ul>
                                <p className='leading-5'>Sau khi thành tiên thì có những cấp bậc:</p>
                                <ul className='list-disc list-inside ml-6 flex flex-col gap-1'>
                                    <li>Luyện Khí</li>
                                    <li>Khai Quang</li>
                                    <li>Trúc Cơ</li>
                                    <li>  Ích Cốc</li>
                                    <li>  Kết Đan (Kim Đan)</li>
                                    <li> Nguyên Anh</li>
                                    <li>  Hóa Thần (Phân Thần)</li>
                                    <li> Hợp Thể</li>
                                    <li>  Độ Kiếp</li>
                                    <li> Đại Thừa</li>
                                </ul>
                                <p className='leading-5 mb-5'>Ngoài ra còn có những cấp độ ngoài tiên như Bán Thánh, Vô Cực Thánh Nhân,.. dựa theo trí tưởng tượng của tác giả.</p>
                            </div>
                            <div className='bg-[#ecf0f1] border-[#D9E1E4] border  text-base mt-8 p-2 '>
                                <ListCategoryHome />
                            </div>
                            <div className='text-xs mt-8 p-2 '>
                                <ChangeListByRat />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
