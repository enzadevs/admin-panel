import Link from 'next/link'
import {BsBoxSeam} from 'react-icons/bs'
import {TbBrandAppgallery} from 'react-icons/tb'
import {LuUsers2} from 'react-icons/lu'
import {TbMapPlus} from 'react-icons/tb'

export default function ManagementPage(){
    return(
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Панель Управления</h1>
            <div className='flex flex-col gap-2'>
                <Link href='/home/manage/products' className='block input-outline shadow-sm flex-row-center justify-center gap-2 hover:border-calm-400 h-20 w-full'>
                    <BsBoxSeam className='h-6 w-6'/>
                    <p className='text-base lg:text-lg'>Настройки продуктов</p>
                </Link>
                <Link href='/home/manage/brands' className='block input-outline shadow-sm flex-row-center justify-center gap-2 hover:border-calm-400 h-20 w-full'>
                    <TbBrandAppgallery className='h-6 w-6'/>
                    <p className='text-base lg:text-lg'>Бренды</p>
                </Link>
                <Link href='/home/manage/users' className='block input-outline shadow-sm flex-row-center justify-center gap-2 hover:border-calm-400 h-20 w-full'>
                    <LuUsers2 className='h-6 w-6'/>
                    <p className='text-base lg:text-lg'>Настройки пользователей</p>
                </Link>
                {/* <Link href='/home/manage/countries' className='block input-outline shadow-sm flex-row-center justify-center gap-2 hover:border-calm-400 h-20 w-full'>
                    <TbMapPlus className='h-6 w-6'/>
                    <p className='text-base lg:text-lg'>Настройки стран</p>
                </Link> */}
            </div>
        </div>
    )
}