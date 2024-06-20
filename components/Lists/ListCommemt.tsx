'use client'
import Link from 'next/link';
import { useState } from 'react';
import CardComment from '../Cards/CardComment';

export interface IListCommentProps {
}

export default function ListComment(props: IListCommentProps) {
    const [showBtnPost, setShowBtnPost] = useState(false)
    return (
        <div className='w-full'>
            <div className="w-full border-b border-[#ccc] flex items-end justify-between font-medium ">
                <h2 className="text-lg md:text-xl pb-2 border-b border-[#333] pl-1 md:pl-0">
                    <Link href=""> {"Bình luận truyện".toUpperCase()}</Link>
                </h2>
            </div>
            <div className='w-full mt-5'>
                <ul className='flex justify-between  items-center '>
                    <li className='font-bold'>127 bình luận</li>
                    <li className='font-medium flex gap-2 items-center'>
                        Sắp xếp theo
                        <select className='border border-[#333] p-1 rounded' name="" id="">
                            <option value="">Mới nhất</option>
                            <option value="">Cũ nhất</option>
                        </select>
                    </li>
                </ul>
                <div className='w-full flex border pb-3 mt-[50px] flex-col h-max items-end'>
                    <textarea onClick={() => setShowBtnPost(true)} className='w-full  h-[80px] py-2 px-3 text-lg font-medium md:text-xl' placeholder='Viết bình luận' name="" id=""></textarea>
                    <button className={`w-max bg-[#9cb4d8] text-white font-bold px-3 py-1 rounded mt-3 mr-3 border-[#9cb4d8] ${!showBtnPost && 'hidden'}`}>Đăng nhập vào bài viết</button>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <CardComment />
                    <CardComment />
                    <CardComment />
                </div>
            </div>
        </div>
    );
}
