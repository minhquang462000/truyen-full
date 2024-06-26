"use client";
import * as React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import Slider from "react-slick";
export interface ISlideHomeProps {
  title: string;
}
const listImg = [
  "https://cdnnvd.com/nettruyen/thumb/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii.jpg",
  "https://cdnnvd.com/nettruyen/thumb/gui-em-nguoi-bat-tu.jpg",
  "https://cdnnvd.com/nettruyen/thumb/kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-ri-no-kanojo.jpg",
  "https://cdnnvd.com/nettruyen/thumb/man-cap-tra-xanh-xuyen-khong-thanh-tieu-dang-thuong.jpg",
  "https://cdnnvd.com/nettruyen/thumb/anh-ay-rat-hay-treu-choc-toi.jpg",
];
const NextArrow = (props: any) => {
  const { onClick, currentSlide } = props;
  return (
    <button
      className={` invisible  group-hover:visible flex justify-center items-center w-[30px] h-[90px] absolute right-0 bg-[#ff6d19] z-10 top-[30%] rounded-l-lg`}
      onClick={onClick}
    >
      <FaArrowRight size={22} color="white" />
    </button>
  );
};
const PrevArrow = (props: any) => {
  const { onClick, currentSlide } = props;
  return (
    <button
      className={` invisible  group-hover:visible flex justify-center items-center    w-[30px] h-[90px] absolute left-0 z-10 top-[30%] bg-[#ff6d19] rounded-r-lg `}
      onClick={onClick}
    >
      <FaArrowLeft size={22} color="white" />
    </button>
  );
};

export default function SlideInChapterPage(props: ISlideHomeProps) {
  const { title } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 2048,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white  px-2 py-1 ">
      <h2 className="flex items-center w-full text-black gap-1 text-lg font-bold pt-3  pb-2">
        {title.toUpperCase()}
      </h2>
      <div className="w-full group">
        <Slider {...settings}>
          {listImg.map((item, index) => {
            return (
              <div key={index} className="w-full text-sm ">
                <div className="w-[95%] text-center  flex flex-col gap-2 overflow-hidden cursor-pointer relative h-full  m-auto">
                  <div className="md:h-[200px] relative overflow-hidden w-full ">
                    <img
                      className="h-full w-full object-cover"
                      src={item}
                      alt="img"
                    />
                    <h3 className=" bg-black bg-opacity-50 md:py-1 text-[10px] md:text-sm leading-4 absolute bottom-0 right-0 text-white    transition-all duration-300  font-semibold">
                      Em Có Nghe Thấy Tôi Nói Không
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
