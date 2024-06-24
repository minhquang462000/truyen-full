import Link from 'next/link';
import * as React from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropup } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

export interface IRootPanagationProps {
}

export default function RootPagination(props: IRootPanagationProps) {
    return (
        <div className='w-max m-auto text-sm mt-6 flex items-center border-[1px] border-[#999]'>
            <Link href={""} className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-max px-2 gap-1'>
                <MdKeyboardDoubleArrowLeft />Đầu
            </Link >
            <Link href={""} className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-8'>
                <IoIosArrowBack />
            </Link >
            <Link href={""} className='h-8 flex items-center hover:bg-[#34495e] hover:text-white justify-center w-8'>1</Link >
            <Link href={""} className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-8'>
                <IoIosArrowForward />
            </Link >
            <Link href={""} className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-max px-2 gap-1'>
                Cuối <MdKeyboardDoubleArrowRight /></Link >
            <button className='h-8  flex items-center hover:bg-[#34495e] cursor-pointer hover:text-white justify-center w-max px-2 gap-1'>
                Chọn trang <IoMdArrowDropup />
            </button >
        </div>
    );
}
