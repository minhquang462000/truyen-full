'use client'

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export interface IAppProps {
}

export default function ButtonChangeTheme(props: IAppProps) {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      onClick={() => setTheme(!theme)}
      className={`relative inline-flex px-1 overflow-hidden  items-center cursor-pointer
         ${theme ? "bg-[#287aaa]" : "bg-[#6d95ba]"} w-[65px] lg:w-[82px] h-[30px] rounded-full`}
    >
      <div
        className={`w-6 h-6  rounded-full flex  items-center justify-center transition-all duration-300 ${theme ? " translate-x-8 bg-[#242F39]" : "bg-[#14425D]"
          }`}
      >
        {theme ? <FaMoon color="yellow" /> : <FaSun color="yellow" />}
      </div>
    </button>
  );
}
