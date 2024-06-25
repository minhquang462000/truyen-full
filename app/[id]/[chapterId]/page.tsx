import MainFooter from "@/components/Footers/MainFooter";
import HiddenHeaderChapter from "@/components/Functions/HiddenHeaderChapter";
import Link from "next/link";
import logo from "@/public/images/spriteimg_new_white_op.png";

import { FaCommentAlt, FaFlag } from "react-icons/fa";
import ButtonChangeChapter from "@/components/Functions/BuutonChangeChapter";
import { IoMdHome } from "react-icons/io";
import { SlActionRedo } from "react-icons/sl";
import SlideInChapterPage from "@/components/Slides/SlideInChapterPage";
import ListInChapter from "@/components/Lists/ListInChapter";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <main className="w-full text-[#4e4e4e]  relative    bg-gradient-to-b from-[#d4d4d4] to-[#f4f4f4] ">
      <HiddenHeaderChapter />

      <div className="dark:bg-[#222222]  dark:text-[#b1b1b1] ">
        <div className="text-center py-5 flex flex-col gap-2 m-auto md:max-w-[750px] lg:max-w-[1200px]">
          <h2 className="text-[#690] text-xl font-semibold">
            <Link href={""}>
              {" "}
              {"Nữ Đế Chấn Kinh: Ta Sư Tôn Hắn Không Phải Bại Hoại Sao".toUpperCase()}
            </Link>
          </h2>
          <h3 className="leading-5 mt-2 text-[#808080] ">
            <Link href={""}>
              Chương 30: 30: Ngươi Nếu Không Phục Tiến Lên Nhận Lãnh Cái Chết
            </Link>
          </h3>
          <hr
            className="w-[59px] h-[23px] m-auto  border-none  bg-no-repeat"
            style={{
              backgroundImage: `url(${logo.src})`,
              backgroundPosition: "-200px -27px",
            }}
          />
          <ButtonChangeChapter />
          <hr
            className="w-[277px] h-[35px] my-4 m-auto border-none  bg-no-repeat"
            style={{
              backgroundImage: `url(${logo.src})`,
              backgroundPosition: "0 -55px",
            }}
          />
          <div className="my-5 md:my-8 lg:my-10 font-mono text-2xl">
            Nội dung
          </div>
          <div className="w-full flex flex-col gap-5">
            <ListInChapter title="truyện đang hot" />
            <ListInChapter title="truyện tranh đang hot" />
          </div>
          <hr
            className="w-[277px] h-[35px] my-4 m-auto border-none  bg-no-repeat"
            style={{
              backgroundImage: `url(${logo.src})`,
              backgroundPosition: "0 -55px",
            }}
          />
          <ButtonChangeChapter />
          <div className="w-full dark:text-[#b1b1b1] grid px-2 md:px-0 lg:grid-cols-2 gap-x-4 ">
            <Link
              href={""}
              className="border-[#2D9FD8] dark:border-[#6d6d6d] dark:bg-[#121212] hover:underline border-[1px] border-dashed my-[10px] rounded-md bg-[#d9edf7] text-center px-3 py-1 "
            >
              Bách Luyện Thành Thần - Chuyện về một kẻ tôi luyện bản thân liên
              tục cho đến khi đạt tới{" "}
              <b className="text-[#ff0000] mx-1">
                {" "}
                đỉnh cao nhất của toàn bộ thể giới
              </b>{" "}
              này
            </Link>
            <Link
              href={""}
              className="border-[#2D9FD8] dark:border-[#6d6d6d] dark:bg-[#121212] hover:underline border-[1px] border-dashed my-[10px] rounded-md bg-[#d9edf7] text-center px-3 py-1 "
            >
              Võ Luyện Đỉnh Phong - Sống trong nghịch cảnh, phát triển trong
              tuyệt địa, bất khuất không bỏ cuộc, mới có thể
              <b className="text-[#ff0000] mx-1">
                phá vỡ được cực đạo cảu võ thuật
              </b>
            </Link>
            <Link
              href={""}
              className="border-[#2D9FD8] dark:border-[#6d6d6d] dark:bg-[#121212]  hover:underline border-[1px] border-dashed my-[10px] rounded-md bg-[#d9edf7] text-center px-3 py-1 "
            >
              Lạc vào thế giới người thú nơi{" "}
              <b className="text-[#ff0000] mx-1">
                {" "}
                nam nhân đẹp như Khổng tước
              </b>{" "}
              còn nữ lại xấu không nỡ nhìn, cô gái lập nên{" "}
              <b className="text-[#ff0000] mx-1">hậu cung mỹ nam</b>, cuộc đời
              chạm đỉnh!
            </Link>
            <Link
              href={""}
              className="border-[#2D9FD8] dark:border-[#6d6d6d] dark:bg-[#121212]  hover:underline border-[1px] border-dashed my-[10px] rounded-md bg-[#d9edf7] text-center px-3 py-1 "
            >
              {" "}
              Đấu Phá Thương Khung -{" "}
              <b className="text-[#ff0000] mx-1">
                {" "}
                Một thiên tài tu luyện
              </b>{" "}
              trong phút chốc thành phế vật, từ phế vật từng bước{" "}
              <b className="text-[#ff0000] mx-1">khẳng định lại chính mình!</b>
            </Link>
          </div>
          <div className="flex gap-2  w-max m-auto text-white font-semibold">
            <button className="bg-[#f0ad4e] border dark:bg-[#121212] dark:text-[#eea236] dark:hover:bg-[#121212] border-[#eea236] hover:bg-[#EC971F] flex items-center rounded px-2 py-[6px] gap-1">
              {" "}
              <FaFlag />
              Báo lỗi chương
            </button>
            <button className="bg-[#5bc0de] border dark:bg-[#121212] dark:text-[#46b8da] dark:hover:bg-[#121212] border-[#46b8da] hover:bg-[#31B0D5] flex items-center rounded px-2 py-[6px] gap-1">
              <FaCommentAlt /> Bình luận
            </button>
          </div>
          <div className="border-[#2D9FD8] dark:border-[#6d6d6d] dark:bg-[#121212] border-[1px] hidden lg:block border-dashed w-[500px]  mx-auto my-[10px] rounded-md bg-[#d9edf7] text-center px-3 py-1 ">
            Bạn có thể dùng phím mũi tên hoặc WASD để lùi/sang chương.
          </div>
          <div className="w-full flex flex-col gap-3">
            <SlideInChapterPage title="truyện mới" />
            <SlideInChapterPage title="truyện hot" />
          </div>
        </div>
      </div>
      <MainFooter />
    </main>
  );
}
