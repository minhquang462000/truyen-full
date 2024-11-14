import iconFull from "@/public/images/full-label.png";
import Image from "next/image";
export interface ICardStoryHomeProps { }
import { IBook } from "@/interfaces";
import Link from "next/link";
import { convertToSlug } from "@/utils/converToSlug";
import { handleUpdateView } from "@/api/updateView";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardStoryHome({ book }: { book: IBook }) {
  return (
    <div onClick={() => handleUpdateView(book._id)} className="w-full aspect-[2/3] rounded relative hover:scale-105 transition-all duration-300  ">
      <Link href={`/${convertToSlug(book?.name)}-${book?._id}.html`}>
        <Image
          className="w-full m-auto h-full rounded object-cover"
          width={300}
          height={400}
          src={`${DOMAIN}/api/books/${book?.images[0]}`}
          alt=""
        />
      </Link>
      <h3 style={{ textShadow: "1px 2px 2px #000" }}
        className="bg-[#333]  py-[6px] px-1 truncate overflow-hidden  rounded-b absolute w-full bottom-0 md:text-xs leading-3  text-[10px]  font-medium  bg-opacity-70 left-0 text-white text-center   ">
        <Link
          href={`/${convertToSlug(book?.name)}-${convertToSlug(
            book?._id
          )}.html`}
        >
          {book?.name}
        </Link>
      </h3>
      {book.status === 2 && (
        <Image
          className="lg:w-[35px]  w-[30px] absolute -left-[6px] bottom-6 lg:bottom-0 z-10"
          src={iconFull}
          width={100}
          height={100}
          alt=""
        />
      )}
    </div>
  );
}
