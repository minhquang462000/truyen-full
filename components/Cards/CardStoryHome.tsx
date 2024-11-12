import iconFull from "@/public/images/full-label.png";
import Image from "next/image";
export interface ICardStoryHomeProps {}
import { IBook } from "@/interfaces";
import Link from "next/link";
import { convertToSlug } from "@/utils/converToSlug";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardStoryHome({ book }: { book: IBook }) {
  return (
    <div className="w-full aspect-[2/3] rounded relative hover:scale-105 transition-all duration-300  ">
      <Link href={`/${convertToSlug(book?.name)}-${book?._id}.html`}>
        <Image
          className="w-full m-auto h-full rounded object-cover"
          width={300}
          height={400}
          src={`${DOMAIN}/api/books/${book?.images[0]}`}
          alt=""
        />
      </Link>
      <h3 className="bg-[#333]  line-clamp-2  rounded-b absolute w-full bottom-0 text-[10px]    md:text-xs font-medium  bg-opacity-70 left-0 text-white text-center   py-[3px]  ">
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
