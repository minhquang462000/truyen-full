'use client'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
export default function ButtonBackToTopPage() {
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
