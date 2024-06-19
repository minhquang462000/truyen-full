import Link from 'next/link';

export interface IListChapterProps {
}

export default function ListChapter (props: IListChapterProps) {
  return (
    <div>
          <div className="w-full border-b border-[#ccc] flex items-end justify-between font-medium ">
              <h2 className="text-sm md:text-xl pb-2 border-b border-[#333] pl-1 md:pl-0">
                  <Link href=""> {("Truyện mới cập nhật").toUpperCase()}</Link>
              </h2>
              <p className='text-[10px] md:text-base pb-2'> TRUYỆN MỚI CẬP NHẬT HOÀN (FULL)</p>
          </div>
    </div>
  );
}
