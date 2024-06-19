import * as React from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropup } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

export interface IRootPanagationProps {
}

export default function RootPanagation(props: IRootPanagationProps) {
    return (
        <ul className='w-max m-auto text-sm mt-6 flex items-center border-[1px] border-[#999]'>
            <li className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-max px-2 gap-1'><MdKeyboardDoubleArrowLeft />Đầu</li>
            <li className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-8'><IoIosArrowBack /></li>
            <li className='h-8 flex items-center hover:bg-[#34495e] hover:text-white justify-center w-8'>1</li>
            <li className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-8'><IoIosArrowForward /></li>
            <li className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-max px-2 gap-1'>Cuối <MdKeyboardDoubleArrowRight /></li>
            <li className='h-8  flex items-center hover:bg-[#34495e] cursor-pointer hover:text-white justify-center w-max px-2 gap-1'>Chọn trang <IoMdArrowDropup /></li>
        </ul>
    );
}
