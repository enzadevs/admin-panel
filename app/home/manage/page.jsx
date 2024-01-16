export const metadata = {
    title: 'Панель Управления'
}

import Link from 'next/link'
import {IoGiftOutline} from 'react-icons/io5'
import {BsBoxSeam,BsCartCheck} from 'react-icons/bs'
import {TbDeviceDesktopCheck,TbCategory2,TbReportMoney,TbTruckDelivery} from 'react-icons/tb'
import {AiOutlineNotification} from 'react-icons/ai'
import {FaCity} from 'react-icons/fa6'

export default function ManagementPage(){
    return(
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-bold'>Панель Управления</h1>
            <div className='grid grid-cols-4 gap-8'>
                <Link href='/home/products' className='bg-calm-50 cursor-pointer shadow-sm border border-light rounded-lg flex-row-center transition hover:border-calm-400 h-32 w-full'>
                    <div className='center flex-[70%] h-full max-w-[70%]'>
                        <p className='text-2xl'>Товары</p>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <BsBoxSeam className='h-12 w-12'/>
                    </span>
                </Link>
                <Link href='/home/categories' className='bg-calm-50 cursor-pointer shadow-sm border border-light rounded-lg flex-row-center transition hover:border-calm-400 h-32 w-full'>
                    <div className='center flex-[70%] h-full max-w-[70%]'>
                        <p className='text-2xl'>Категории</p>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <TbCategory2 className='h-12 w-12'/>
                    </span>
                </Link>
                {/* <Link href='/home/giftcards' className='bg-calm-50 cursor-pointer shadow-sm border border-light rounded-lg flex-row-center transition hover:border-calm-400 h-32 w-full'>
                    <div className='center flex-[70%] h-full max-w-[70%]'>
                        <p className='text-2xl'>Подарочные купоны</p>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <IoGiftOutline className='h-12 w-12'/>
                    </span>
                </Link> */}
                {/* <Link href='/home/discounts' className='bg-calm-50 cursor-pointer shadow-sm border border-light rounded-lg flex-row-center transition hover:border-calm-400 h-32 w-full'>
                    <div className='center flex-[70%] h-full max-w-[70%]'>
                        <p className='text-2xl'>Скидки</p>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <AiOutlineNotification className='h-12 w-12'/>
                    </span>
                </Link> */}
                <Link href='/home/ads' className='bg-calm-50 cursor-pointer shadow-sm border border-light rounded-lg flex-row-center transition hover:border-calm-400 h-32 w-full'>
                    <div className='center flex-[70%] h-full max-w-[70%]'>
                        <p className='text-2xl'>Реклама</p>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <TbDeviceDesktopCheck className='h-12 w-12'/>
                    </span>
                </Link>
                <Link href='/home/orders' className='bg-calm-50 cursor-pointer shadow-sm border border-light rounded-lg flex-row-center transition hover:border-calm-400 h-32 w-full'>
                    <div className='center flex-[70%] h-full max-w-[70%]'>
                        <p className='text-2xl'>Заказы</p>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <BsCartCheck className='h-12 w-12'/>
                    </span>
                </Link>
                {/* <Link href='/home/deliveries' className='bg-calm-50 cursor-pointer shadow-sm border border-light rounded-lg flex-row-center transition hover:border-calm-400 h-32 w-full'>
                    <div className='center flex-[70%] h-full max-w-[70%]'>
                        <p className='text-2xl'>Доставки</p>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <TbTruckDelivery className='h-12 w-12'/>
                    </span>
                </Link> */}
                {/* <Link href='/home/checkout' className='bg-calm-50 cursor-pointer shadow-sm border border-light rounded-lg flex-row-center transition hover:border-calm-400 h-32 w-full'>
                    <div className='center flex-[70%] h-full max-w-[70%]'>
                        <p className='text-2xl'>Касса</p>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <TbReportMoney className='h-12 w-12'/>
                    </span>
                </Link> */}
                <Link href='/home/cities' className='bg-calm-50 cursor-pointer shadow-sm border border-light rounded-lg flex-row-center transition hover:border-calm-400 h-32 w-full'>
                    <div className='center flex-[70%] h-full max-w-[70%]'>
                        <p className='text-2xl'>Города</p>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <FaCity className='h-12 w-12'/>
                    </span>
                </Link>
            </div>
        </div>
    )
}