"use client";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ListChapterNewest from "../Lists/ListChapterNewest";

export interface ICardItemDetailProps {}
const content = `【 Sát phạt quả đoán + Đồng cấp vô địch + Giả heo ăn thịt hổ + Vạn cổ đế sư + Góc nhìn nam 】

Chung Thần Tú xuyên không vào một quyển tiểu thuyết nữ tần huyền huyễn, trở thành một giáo viên không có tu vi, nhân phẩm cực kém, vô cùng bại hoại của Thánh Đạo Học Viện.

Vừa bắt đầu liền thu nhân vật phản diện ác độc là Nữ Đế làm đồ đệ?

Cô nàng này thiên phú bình thường, tâm tư ác độc, không đi chính đồ, từ trước đến nay luôn thích cùng thiên mệnh chi nữ tranh quyền đoạt lợi?

Ngược lại còn trở thành bàn đạp của thiên mệnh chi nữ?

Vậy ta liền cố gắng dạy dỗ thật tốt cái hướng sư nghịch đồ này một chút, thay nàng nghịch thiên cải mệnh, để nàng trở thành vô thượng cường giả trong trời đất này.

Ngươi chỉ cần hiểu rõ một điều, làm đệ của Chung Thần Tú ta, thành tựu của ngươi sẽ không thua bất kỳ người nào.

Chung Thần Tú ta có thể không địch thế gian, đệ tử của ta tự nhiên cũng có thể tung hoành thiên hạ.`;
export default function CardItemDetail(props: ICardItemDetailProps) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className=" p-4 grid md:grid-cols-3 md:gap-y-1 md:gap-x-5  ">
      <h3 className="text-xl text-center md:col-span-3 md:flex md:justify-end w-full md:text-2xl font-bold">
        <Link className="w-full md:w-2/3" href="">
          {" Nữ Đế Chấn Kinh: Ta Sư Tôn Hắn Không Phải Bại Hoại Sao".toUpperCase()}
        </Link>
      </h3>
      <div className="md:col-span-1 pt-2 w-full  lg:-translate-y-14  md:text-sm ">
        <div className="w-[220px] image-detail relative lg:shadow-lg lg:shadow-[#666] lg:w-[85%]   my-2 m-auto ">
          <img
            className="object-cover w-full h-full lg:border-[1px] lg:border-black lg:border-l-[5px]"
            src="https://lh3.googleusercontent.com/pw/AP1GczNiG_xTkYcgHpfg596JzAiukXWEUnpXNjog0B3aTbNhPaErprQntAdZmxPxvUKuKodsBg_qpWdDf6Zg7hToqncivR-M2d1X3J-Hs6qHdqrNEsNRDTy0Q2nr2N_4hSCFNJQAYp-5XfjbhOeUoGFEpft7=w215-h322-s-no-gm?authuser=1"
            alt=""
          />
        </div>
        <ul className="flex flex-col font-medium gap-2 pt-3 lg:px-1 lg:pt-8 lg border-r dark:border-dashed">
          <li className="flex items-center flex-wrap w-full ">
            <strong className="w-max  mr-2">Tác giả:</strong>
            <Link href={""} className="hover:underline  overflow-hidden">
              Đỗ Lục Thương Sinh
            </Link>
          </li>

          <li className="flex items-center flex-wrap w-full ">
            <strong className="w-max inline mr-1">Thể loại:</strong>
            <Link href={""} className='hover:underline after:content-[","]'>
              Tiên Hiệp
            </Link>
            <Link href={""} className='hover:underline after:content-[","]'>
              Huyễn Huyền
            </Link>
            <Link href={""} className='hover:underline after:content-[","]'>
              Huyễn Huyền
            </Link>
            <Link href={""} className='hover:underline after:content-[","]'>
              Huyễn Huyền
            </Link>
          </li>
          <li className="flex items-center w-full gap-2">
            <strong className="w-max">Trạng thái :</strong>
            <span className=" text-[#428bca] dark:text-[#3c763d]">Đang ra</span>
          </li>
        </ul>
      </div>

      <div className="md:col-span-2 md:border-[#ccc] md:border-t pt-2 font-medium flex text-xs flex-col gap-1">
        <div className="flex items-center gap-1 w-max text-[#ccc] m-auto text-[20px]">
          <FaStar className="hover:text-[#efa500]" />
          <FaStar className="hover:text-[#efa500]" />
          <FaStar className="hover:text-[#efa500]" />
          <FaStar className="hover:text-[#efa500]" />
          <FaStar className="hover:text-[#efa500]" />
          <FaStar className="hover:text-[#efa500]" />
          <FaStar className="hover:text-[#efa500]" />
          <FaStar className="hover:text-[#efa500]" />
          <FaStar className="hover:text-[#efa500]" />
          <FaStar className="hover:text-[#efa500]" />
        </div>
        <span className="italic flex gap-1 items-center w-max m-auto">
          <p>Đánh giá:</p>
          <strong>6.3</strong>
          <p>/10 từ</p>
          <strong>3 lượt</strong>
        </span>
        <p
          className={`whitespace-pre-wrap   mt-2  overflow-hidden ${
            showMore ? "h-auto" : "h-[100px] md:h-[190px]"
          }`}
        >
          {content.replace(/([.,!?])/g, "$1")}
        </p>
        <div className="w-full flex pr-4 md:p-0 justify-end">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`right-4 bottom-0 hover:shadow p-1 border rounded  flex items-center w-max mr-0 gap-1 py-[2px] ${
              showMore && "hidden"
            }`}
          >
            Xem thêm <MdKeyboardDoubleArrowRight />
          </button>
        </div>
        <ListChapterNewest />
      </div>
    </div>
  );
}
