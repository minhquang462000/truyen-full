import Link from 'next/link';
import * as React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

export interface IListCategoryHomeProps {
}

export default function ListCategoryHome (props: IListCategoryHomeProps) {
  return (
      <div className='w-full mt-5'>
          <div className="w-full relative  border-b border-[#ccc] flex items-center font-medium justify-between">
              <h2 className="text-sm md:text-xl pb-2 border-b border-[#333] pl-1 md:pl-0">
                  <Link href=""> {("Thể loại truyện").toUpperCase()}</Link>
              </h2>
          </div>
          <ul className='w-full text-center  mt-3 grid grid-cols-2' >
              <li className='w-full p-1 overflow-hidden truncate hover:underline'><Link href="">Ngon Lù</Link></li>
              <li className='w-full p-1 overflow-hidden truncate hover:underline'><Link href="">Ngon Lù</Link></li>
              <li className='w-full p-1 overflow-hidden truncate hover:underline'><Link href="">Ngon Lù</Link></li>
              <li className='w-full p-1 overflow-hidden truncate hover:underline'><Link href="">Ngon Lù</Link></li>
              <li className='w-full p-1 overflow-hidden truncate hover:underline'><Link href="">Ngon Lù</Link></li>
              <li className='w-full p-1 overflow-hidden truncate hover:underline'><Link href="">Ngon Lù</Link></li>
          </ul>
      </div>
  );
}
