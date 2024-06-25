import Link from "next/link";
import * as React from "react";

export interface IListInChapterProps {
  title: string;
}

export default function ListInChapter(props: IListInChapterProps) {
  const { title } = props;
  return (
    <div className="w-full p-2 md:p-0 text-black">
      <h3 className="text-start dark:text-[#3f3f3f] font-bold text-lg py-2">
        {title.toUpperCase()}
      </h3>
      <div className="w-full grid grid-cols-2 text-sm md:grid-cols-4 gap-1 md:gap-3">
        <div className="w-full cursor-pointer">
          <img
            className=" lg:h-[210px] w-full object-cover"
            src="https://iads.staticscdn.net/ads/2022/11/26/images/400x300-pZT0yqVRaUJ1s3uzaLTLiKJ0Dd71hGiDkZihCKou.jpg"
            alt=""
          />
          <Link href="">
            {" "}
            <h4 className="font-bold bg-white p-1 text-center  ">
              Cô nương Hoắc gia nổi tiếng hung hãn tìm mọi cách đoạt nam thần về
              làm chồng, tưởng mình là 'gà' ai ngờ là 'hạt đậu xanh'
            </h4>
          </Link>
        </div>
        <div className="w-full cursor-pointer">
          <img
            className=" lg:h-[210px] w-full object-cover"
            src="https://iads.staticscdn.net/ads/2022/11/26/images/400x300-pZT0yqVRaUJ1s3uzaLTLiKJ0Dd71hGiDkZihCKou.jpg"
            alt=""
          />
          <Link href="">
            {" "}
            <h4 className="font-bold bg-white p-1 text-center  ">
              Cô nương Hoắc gia nổi tiếng hung hãn tìm mọi cách đoạt nam thần về
              làm chồng, tưởng mình là 'gà' ai ngờ là 'hạt đậu xanh'
            </h4>
          </Link>
        </div>
        <div className="w-full cursor-pointer">
          <img
            className=" lg:h-[210px] w-full object-cover"
            src="https://iads.staticscdn.net/ads/2022/11/26/images/400x300-pZT0yqVRaUJ1s3uzaLTLiKJ0Dd71hGiDkZihCKou.jpg"
            alt=""
          />
          <Link href="">
            {" "}
            <h4 className="font-bold bg-white p-1 text-center  ">
              Cô nương Hoắc gia nổi tiếng hung hãn tìm mọi cách đoạt nam thần về
              làm chồng, tưởng mình là 'gà' ai ngờ là 'hạt đậu xanh'
            </h4>
          </Link>
        </div>
        <div className="w-full cursor-pointer">
          <img
            className=" lg:h-[210px] w-full object-cover"
            src="https://iads.staticscdn.net/ads/2022/11/26/images/400x300-pZT0yqVRaUJ1s3uzaLTLiKJ0Dd71hGiDkZihCKou.jpg"
            alt=""
          />
          <Link href="">
            {" "}
            <h4 className="font-bold bg-white p-1 text-center  ">
              Cô nương Hoắc gia nổi tiếng hung hãn tìm mọi cách đoạt nam thần về
              làm chồng, tưởng mình là 'gà' ai ngờ là 'hạt đậu xanh'
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
