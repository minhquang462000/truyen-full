"use client";

import { useEffect, useState } from "react";
import ListRatingStory from "../Lists/ListRatingStory";

export interface IAppProps {}

export default function ChangeListByRat(props: IAppProps) {
  const [activeRat, setActiveRat] = useState<number>(0);

  const renderListByIndex = () => {
    switch (activeRat) {
      case 0:
        return <ListRatingStory />;
      case 1:
        return <ListRatingStory />;
      case 2:
        return <ListRatingStory />;
      default:
        return null;
    }
  };
  useEffect(() => {
    renderListByIndex();
  }, [activeRat]);
  return (
    <div className="w-full text-sm ">
      <div className="w-full relative  border-b border-[#ccc] flex items-center font-medium justify-between">
        <h2 className="flex  border-b border-[#333] pb-1 text-lg pl-1 md:pl-0  items-center">
          {" truyện đang hot".toUpperCase()}
        </h2>{" "}
      </div>
      <div className="flex w-full mt-4 text-[12px] font-semibold justify-center items-center gap-2">
        <button
          onClick={() => setActiveRat(0)}
          className={`border-2 min-w-[60px] px-4  py-[6px] rounded-full hover:bg-[#4e4e4e] hover:text-white ${
            activeRat === 0 ? "bg-[#4e4e4e] text-white" : "text-[#4e4e4e]"
          }`}
        >
          NGÀY
        </button>
        <button
          onClick={() => setActiveRat(1)}
          className={`border-2 min-w-[60px] px-4  py-[6px] rounded-full hover:bg-[#4e4e4e] hover:text-white ${
            activeRat === 1 ? "bg-[#4e4e4e] text-white" : "text-[#4e4e4e]"
          }`}
        >
          THÁNG
        </button>
        <button
          onClick={() => setActiveRat(2)}
          className={`border-2 min-w-[60px] px-4  py-[6px] rounded-full hover:bg-[#4e4e4e] hover:text-white ${
            activeRat === 2 ? "bg-[#4e4e4e] text-white" : "text-[#4e4e4e]"
          }`}
        >
          ALL TIME
        </button>
      </div>
      {renderListByIndex()}
    </div>
  );
}
