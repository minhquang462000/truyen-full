import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export interface IChapterPanagationProps {
}

export default function ChapterPanagation(props: IChapterPanagationProps) {
    return (
        <div className='w-max m-auto text-sm mt-6 flex items-center border-[1px] border-[#999]'>
            <Link href={""} className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-8'>
                <IoIosArrowBack />
            </Link >
            <Link href={""} className='h-8 flex items-center hover:bg-[#34495e] hover:text-white justify-center w-8'>1</Link >
            <Link href={""} className='h-8  flex items-center hover:bg-[#34495e] hover:text-white justify-center w-8'>
                <IoIosArrowForward />
            </Link >
        </div>
    );
}
