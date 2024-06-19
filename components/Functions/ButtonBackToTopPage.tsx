'use client'
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export interface IButtonBackToTopPageProps {
}

export default function ButtonBackToTopPage(props: IButtonBackToTopPageProps) {

    // Cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <button onClick={scrollToTop} className=' gap-3 font-bold text-sm  z-[999] flex items-center justify-center '>
            <p className="hover:underline"> ToS</p>
            <FaRegArrowAltCircleUp size={20}/>
        </button>
    );
}
