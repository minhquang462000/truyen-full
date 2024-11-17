import Image from "next/image";
import * as React from "react";
import truyen_tranh from "@/public/images/trruyen_tranh.jpg";
import my_do_toa from "@/public/images/my-do-toa.jpg";
import Link from "next/link";
export interface IAppProps {}
const des = `  Cô nương Hoắc gia nổi tiếng hung hãn tìm mọi cách đoạt nam thần về
              làm chồng, tưởng mình là 'gà' ai ngờ là 'hạt đậu xanh'`;
export default function CardComics(props: IAppProps) {
  return (
    <div className="w-full">
      <Image
        width={300}
        height={400}
        className=" lg:h-[210px] h-[200px] aspect-[2/3] object-top object-cover"
        src={truyen_tranh}
        alt=""
      />
      <Link href="">
        {" "}
        <h4 className="font-bold bg-white p-1 px-2 line-clamp-3 text-center  ">
          {des}
        </h4>
      </Link>
    </div>
  );
}
