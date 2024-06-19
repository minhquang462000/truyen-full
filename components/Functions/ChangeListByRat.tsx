'use client'

import { useEffect, useState } from "react";
import ListRatingStory from "../Lists/ListRatingStory";

export interface IAppProps {
}

export default function ChangeListByRat(props: IAppProps) {
  const [activeRat, setActiveRat] = useState<number>(0)

  const renderListByIndex = () => {
    switch (activeRat) {
      case 0:
        return <ListRatingStory />
      case 1:
        return <ListRatingStory />
      case 2:
        return <ListRatingStory />
      default:
        return null
    }
  }
  useEffect(() => {
    renderListByIndex()
  }, [activeRat])
  return (
    <div className='w-full'>
      <div className="w-full relative  border-b border-[#ccc] flex items-center font-medium justify-between">
        <h2 className="flex   text-lg pl-1 md:pl-0  items-center">
          TRUYỆN ĐANG HOT
        </h2>
        <div className="bg-[#999] absolute mt-[6px] bottom-[-1px] w-[180px] h-[2px]" />
      </div>
      <div className="flex w-full mt-4 font-semibold justify-center items-center gap-2">
        <button onClick={() => setActiveRat(0)} className={`border-2 min-w-[75px]  py-2 rounded-full hover:bg-[#4e4e4e] hover:text-white ${activeRat === 0 ? 'bg-[#4e4e4e] text-white' : ''}`}>NGÀY</button>
        <button onClick={() => setActiveRat(1)} className={`border-2 min-w-[75px]  py-2 rounded-full hover:bg-[#4e4e4e] hover:text-white ${activeRat === 1 ? 'bg-[#4e4e4e] text-white' : ''}`}>THÁNG</button>
        <button onClick={() => setActiveRat(2)} className={`border-2 min-w-[75px]  py-2 rounded-full hover:bg-[#4e4e4e] hover:text-white ${activeRat === 2 ? 'bg-[#4e4e4e] text-white' : ''}`}>ALL TIME</button>
      </div>
      {renderListByIndex()}
    </div>
  );
}
