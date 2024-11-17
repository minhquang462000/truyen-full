import Link from "next/link";
import CardComics from "../Cards/CardComics";

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
      <div className="w-full grid grid-cols-2 text-sm md:grid-cols-4 gap-2 md:gap-3">
        <CardComics />
        <CardComics />
        <CardComics />
        <CardComics />
      </div>
    </div>
  );
}
