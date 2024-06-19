'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export interface ICardItemDetailProps {
}
const content = `【 Sát phạt quả đoán + Đồng cấp vô địch + Giả heo ăn thịt hổ + Vạn cổ đế sư + Góc nhìn nam 】

Chung Thần Tú xuyên không vào một quyển tiểu thuyết nữ tần huyền huyễn, trở thành một giáo viên không có tu vi, nhân phẩm cực kém, vô cùng bại hoại của Thánh Đạo Học Viện.

Vừa bắt đầu liền thu nhân vật phản diện ác độc là Nữ Đế làm đồ đệ?

Cô nàng này thiên phú bình thường, tâm tư ác độc, không đi chính đồ, từ trước đến nay luôn thích cùng thiên mệnh chi nữ tranh quyền đoạt lợi?

Ngược lại còn trở thành bàn đạp của thiên mệnh chi nữ?

Vậy ta liền cố gắng dạy dỗ thật tốt cái hướng sư nghịch đồ này một chút, thay nàng nghịch thiên cải mệnh, để nàng trở thành vô thượng cường giả trong trời đất này.

Ngươi chỉ cần hiểu rõ một điều, làm đệ của Chung Thần Tú ta, thành tựu của ngươi sẽ không thua bất kỳ người nào.

Chung Thần Tú ta có thể không địch thế gian, đệ tử của ta tự nhiên cũng có thể tung hoành thiên hạ.`
export default function CardItemDetail(props: ICardItemDetailProps) {
    const [showMore, setShowMore] = useState(false)
    return (
        <div className=' p-4 relative flex flex-col gap-2'>
            <h3 className='text-xl text-center font-bold'>
                <Link href="">{(" Nữ Đế Chấn Kinh: Ta Sư Tôn Hắn Không Phải Bại Hoại Sao").toUpperCase()}</Link>
            </h3>
            <img
                className='w-[210px] my-2 m-auto object-cover'
                src="https://lh3.googleusercontent.com/pw/AP1GczNiG_xTkYcgHpfg596JzAiukXWEUnpXNjog0B3aTbNhPaErprQntAdZmxPxvUKuKodsBg_qpWdDf6Zg7hToqncivR-M2d1X3J-Hs6qHdqrNEsNRDTy0Q2nr2N_4hSCFNJQAYp-5XfjbhOeUoGFEpft7=w215-h322-s-no-gm?authuser=1" alt="" />
            <div className='flex items-center w-full gap-2'>
                <strong className='w-max'>Tác giả:</strong>
                <p className='hover:underline'>Đỗ Lục Thương Sinh</p>
            </div>

            <div className='flex items-center w-full gap-2'>
                <strong className='w-[75px]'>Thể loại:</strong>
                <ul className='flex items-center w-[100%] overflow-hidden truncate'>
                    <li className='hover:underline after:content-[","]'>Tiên Hiệp</li>
                    <li className='hover:underline after:content-[","]'>Huyễn Huyền</li>
                </ul>
            </div>
            <div className='flex items-center w-full gap-2'>
                <strong className='w-max'>Trạng thái :</strong>
                <p className='hover:underline text-[#428bca]'>Đang ra</p>
            </div>
            <div className='flex items-center gap-1 w-max text-[#ccc] m-auto text-[20px]'>
                <FaStar className='hover:text-[#efa500]' />
                <FaStar className='hover:text-[#efa500]' />
                <FaStar className='hover:text-[#efa500]' />
                <FaStar className='hover:text-[#efa500]' />
                <FaStar className='hover:text-[#efa500]' />
                <FaStar className='hover:text-[#efa500]' />
                <FaStar className='hover:text-[#efa500]' />
                <FaStar className='hover:text-[#efa500]' />
                <FaStar className='hover:text-[#efa500]' />
                <FaStar className='hover:text-[#efa500]' />
            </div>
            <span className='italic flex gap-1 items-center w-max m-auto'>
                <p>Đánh giá:</p>
                <strong>6.3</strong>
                <p>/10 từ</p>
                <strong>3 lượt</strong>
            </span>
            <div className={`whitespace-pre-wrap  overflow-hidden ${showMore ? "h-auto" : "h-[100px]"}`}>{content.replace(/([.,!?])/g, '$1')}</div>
            <div className='w-full flex justify-end'>
                <button onClick={() => setShowMore(!showMore)} className={`right-4 bottom-0 hover:shadow p-1 border rounded  flex items-center w-max mr-0 gap-1 py-[2px] ${showMore && "hidden"}`}>Xem thêm <MdKeyboardDoubleArrowRight /></button>
            </div>
        </div>
    );
}
