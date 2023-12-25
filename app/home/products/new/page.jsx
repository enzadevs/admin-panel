import Link from 'next/link'
import {GrMoney} from 'react-icons/gr'
import {FaPencil,FaHashtag,FaBarcode} from 'react-icons/fa6'
import {RxDropdownMenu} from 'react-icons/rx'
import {TbHome} from 'react-icons/tb'
import {Md123} from 'react-icons/md'

export default function NewProducts(){
    return(
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Новый товар</h1>
            <div className='flex-row-center gap-8'>
                <span className='flex flex-col gap-4 flex-[50%] max-w-[50%]'>
                    <div className='relative rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='text'
                            placeholder='Имя товара'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                        <FaPencil className='absolute right-2 icons'/>
                    </div>
                    <div className='relative rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='text'
                            placeholder='Цена'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                        <GrMoney className='absolute right-2 icons'/>
                    </div>
                    <div className='relative rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='text'
                            placeholder='Категория (dropdown)'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                        <RxDropdownMenu className='absolute right-2 icons'/>
                    </div>
                    <div className='relative rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='text'
                            placeholder='Под категория (dropdown)'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                        <RxDropdownMenu className='absolute right-2 icons'/>
                    </div>
                </span>
                <span className='flex flex-col gap-4 flex-[50%] max-w-[50%]'>
                    <div className='relative rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='text'
                            placeholder='Бренд (dropdown)'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                        <TbHome className='absolute right-2 icons'/>
                    </div>
                    <div className='relative rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='text'
                            placeholder='Теги (dropdown)'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                        <FaHashtag className='absolute right-2 icons'/>
                    </div>
                    <div className='relative rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='text'
                            placeholder='Бар код'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                        <FaBarcode className='absolute right-2 icons'/>
                    </div>
                    <div className='relative rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='text'
                            placeholder='Количество'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                        <Md123 className='absolute right-2 icons'/>
                    </div>
                </span>
            </div>
            <button className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-500 hover:text-white px-4 h-10'>
                Добавить фотографии
            </button>
            <Link href='/home/products' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-500 hover:text-white px-4 h-10'>
                Сохранить
            </Link>
        </div>
    )
}