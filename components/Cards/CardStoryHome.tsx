import iconFull from "@/public/images/full-label.png";
import Image from "next/image";
export interface ICardStoryHomeProps {}

export default function CardStoryHome(props: ICardStoryHomeProps) {
  return (
    <div className="w-full relative hover:scale-105 transition-all duration-300  h-[120px] md:h-[190px]">
      <img
        className="w-full m-auto h-full object-cover"
        src="https://static.8cache.com/cover/o/eJzLyTDR100qKnJ08QhzLS0M1A_z8zUJcs0zsMz31HeEghwzA32PJCfTqky_MIOMcv1yIzNT3QxjSzMATggSLQ==/the-gioi-hoan-my.jpg"
        alt=""
      />
      <h3 className="bg-[#333] absolute w-full bottom-0 text-[10px] leading-3   md:text-xs font-medium  bg-opacity-70 left-0 text-white text-center py-[6px] text-wrap ">
        Thế Giới Hoàn Mỹ{" "}
      </h3>
      <Image
        className="lg:w-[35px] w-[30px] absolute -left-[6px] bottom-6 lg:bottom-0 z-20"
        src={iconFull}
        alt=""
      />
    </div>
  );
}
